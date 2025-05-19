import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Updated to use the login endpoint instead of signup
      const res = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
      });
      
      console.log("Sending data:", { email, password }); // Added to debug
      
      const data = await res.json();
      if(res.ok) {
        // Store tokens in localStorage
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          // Also set auth_token for compatibility with AppRoutes
          localStorage.setItem('auth_token', data.accessToken);
        }
        if (data.refreshToken) localStorage.setItem('refreshToken', data.refreshToken);
        
        // Set authenticated state in parent component
        setIsAuthenticated(true);
        
        alert('Login Successful');
        navigate('/dashboard');
      } else {
        alert(data.msg || 'Login failed');
      }
    } catch (error) {
      alert('Something went wrong');
      console.log(error);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
               id="email"
              type="email" 
               placeholder="Enter your email" 
               value={email} 
               onChange={(e) => setEmail(e.target.value)} 
               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
               required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
               id="password"
              type="password" 
               placeholder="Enter your password" 
               value={password} 
               onChange={(e) => setPassword(e.target.value)} 
               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
               required 
             />
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="h-4 w-4 text-blue-600" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          
          <button 
             type="submit"
             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Sign In
          </button>
        </form>
        
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;