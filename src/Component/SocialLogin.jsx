import useAuth from "../Hook/useAuth";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleClick = () => {
        googleSignIn()
        .then(result=> {
            console.log(result.user)
            const userInfo = {
                email : result.user?.email,
                name : result.user?.displayName
            }
            // axiosPublic.post('/users', userInfo)
            // .then(res => {
            //     console.log(res.data)
            //     navigate('/')
            // })

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