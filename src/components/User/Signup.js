import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import quizContext from "../../context/quizContext";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    // const { setUser } = useContext(quizContext);

    async function registerUser(ev) {
        ev.preventDefault();
        try {
            const { data } = await axios.post('/register', { name, email, password });
            // setUser(data);
            alert('Successfully registered');
            setRedirect(true);
        } catch (e) {
            alert('Registration failed',e);
            console.error(e);  // Log the error for debugging
        }
    }

    if (redirect) {
        return <Navigate to={'/login'} />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-4xl text-center mb-6 text-gray-800">Register</h1>
                <form onSubmit={registerUser} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={ev => setName(ev.target.value)}
                            className="mt-1 block w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                            className="mt-1 block w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                            Register
                        </button>
                    </div>
                </form>
                <div className="text-center mt-6 text-gray-500">
                    Already have an account?{" "}
                    <Link className="underline text-indigo-600 hover:text-indigo-800" to="/Login">
                        Login here
                    </Link>
                </div>
            </div>
        </div>
    );
}
