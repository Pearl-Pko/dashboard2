import React from "react";
import {ReactComponent as NavBarIcon1} from "../assests/svg/NavBarIcon1.svg";
import {ReactComponent as NavBarIcon2} from "../assests/svg/NavBarIcon2.svg";
import {ReactComponent as NavBarIcon3} from "../assests/svg/NavBarIcon3.svg";
import {ReactComponent as NavBarIcon4} from "../assests/svg/NavBarIcon4.svg";
import {ReactComponent as NavBarIcon5} from "../assests/svg/NavBarIcon5.svg";
import {ReactComponent as NavBarIcon6} from "../assests/svg/NavBarIcon6.svg";
import {ReactComponent as NavBarIcon7} from "../assests/svg/NavBarIcon7.svg";
import {ReactComponent as NavBarIcon8} from "../assests/svg/NavBarIcon8.svg";
import {ReactComponent as NavBarIcon9} from "../assests/svg/NavBarIcon9.svg";
import {ReactComponent as NavBarIcon10} from "../assests/svg/NavBarIcon10.svg";
import {ReactComponent as NavBarIcon11} from "../assests/svg/NavBarIcon11.svg";

const Drawer = ({isOpen, onClose, children}) => {
    const drawerClasses = isOpen ? "translate-x-0" : "translate-x-full";

    return (
        <div
            className={`fixed inset-y-0 right-0 w-64 bg-gray-800 transform transition-transform ease-in-out ${drawerClasses}`}
        >
            <div className="flex justify-end p-4">
                <button onClick={onClose} className="text-white">
                    &times;
                </button>
            </div>
            <div className="p-4">{children}</div>
        </div>
    );
};

export const NavDrawer = () => {
    return (
        <div className="w-14 bg-white">
            <ul className="flex flex-col justify-between mt-7">
                <li className="flex flex-col items-center gap-4">
                    <li>
                        <NavBarIcon1 />
                    </li>
                    <li>
                        <NavBarIcon2 />
                    </li>
                    <li>
                        <NavBarIcon3 />
                    </li>
                    <li>
                        <NavBarIcon4 />
                    </li>
                    <li>
                        <NavBarIcon5 />
                    </li>
                    <li>
                        <NavBarIcon6 />
                    </li>
                </li>
                <li className="flex flex-col mt-20 gap-4 items-center">
                    <li>
                        <NavBarIcon9 />
                    </li>
                    <li>
                        <NavBarIcon10 />
                    </li>
                    <li>
                        <NavBarIcon11 />
                    </li>
                </li>
            </ul>
        </div>
    );
};

export default NavDrawer;
