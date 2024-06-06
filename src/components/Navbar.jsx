import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
    const {user, logOut} = UserAuth();
    const navigate = useNavigate();

    const handleLougout = async ()=>{
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
        
    }
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
        <Link to="/">
            <h1 className="text-red-600 font-nsans-bold cursor-pointer text-5xl">NETFLIX</h1>
        </Link>
        { user?.email ? (
            <div>
            <Link to="/profile">
                <button className="pr-4">Profile</button>
            </Link>
                <button className="px-6 py-2 rounded cursor-pointer bg-red-600"
                onClick={handleLougout}
                >Logout</button>
        </div>
        ) : (
            <div>
            <Link to="/login">
                <button className="pr-4">Login</button>
            </Link>
            <Link to="signup">
                <button className="px-6 py-2 rounded cursor-pointer bg-red-600">Sign Up</button>
            </Link>
        </div>
        )}
    </div>

  )
}

export default Navbar;
