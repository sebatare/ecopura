import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import '../../index.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from "react"
import Alert from './../../components/alert'
import { connect } from "react-redux"
import { logout } from "../../redux/actions/auth"
import { useState } from "react"
import { Navigate } from "react-router-dom"


function Navbar({
    isAuthenticated,
    logout
}
) {
    const [redirect, setRedirect] = useState(false);

    const logoutHandler = () => {
        logout()
        setRedirect(true);
    }
    if (redirect) {
        window.location.reload(false)
        return <Navigate to='/' />;
    }
    const avatar = (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  bg-white py-2 text-sm font-semibold text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                        <Link className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900">Mi perfil</Link>
                        </Menu.Item>
                        <Menu.Item>
                        <Link className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900">Mi carrito</Link>
                        </Menu.Item>
                        <Menu.Item>
                        <Link className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900">Pedidos</Link>
                        </Menu.Item>
                        <Menu.Item>
                        <Link className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900">Configuracion</Link>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
    const cart = (
        <Link to="/cart" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-blue-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <span className="text-xs absolute top-1 mt-3 ml-4 bg-red-500 text-white font-semibold rounded-full px-2 text-center">2</span>

        </Link>
    )

    return (
        <>
            <div>
                {/* MENU/NAVBAR MOBILE*/}
                <div className="flex flex-col sm:hidden shadow-md">
                    <Menu>
                        <div className="flex justify-center items-center">
                            <Link to='/'>
                                <img className="h-auto w-auto max-w-[250px]" src={logo} alt="Ecopura" />
                            </Link>

                            {isAuthenticated ? <> {cart} {avatar}</> : <></>}
                            <Menu.Button className='h-10 px-2 rounded-md text-blue-950 hover:bg-neutral-100'>
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
                                    {isAuthenticated ?
                                        <button onClick={logoutHandler} ><li>Cerrar sesión</li></button> :
                                        <Link to='/login'>
                                            Login
                                        </Link>}
                                </Menu.Item>
                                <Menu.Item className='navnar__menu_items_mobile'>
                                    <Link to='/shop'>
                                        Productos
                                    </Link>
                                </Menu.Item>
                                <Menu.Item className='navnar__menu_items_mobile'>

                                    <Link to='/quienes-somos'>
                                        Quienes Somos
                                    </Link>

                                </Menu.Item>
                                <Menu.Item className='navnar__menu_items_mobile'>
                                    <Link to='/zona-despacho'>
                                        Zona de despacho
                                    </Link>
                                </Menu.Item>
                                <Menu.Item className='navnar__menu_items_mobile'>
                                    <Link to='/tratamiento-agua'>
                                        Tratamiento de agua
                                    </Link>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                {/* NAVBAR DESKTOP*/}
                <div className="hidden sm:flex justify-evenly items-center shadow-md">
                    <Link to='/'>
                        <img className="object-cover h-auto w-auto max-w-[250px]" src={logo} alt="Ecopura" />
                    </Link>
                    {console.log(isAuthenticated)}
                    <ul className="flex items-center">
                        <li className="navnar__menu_items" ><Link to='/shop'>Productos</Link></li>
                        <li className="navnar__menu_items" ><Link to='/quienes-somos'>Quienes Somos</Link></li>
                        <li className="navnar__menu_items"><Link to='/zona-despacho'>Zona de despacho</Link></li>
                        <li className="navnar__menu_items"><Link to='/tratamiento-agua'>Tratamiento de agua</Link></li>

                        {isAuthenticated ?
                            <>
                                <li className="navnar__menu_items"><button onClick={logoutHandler}> Cerrar sesion</button></li>
                                <li className="navnar__menu_items"><Link to='/cart'>{cart}</Link></li>
                                <li className="navnar__menu_items"><Link to='/me'>{avatar}</Link></li>
                            </>
                            :
                            <Link to='/login'><li className="navnar__menu_items">Login</li></Link>}

                    </ul>


                </div>
            </div>
            <Alert />
        </>
    )
} const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
})


export default connect(mapStateToProps, {
    logout
})(Navbar)