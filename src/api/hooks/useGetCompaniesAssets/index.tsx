import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axiosConfig";

export type TBranchType = "location" | "asset" | "component";

export interface IAsset {
  id: string;
  locationId?: string | null;
  name: string;
  parentId?: string | null;
  gatewayId?: string;
  sensorId?: string;
  sensorType?: string;
  status?: string;
  branchType: TBranchType;
}

export const getCompanyAssetsKey = (companyId: string) =>
  `useGetCompaniesAssets-${companyId}`;

export const useGetCompaniesAssets = (companyId = "", enabled = false) => {
  const fetchCompaniesAssets = async (): Promise<IAsset[]> => {
    const response = await axiosInstance.get(`/companies/${companyId}/assets`);
    return response.data;
  };
  return useQuery<IAsset[]>({
    queryKey: [getCompanyAssetsKey(companyId)],
    queryFn: fetchCompaniesAssets,
    refetchOnWindowFocus: false,
    enabled,
  });
};
