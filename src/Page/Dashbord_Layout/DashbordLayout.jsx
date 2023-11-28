import { Link, Outlet } from "react-router-dom";

const DashbordLayout = () => {
    return (
        <div className="flex gap-5 ">
             <div className="w-[20%] bg-red-400 p-6 ml-5 text-black text-xl">
                <ul>
                  <li> <Link to='/dashbord/profile'>Profile</Link> </li>
                  <li><Link to='/dashbord/profileedit'>Profile Edit</Link></li>
                  <li><Link to='/dashbord/setting'>Setting</Link></li>
                </ul>
             </div>

            <div className="w-[80%]">
              <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashbordLayout;