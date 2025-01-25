import { useQuery } from "@tanstack/react-query";
import useCommonAxios from "./useCommonAxios";

const useUser = () => {
  const axiosCommon = useCommonAxios();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosCommon.get(`/users`);
      return res.data;
    },
  });

  return [users, refetch];
};

export default useUser;
