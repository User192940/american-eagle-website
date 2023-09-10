import { useEffect, useState, useRef } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = ({open, onClose, onOpen}) => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const {user, signUp} = UserAuth()
    const [password, setPassword] = useState('')
    const [data, setData] = useState('')
    const navigate = useNavigate()
    
    function openSignIn(){
        onClose();
        onOpen();
    }

    // useEffect(() => {
    //     const result = USER_REGEX.test(user);
    //     setValidName(result);
    // }, [user])

    // useEffect(() => {
    //     const result = PWD_REGEX.test(pwd);
    //     setValidPwd(result);
    //     const match = pwd === matchPwd;
    //     setValidMatch(match);
    // }, [pwd, matchPwd])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            onClose();
        } catch (error) {
            console.log(error);
            setData(error.message);
        }

        // const v1 = USER_REGEX.test(user);
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        // try {
        //     const response = await axios.post(REGISTER_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(response?.data);
        //     console.log(response?.accessToken);
        //     console.log(JSON.stringify(response))
        //     setSuccess(true);
        //     //clear state and controlled inputs
        //     //need value attrib on inputs for this
        //     setUser('');
        //     setPwd('');
        //     setMatchPwd('');
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 409) {
        //         setErrMsg('Username Taken');
        //     } else {
        //         setErrMsg('Registration Failed')
        //     }
        //     errRef.current.focus();
        // }
    }

    return (open) ? (
        <div className={`${(open) ? "popup-login-active" : "popup login"}`}>
            <div className="justify-end flex w-full mt-8 h-[18px]">
                <h2></h2>
        <button onClick={onClose} className='w-[18px] h-[18px] mr-6'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                
        </button>
        </div>
            {/* {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : ( */}
                <section>
                    <div className="flex w-full px-[2.5%] mb-6 align-middle">
                        <span className="font-semibold text-lg">Account Details</span>
                        <span className="text-xs text-gray-600 ml-auto pt-1">Required</span>
                    </div>
                    <form 
                    method="post"
                    onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            id="username"
                            placeholder="Email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-describedby="uidnote"
                        />
                        <p className={`${(data) ? "show" : "hide"}`}>
                            {data}
                        </p>
                        <div className="flex flex-row justify-between">
                        <input
                        className="formIn mt-5 w-[48%]"
                        type="text"
                        id="fname"
                        required
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                        className="formIn mt-5 w-[48%]"
                        type="text"
                        id="lname"
                        required
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        </div>
                        <input
                        className="mt-5"
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <p className="ml-[2.5%] pt-1 text-left text-xs text-gray-600">8-25 characters including one letter and one number</p>
                        <input
                        className="my-5"
                            type="password"
                            id="conf-password"
                            placeholder="Confirm Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> */}
                        {/* <input
                        className="mt-5"
                            type="password"
                            id="confirm_pwd"
                            placeholder="Confirm Password"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                        /> */}
                        {/* <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p> */}
                        <button className="p-3 w-[95%] ml-[2.5%] mr-[2.5%] bg-[#24272a] text-white rounded-full font-semibold">
                Sign Up
                </button>
                    </form>
                    <p>
                        Already registered?<br />
                        <button onClick={openSignIn} className="p-3 mt-4 w-[95%] ml-[2.5%] mr-[2.5%] bg-white text-black rounded-full font-semibold">
                Sign In
            </button>
                    </p>
                </section>
            {/* )} */}
        </div>
    ) : "";
}
export default Register