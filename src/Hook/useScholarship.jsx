import { useQuery } from "@tanstack/react-query";
import useCommonAxios from "./useCommonAxios";
import useAuth from "./useAuth";

const useScholarship = (find) => {
  const { user } = useAuth();
  const axiosCommon = useCommonAxios();

  const { refetch, data: scholarshipData = [], isLoading } = useQuery({
    queryKey: ["scholarshipData", find, user?.email],
    queryFn: async () => {
      // Construct the query string dynamically
      const emailQuery = user?.email ? `email=${user.email}` : "";
      const searchQuery = find ? `search=${find}` : "";
      const queryString = [emailQuery, searchQuery].filter(Boolean).join("&");

      const res = await axiosCommon.get(`/scholarship${queryString ? `?${queryString}` : ""}`);
      return res.data;
    },
    enabled: !!find || !!user?.email, // Only fetch if find or email is present
  });

  return [scholarshipData, refetch, isLoading];
};

export default useScholarship;
