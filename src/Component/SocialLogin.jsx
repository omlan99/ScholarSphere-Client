import useAuth from "../Hook/useAuth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useCommonAxios from "../Hook/useCommonAxios";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosCommon = useCommonAxios()
    const navigate = useNavigate()
    const handleClick = () => {
        googleSignIn()
        .then(result=> {
            console.log(result.user)
               Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            const userInfo = {
                email : result.user?.email,
                name : result.user?.displayName
            }
            // axiosPublic.post('/users', userInfo)
            // .then(res => {
            //     console.log(res.data)
            // })
            
                navigate('/')
        })
      }
    return (
        <div className="p-8 ">
             <div className="divider"></div>
            <button onClick={handleClick} className="btn  w-full"><FcGoogle className="text-xl"></FcGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;