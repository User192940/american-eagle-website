import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
return (
    <div className="popup-login flex flex-col">
        <div className="justify-end flex w-full mt-8 h-[18px]">
        <button onClick={() => navigate(-1)}className='w-[18px] h-[18px] mr-6'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                
        </button>
        </div>
        <span className="ml-[2.5%] mt-4 mb-4 w-full text-left text-3xl font-medium">Sign In</span>
        <form className="">
            <label placeholder="Email">
            </label>
            <input
            type="text"
            id="username"
            required/>
            <label placeholder="Password">
            </label>
            <input
            type="password"
            id="password"
            required
            />
            <input type="submit"/>
        </form>
    </div>
)
}
export default SignIn