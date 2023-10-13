import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import '../../index.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from "react"

function Navbar() {


    return (
        <div>

            {/* MENU/NAVBAR MOBILE*/}
            <div className="flex flex-col sm:hidden shadow-md ">
                <Menu>
                    <div className="flex justify-center items-center">
                    <Link>
                        <img className="h-auto w-auto max-w-[250px]" src={logo} alt="Ecopura" />
                    </Link>
                    <Menu.Button className='h-10 px-4 rounded-md text-blue-950 hover:bg-neutral-100 '>
                        <AiOutlineMenu className="sm:hidden" size={20} />
                    </Menu.Button>                
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className='flex flex-col text-center'>
                        <Menu.Item className='navnar__menu_items_mobile'>
                                <Link>
                                   Login
                                </Link>
                        </Menu.Item>
                        <Menu.Item className='navnar__menu_items_mobile'>
                                <Link>
                                    Productos
                                </Link>
                        </Menu.Item>
                        <Menu.Item className='navnar__menu_items_mobile'>

                                <Link>
                                    Quienes Somos
                                </Link>
                    
                        </Menu.Item>
                        <Menu.Item className='navnar__menu_items_mobile'>
                                <Link>
                                    Zona de despacho
                                </Link>
                        </Menu.Item>
                        <Menu.Item className='navnar__menu_items_mobile'>
                                <Link>
                                    Tratamiento de agua
                                </Link>
                        </Menu.Item>
                    </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            {/* NAVBAR DESKTOP*/}
            <div className="hidden sm:flex justify-evenly items-center shadow-md">
                    <Link>
                        <img className="object-cover h-auto w-auto max-w-[250px]" src={logo} alt="Ecopura" />
                    </Link>

                <ul className="flex">
                    <Link><li className="navnar__menu_items">Login</li></Link>
                    <Link><li className="navnar__menu_items">Productos</li></Link>
                    <Link><li className="navnar__menu_items">Quienes Somos</li></Link>
                    <Link><li className="navnar__menu_items">Zona de despacho</li></Link>
                    <Link><li className="navnar__menu_items">Tratamiento de agua</li></Link>
                </ul>

            </div>

        </div>
    )
}


export default Navbar