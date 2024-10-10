import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/useAuth";
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../services/CategoriesService';
import { Category } from '../../models/Product';


const Header: React.FC = () => {

  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const [data, setData] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(true); 


  const handleLogout = () => {
    logout(); // Kullanıcıyı oturumdan çıkar
    navigate('/login'); // Kullanıcıyı giriş sayfasına yönlendir
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
  
      try {
        const response = await getAllCategories();
        console.log(response);
        setData(response as unknown as Category[]); 
      } catch (error) {
        console.log('Error:' + error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  

  return (

    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">E Shop</Link>
        </div>
        <div className="flex-none">
          <div className="flex flex-1 justify-end px-2">
            <div className="flex items-stretch">
              <Link to="/products" className="btn btn-ghost rounded-btn">Products</Link>
              <div className="dropdown dropdown-bottom ">
                {loading ? (
                    <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">.....</div>
                ) : (
                  <><div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Categories <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" /></svg></div><ul
                      tabIndex={0}
                      className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                      {data && data.map((category) => (
                        <li><Link to={'products/category/'+category.name}>{category.name}</Link></li>
                      ))}
                    </ul></>
                )}
              </div>
            </div>
          </div>
  

  
          {/* User Avatar and Profile */}
          {isLoggedIn() ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <Link to="/cart" className="btn btn-primary btn-block">View cart</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">User</span>
                    </Link>
                  </li>
                  <li><a onClick={handleLogout} className="btn btn-ghost">Logout</a></li>
                </ul>
              </div>
            </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => navigate('/login')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C"><path d="M480-144v-72h264v-528H480v-72h264q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H480Zm-72-168-51-51 81-81H144v-72h294l-81-81 51-51 168 168-168 168Z"/></svg>
              <span className='text-green-200'>Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
  
};

export default Header;
