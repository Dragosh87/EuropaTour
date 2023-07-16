import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import {
    Cog6ToothIcon,
    PowerIcon,
    InboxArrowDownIcon,
    UserCircleIcon,
    LifebuoyIcon,
} from "@heroicons/react/24/outline";
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {LocalContext} from '../Context'

export default function UserMenu() {
    const [setItem, getItem] = useContext(LocalContext);

    return (
        <>
            {getItem() && getItem().user
                ?
                <Menu>
                    <MenuHandler>
                  <span
                      className="lg:inline-block lg:ml-auto lg:mr-3 inline-block w-12 h-12 overflow-hidden border-2 rounded-full  ">
                    <svg className="w-full text-orange-300 h-ful0l hover:text-orange-700" fill="currentColor"
                         viewBox="0 0 24 24">
                      <path
                          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                  </span>
                    </MenuHandler>
                    <MenuList>
                        <div className="font-bold ml-auto text text-center">{getItem().user.email}</div>
                        <hr className="my-2 border-blue-gray-50"/>
                        <MenuItem className="flex items-center gap-2 " onClick={() => {
                            setItem(null)
                            window.location = '/'
                        }}>
                            <PowerIcon strokeWidth={2} className="w-4 h-4"/>
                            <Typography variant="small" className="font-normal">
                                Log Out
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </Menu>
                :
                <>
                    <Link
                        className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                        to="/login">Login</Link>
                    <Link
                        className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                        to="/register">Create Account</Link>
                </>


            }


        </>
    );
}
