import { useQuery } from "@tanstack/react-query";
import useCommonAxios from "./useCommonAxios";
import useAuth from "./useAuth";

const useScholarship = (find) => {
  const { user } = useAuth();
  const axiosCommon = useCommonAxios();

  const {
    refetch,
    data: scholarshipData = [],
    isLoading,
  } = useQuery({
    queryKey: ["scholarshipData", find, user?.email],
    queryFn: async () => {
      let query = "";

      if (user?.email) {
        query += `email=${user.email}`;
      }

      if (find) {
        query += query ? `&search=${find}` : `search=${find}`;
      }

      const res = await axiosCommon.get(
        `/scholarship${query ? `?${query}` : ""}`
      );
      return res.data;
    },
    enabled: true, // Always enabled since we handle the conditional logic inside queryFn
  });

  return [scholarshipData, refetch, isLoading];
};

export default useScholarship;
