import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Footer from "../Footer/Footer";

const SharedLayout = () => {
    return (
      <div>
         <ToastContainer
            position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        <ToastContainer />
        <header>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/movies'>Movies</NavLink></li>
          </ul>
        </nav>
        </header>  
        <main>
            <Outlet/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  
       
    )
}
export default SharedLayout;