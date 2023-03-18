import { useState, useContext } from "react";
import { BsXLg, BsJustify, BsFillCloudSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from '../App'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li className="text-gray-600 hover:text-cyan-500 font ">
                        <Link to="/weather">Weather</Link>
                    </li>
                   
                    <li className="text-gray-600 hover:text-cyan-500 font">
                        <Link to="/logout"> Logout</Link>
                    </li>


                </>
            )
        } else {
            return (
                <>
                            <li className="text-gray-600 hover:text-cyan-500 font">
                                <Link to="/signup">Signe up</Link>
                            </li>
                            <li className="text-gray-600 hover:text-cyan-500 font">
                                <Link to="/login">Login</Link>
                            </li>
                </>
            )
        }
    }


    return (
        <nav className="w-full bg-slate-300 shadow opacity-50 py-3">

            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-2 md:block">

                        <h2 className="text-5xl font-bolder text-cyan-500">  <Link to="/"><BsFillCloudSunFill /></Link></h2>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <BsXLg />
                                ) : (

                                    <BsJustify />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center uppercase md:font-extrabold font-serif justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <RenderMenu />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
