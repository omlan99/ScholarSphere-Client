import { useQuery } from "@tanstack/react-query";
import useCommonAxios from "./useCommonAxios";
import useAuth from "./useAuth";

const useUser = () => {
  const axiosCommon = useCommonAxios();
  const {user} = useAuth()
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosCommon.get(`/users`);
      return res.data;
    },
  });

  return [users, user.email, refetch];
};

export default useUser;
