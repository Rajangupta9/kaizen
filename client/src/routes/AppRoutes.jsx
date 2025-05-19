import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Home, LogIn, UserPlus, ChevronDown, Menu, X } from 'lucide-react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import HomePage from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if user is authenticated
  useEffect(() => {
    // This would typically be a check to your authentication service
    const checkAuth = () => {
      // Check for both auth_token and accessToken (from Login component)
      const token = localStorage.getItem('auth_token') || localStorage.getItem('accessToken');
      if (token) {
        setIsAuthenticated(true);
        // Make sure both tokens are set for consistency
        if (localStorage.getItem('accessToken') && !localStorage.getItem('auth_token')) {
          localStorage.setItem('auth_token', localStorage.getItem('accessToken'));
        }
      } else {
        setIsAuthenticated(false);
      }
    };
    
    checkAuth();
    // Add event listener for storage changes (for logout in other tabs)
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    // Remove both token types for consistency
    localStorage.removeItem('auth_token');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
    // Redirect to home page after logout
    window.location.href = '/';
  };

  // Determine if we're on a public page (login/signup) for styling
  const isPublicPage = ['/login', '/signup'].includes(location.pathname);
  
  return (
    <div className={`min-h-screen flex flex-col ${isPublicPage ? 'bg-gray-50' : 'bg-gray-100'}`}>
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LP</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">LeadPulse</span>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <Link 
                  to="/" 
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                    location.pathname === '/' 
                      ? 'border-blue-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Home size={16} className="mr-1" />
                  Home
                </Link>
                {isAuthenticated && (
                  <Link 
                    to="/dashboard" 
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                      location.pathname === '/dashboard' 
                        ? 'border-blue-500 text-gray-900' 
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Dashboard
                  </Link>
                )}
                
                {/* Add more navigation links for authenticated users */}
                {isAuthenticated && (
                  <div className="relative group">
                    <button className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">
                      Features
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                      <div className="py-1">
                        <Link to="/campaigns" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Campaigns
                        </Link>
                        <Link to="/leads" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Leads
                        </Link>
                        <Link to="/analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Analytics
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </nav>
            </div>
            
            {/* Desktop Auth Actions */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              {isAuthenticated ? (
                <button 
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                      location.pathname === '/login'
                        ? 'text-white bg-blue-600'
                        : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                    }`}
                  >
                    <LogIn size={16} className="mr-1" />
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                      location.pathname === '/signup'
                        ? 'text-white bg-blue-600'
                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <UserPlus size={16} className="mr-1" />
                    Sign up
                  </Link>
                </>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X size={24} aria-hidden="true" />
                ) : (
                  <Menu size={24} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  location.pathname === '/'
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                }`}
              >
                Home
              </Link>
              {isAuthenticated && (
                <>
                  <Link
                    to="/dashboard"
                    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      location.pathname === '/dashboard'
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                    }`}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/campaigns"
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  >
                    Campaigns
                  </Link>
                  <Link
                    to="/leads"
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  >
                    Leads
                  </Link>
                </>
              )}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              {isAuthenticated ? (
                <div className="space-y-1">
                  <button
                    onClick={handleLogout}
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-1">
                  <Link
                    to="/login"
                    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      location.pathname === '/login'
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      location.pathname === '/signup'
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                    }`}
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route path="/signup" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Signup setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
            } 
          />
          {/* Protected routes - only accessible when authenticated */}
          <Route path="/campaigns" element={
            isAuthenticated ? <div className="p-8 text-center">Campaigns Page (Coming Soon)</div> : <Navigate to="/login" />
          } />
          <Route path="/leads" element={
            isAuthenticated ? <div className="p-8 text-center">Leads Management (Coming Soon)</div> : <Navigate to="/login" />
          } />
          <Route path="/analytics" element={
            isAuthenticated ? <div className="p-8 text-center">Analytics Dashboard (Coming Soon)</div> : <Navigate to="/login" />
          } />
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2 space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Help Center
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Terms of Service
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2025 LeadPulse. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppRoutes;