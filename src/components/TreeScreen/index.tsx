import { useEffect, useState } from "react";
import { ITreeComponents, useCreateAssetsTree } from "../../hooks";
import { Container, LoadingWrapper, TreeWrapper, TreeElements } from "./styles";
import { useCompanyContext } from "../../context/hooks";
import { TreeElement } from "../TreeElement";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { useTheme } from "styled-components";
import { Input } from "../Input";

export const TreeScreen = () => {
  const { colors } = useTheme();

  const [filterText, setFilterText] = useState("");
  const [rootsElements, setRootElements] = useState<ITreeComponents[]>([]);

  const {
    setTreeComponents,
    locations,
    assets,
    isLoading,
    filters,
    selectedCompany,
  } = useCompanyContext();

  const tree = useCreateAssetsTree({
    locations,
    assets,
    filters,
    filterText,
  });

  useEffect(() => {
    const formattedTree = Object.values(tree) as ITreeComponents[];
    const filteredTree = formattedTree.filter(
      (branch) => !branch.parentId && !branch.locationId
    );
    setRootElements(filteredTree);
    setTreeComponents(formattedTree);
  }, [setTreeComponents, tree]);

  useEffect(() => {
    setFilterText("");
  }, [selectedCompany]);

  const renderTree = () => {
    return (
      <TreeWrapper>
        <Input setInputText={setFilterText} text={filterText} />
        <TreeElements>
          {rootsElements.map((element) => (
            <TreeElement key={element.id} element={element} />
          ))}
        </TreeElements>
      </TreeWrapper>
    );
  };

  const renderLoading = () => {
    return (
      <LoadingWrapper>
        <LoadingSkeleton height="20px" width="50%" $color={colors.gray150} />
        <LoadingSkeleton height="20px" width="70%" $color={colors.gray200} />
        <LoadingSkeleton height="20px" width="30%" $color={colors.gray150} />
        <LoadingSkeleton height="20px" width="80%" $color={colors.gray200} />
        <LoadingSkeleton height="20px" width="20%" $color={colors.gray150} />
        <LoadingSkeleton height="20px" width="80%" $color={colors.gray200} />
      </LoadingWrapper>
    );
  };

  return <Container>{!isLoading ? renderTree() : renderLoading()}</Container>;
};
