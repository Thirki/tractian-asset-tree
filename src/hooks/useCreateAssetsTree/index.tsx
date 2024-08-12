import { useCallback, useMemo } from "react";
import { IAsset, ILocation } from "../../api/hooks";
import { IFilters } from "../../context/CompanyContextProvider";

export interface ITreeComponents extends IAsset {
  children: Array<ILocation | IAsset>;
}

export const useCreateAssetsTree = ({
  locations,
  assets,
  filters,
  filterText,
}: {
  locations: ILocation[] | undefined;
  assets: IAsset[] | undefined;
  filters: IFilters[] | undefined;
  filterText: string;
}) => {
  const applyCriticalFilter = (tree: Record<string, ITreeComponents> = {}) => {
    const filteredTree: Record<string, ITreeComponents> = {};
    for (const unit in tree) {
      const currentUnit = tree[unit];
      if (currentUnit.status === "alert") {
        filteredTree[unit] = currentUnit;
      }
    }
    return filteredTree;
  };

  const applyEnergyFilter = (tree: Record<string, ITreeComponents> = {}) => {
    const filteredTree: Record<string, ITreeComponents> = {};
    for (const unit in tree) {
      const currentUnit = tree[unit];
      if (currentUnit.sensorType === "energy") {
        filteredTree[unit] = currentUnit;
      }
    }
    return filteredTree;
  };

  const applyTextFilter = (
    tree: Record<string, ITreeComponents> = {},
    filterText: string
  ) => {
    const filteredTree: Record<string, ITreeComponents> = {};
    for (const unit in tree) {
      const currentUnit = tree[unit];
      if (currentUnit.name.toUpperCase().includes(filterText.toUpperCase())) {
        filteredTree[unit] = currentUnit;
      }
    }
    return filteredTree;
  };

  const applyFilters = useCallback(
    (tree: Record<string, ITreeComponents>, filterText: string) => {
      if (!filters?.length && !filterText) {
        return tree;
      }

      let filteredTree: Record<string, ITreeComponents> = {};

      const getFilteredTree = (baseTree: Record<string, ITreeComponents>) => {
        if (filters?.includes("critical")) {
          return applyCriticalFilter(baseTree);
        }
        if (filters?.includes("energy")) {
          return applyEnergyFilter(baseTree);
        }
        return baseTree;
      };

      filteredTree = getFilteredTree(tree);

      if (filterText) {
        filteredTree = applyTextFilter(filteredTree, filterText);
      }

      const addParentUnitsToTree = (unit: string) => {
        let currentUnit = tree[unit];
        while (currentUnit) {
          const parentUnit =
            tree[currentUnit.parentId || currentUnit.locationId || ""];
          if (parentUnit) {
            filteredTree[parentUnit.id] = parentUnit;
          }
          currentUnit = parentUnit;
        }
      };

      Object.keys(filteredTree).forEach(addParentUnitsToTree);

      return filteredTree;
    },
    [filters]
  );

  const getMappedTree = useMemo(() => {
    if (!locations?.length || !assets?.length) return [];
    const formattedTree: Record<string, ITreeComponents> = {};

    for (const location of locations) {
      formattedTree[location.id] = {
        ...location,
        children: [],
        branchType: "location",
      };
    }

    for (const asset of assets) {
      formattedTree[asset.id] = {
        ...asset,
        children: [],
        branchType: asset.sensorType ? "component" : "asset",
      };
    }

    for (const unitId in formattedTree) {
      const currentUnit = formattedTree[unitId];
      const parentId = currentUnit?.parentId || currentUnit?.locationId || "";

      if (parentId) {
        const currentParent = formattedTree[parentId];
        if (currentParent) {
          currentParent.children?.push(currentUnit);
        }
      }
    }

    return applyFilters(formattedTree, filterText);
  }, [applyFilters, assets, locations, filterText]);

  return getMappedTree;
};
