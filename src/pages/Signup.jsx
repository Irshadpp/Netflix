import { Link } from "react-router-dom"

function Signup() {
  return (
    <>
    <div className="w-full h-full">
      <img 
      className="hidden w-full h-full absolute sm:block object-cover"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    </div>
    <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"/>
    <div className="w-full fixed px-4 py-24 z-20">
      <div className=" max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
        <div className="max-w-[320px] mx-auto py-16">
          <h1 className="text-3xl font-nsans-bold">Signup</h1>
          <form className="w-full flex flex-col py-4">
            <input className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="email" autoComplete="email"/>
            <input className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="password" autoComplete="current-password"/>
            <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">Signup</button>
            <div className="flex justify-between items-center text-gray-600">
              <p>
                <input type="checkbox" className="mr-2"/>
                Remember me
              </p>
              <p>Need help?</p>
            </div>
            <p className="my-4">
              <span className="text-gray-600 mr-2">Already subscribed to Neflix?</span>
              <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </> 
  )
}

export default Signup
