import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Page/Footer/Footer";


const Main_layout = () => {
  return (
    <div>
      <section className="flex justify-between px-10 pt-8 shadow-md my-7">
        <div>
          <h1 className="text-red-300 text-2xl font-bold"> KB Super Shop</h1>
        </div>
        <nav>
          <ul className="flex gap-10 pb-6 ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600" : ""
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/dashbord"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600" : ""
              }
            >
              Dashbord
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600" : ""
              }
            >
              Login
            </NavLink>
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main_layout;