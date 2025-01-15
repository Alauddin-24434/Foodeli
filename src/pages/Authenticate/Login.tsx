



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
