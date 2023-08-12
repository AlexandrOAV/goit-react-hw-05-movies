import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";
import css from "./SharedLayout.module.css"

const SharedLayout = () => {
    return (
      <div className={ css.conteiner}>
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
        <header className={css.header}>
        <nav>
          <ul className={css.list_menu}>
              <li className={css.menu_item}>
                <NavLink
                className={({ isActive }) =>isActive ? css.activeLink : css.menu_item}
                to='/'>
                Home</NavLink>
              </li>
              <li className={css.menu_item}>
                <NavLink className={({ isActive }) =>isActive ? css.activeLink : css.menu_item}
                to='/movies'>Movies</NavLink>
              </li>
          </ul>
        </nav>
        </header>  
        <main>
            <Outlet/>
        </main>
        <footer className={css.foter_lay}>
           <Footer/>
         </footer>
    </div>
  
       
    )
}
export default SharedLayout;