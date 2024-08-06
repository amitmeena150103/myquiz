import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import quizContext from "../../context/quizContext";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setuser } = useContext(quizContext);
    const [redirectPath, setRedirectPath] = useState('');

    async function loginUser(ev) {
        ev.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setuser(data);
            alert('Successfully logged in');
             setRedirectPath(`/account/${data._id}`); 
            setRedirect(true);
        } catch (e) {
            alert('Login failed');
            console.error(e);  // Log the error for debugging
        }
    }

    if (redirect) {
         return <Navigate to={redirectPath} />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-4xl text-center mb-6 text-gray-800">Login</h1>
                <form onSubmit={loginUser} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                            className="mt-1 block w-full px-3 py-2  text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                            className="mt-1 block w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center mt-6 text-gray-500">
                    Don't have an account yet?{" "}
                    <Link className="underline text-indigo-600 hover:text-indigo-800" to="/Signup">
                        Register now
                    </Link>
                </div>
            </div>
        </div>
    );
}
