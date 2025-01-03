
// const Login = () => {
//     return (
//         <div className="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
//             <div className="relative">

//                 <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
//                     <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' strokeWidth='1' stroke='none' fill='currentColor' /></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' /></svg>
//                 </div>
//                 <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
//                     <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' strokeWidth='1' stroke='none' fill='currentColor' /></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)' /></svg>
//                 </div>
//                 {/* <!-- Register --> */}
//                 <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
//                     <div className="flex-auto p-6">
//                         {/* <!-- Logo --> */}
//                         <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
//                             <a href="#" className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500">
//                                 <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">Futurism.</span>
//                             </a>
//                         </div>
//                         {/* <!-- /Logo --> */}
//                         <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to futurism!</h4>
//                         <p className="mb-6 text-gray-500">Please sign-in to access your account</p>

//                         <form id="" className="mb-4" action="#" method="POST">
//                             <div className="mb-4">
//                                 <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email or Username</label>
//                                 <input type="text" className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email-username" placeholder="Enter your email or username" />
//                             </div>
//                             <div className="mb-4">
//                                 <div className="flex justify-between">
//                                     <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700" htmlFor="password">Password</label>
//                                     <a href="auth-forgot-password-basic.html" className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
//                                         <small className=" ">Forgot Password?</small>
//                                     </a>
//                                 </div>
//                                 <div className="relative flex w-full flex-wrap items-stretch">
//                                     <input type="password" id="password" className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" name="password" placeholder="············" />
//                                 </div>
//                             </div>
//                             <div className="mb-4">
//                                 <div className="block">
//                                     <input
//                                         className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-white bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow"
//                                         type="checkbox"
//                                         id="remember-me"
//                                         style={{
//                                             backgroundImage:
//                                                 "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")",
//                                             backgroundSize: "contain",
//                                         }}
//                                         checked
//                                     />

//                                     <label className="inline-block" htmlFor="remember-me"> Remember Me </label>
//                                 </div>
//                             </div>
//                             <div className="mb-4">
//                                 <button className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Sign in</button>
//                             </div>
//                         </form>

//                         <p className="mb-4 text-center">
//                             New on futurism?
//                             <a href="#" className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"> Create an account </a>
//                         </p>
//                     </div>
//                 </div>
//                 {/* <!-- /Register --> */}
//             </div>
//         </div>

//     );
// };

// export default Login;




import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../components/shared/ReusableInputFiled/InputField';
import useForm from '../../hooks/useForm';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { setUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { verifyToken } from '../../utils/verifyToken';

interface LoginFormValues {
    email: string;
    password: string;
}

const Login = () => {
    // navigate 
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [login] = useLoginMutation();
    const initialValues: LoginFormValues = { email: '', password: '' };

    const { values, errors, handleChange, handleSubmit } = useForm<LoginFormValues>({
        initialValues,
        onSubmit: async (formData) => {
            try {
                const response = await login(formData).unwrap();
                
                // Synchronously verify the token
                const decoded = verifyToken(response?.data?.accessToken);
                
                // Dispatch user and token data to the Redux store
                dispatch(setUser({ user: decoded, token: response?.data?.accessToken }));
                
                // Navigate to the home page
                navigate('/');
                
            } catch (error) {
                // Handle the error, for example, by displaying a toast notification
                console.error("Registration failed:", error);
                if (error instanceof Error) {
                    // You can use this condition if `error` is a JavaScript Error object
                    alert(`Error: ${error.message}`);
                } else {
                    alert("An unexpected error occurred during registration.");
                }
            }
        },
        validate: (values) => {
            const errors: Partial<LoginFormValues> = {};
          
            if (!values.email) errors.email = 'Email is required';
            if (!values.password) errors.password = 'Password is required';
            return errors;
        },
    });

    return (
        <div className="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50">
            <div className="relative">

                <div className="hidden sm:block h-56 w-56 text-[#EB0029] absolute a-z-10 -left-20 -top-20">
                    <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' strokeWidth='1' stroke='none' fill='currentColor' /></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' /></svg>
                </div>
                <div className="hidden sm:block h-28 w-28 text-[#EB0029] absolute a-z-10 -right-20 -bottom-20">
                    <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' strokeWidth='1' stroke='none' fill='currentColor' /></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)' /></svg>
                </div>
                {/* <!-- Register --> */}
                <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                    <div className="flex-auto p-6">
                        {/* <!-- Logo --> */}
                        <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                            <a href="#" className="flex cursor-pointer items-center gap-2 text-[#EB0029] no-underline hover:text-indigo-500">
                                <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">Foodeli</span>
                            </a>
                        </div>
                        {/* <!-- /Logo --> */}
                        <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to foodeli!</h4>
                        <p className="mb-6 text-gray-500">Please sign-in to access your account</p>
                        <form onSubmit={handleSubmit} >


                            <InputField
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <InputField
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="············"
                                value={values.password}
                                onChange={handleChange}
                                error={errors.password}
                            />

                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="grid w-full cursor-pointer select-none rounded-md border border-[#EB0029] bg-[#EB0029] py-2 px-5 text-center text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600"
                                >
                                    Login
                                </button>
                            </div>

                            <div className="text-center mt-4 text-sm">
                                <span>Don’t have an account? </span>
                              <span className="text-indigo-500 hover:underline">
                              <Link to={'/register'}>
                                Register
                                </Link>
                              </span>
                              
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
