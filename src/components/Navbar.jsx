import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
        <Link to="/">
            <h1 className="text-red-600 font-nsans-bold cursor-pointer text-5xl">NETFLIX</h1>
        </Link>
        <div>
            <Link to="/login">
                <button className="pr-4">Login</button>
            </Link>
            <Link to="signup">
                <button className="px-6 py-2 rounded cursor-pointer bg-red-600">Signup</button>
            </Link>
        </div>
    </div>

  )
}

export default Navbar;
