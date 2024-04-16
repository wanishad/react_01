import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userExist } from "../authSlice";
import { toast } from "react-toastify";
import {FaEye, FaEyeSlash} from "react-icons/fa"

const login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [LoginUser, { isLoading, isError }] = useLoginUserMutation();
  const [formdata, setFormdata] = useState({
    email: String,
    password: String,
  });
  const [passwordShow, setPasswordShow] = useState("password")
  const [checkPasswordClickValue, setcheckPasswordClickValue] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const handleShowPassword = () => { 
   if(passwordShow == "password"){
    setPasswordShow("text")
   }else{
    setPasswordShow("password")
   }
   };
   const checkPasswordClicked = () =>{
    if(!checkPasswordClickValue){
      setcheckPasswordClickValue(true)
    }
   }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await LoginUser(formdata).unwrap();
      console.log(response);
      dispatch(userExist(response.data));
      const userInfo = JSON.stringify(response.data)
      localStorage.setItem("userInfo", userInfo)
      toast.success(response.message);
      if (response.statusCode === 200) {
        Navigate("/");
      }
    } catch (err) {
      const jsonError = JSON.stringify(err.data);
      let ErrorMessage = "email username or password is not correct" ;
      if (jsonError.includes(ErrorMessage)) {
        toast.error(ErrorMessage);
      }
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col space-y-4 justify-center items-center min-h-screen bg-gradient-to-r from-purple-300 to-purple-500"
      >
        
        <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-xl">
        <div>
            <p className="text-purple-700 text-center text-2xl">Login User</p>
          </div>  
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              value={formdata.email}
              onChange={handleChange}
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
            />
            
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
                    <div className="relative z-0 w-full mb-5 group">
            <input
              type={passwordShow}
              value={formdata.password}
              onChange={handleChange}
              name="password"
              onClick={checkPasswordClicked}
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
              />
              {checkPasswordClickValue && 
              <div onClick={handleShowPassword} className=" relative left-[22rem] bottom-6 text-xl">
              {passwordShow == "text" ? <FaEye/> : <FaEyeSlash/>}
              </div> }
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-700 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            
          </div>
          <button
            type="submit"
            className="btn-primary"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default login;
