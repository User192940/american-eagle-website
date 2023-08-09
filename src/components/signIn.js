import { useNavigate, Link } from "react-router-dom";
const SignIn = () => {
    const navigate = useNavigate();
return (
    <div className="popup-login flex flex-col">
        <div className="justify-end flex w-full mt-8 h-[18px]">
        <button onClick={() => navigate(-1)} className='w-[18px] h-[18px] mr-6'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                
        </button>
        </div>
        <span className="ml-[2.5%] mt-4 mb-4 w-full text-left text-3xl font-medium">Sign In</span>
        <form className="login h-[225px]">
            <label>
            </label>
            <input
            placeholder="Email"
            type="text"
            id="username"
            required/>
            <label>
            </label>
            <input
            className="mt-3"
            placeholder="Password"
            type="password"
            id="password"
            required
            />
            <div className="flex flex-row w-full">
            <span className="w-[50%] ml-[2.5%] text-left">
                8-25 Characters
            </span>
            <p className="w-[50%] mr-[2.5%] text-right">
            <Link to="">
                Forgot Password?
            </Link>
            </p>
            </div>
            <button className=" p-2 w-[95%] ml-[2.5%] mr-[2.5%] bg-black text-white rounded-3xl text-sm">
            <input type="submit"/>
            </button>
        </form>
    </div>
)
}
export default SignIn