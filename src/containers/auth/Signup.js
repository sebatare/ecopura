import Layout from "../../hocs/Layout";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ColorRing } from 'react-loader-spinner'
import { signup } from "../../redux/actions/auth";
import { useState, useEffect } from "react";
const Signup = ({
    loading,
    signup
}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [accountCreated, setAccountCreated] = useState(false);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        re_password: ''
    })

    const {
        first_name,
        last_name,
        email,
        phone,
        password,
        re_password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        signup(first_name, last_name, email, phone, password, re_password);
        setAccountCreated(true);
        window.scrollTo(0, 0)
    }

    return (
        <Layout>
            <div className="flex min-h-full max-w-md mx-auto flex-1 flex-col px-6 lg:px-8  rounded-md my-20 bg-blue-300 bg-opacity-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Crear cuenta
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={e => onSubmit(e)} >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Correo
                            </label>
                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                    autoComplete="emai"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre
                            </label>
                            <div>
                                <input
                                    name="first_name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={first_name}
                    onChange={e=>onChange(e)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Apellido
                            </label>
                            <div>
                                <input
                                    name="last_name"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={last_name}
                    onChange={e=>onChange(e)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Número telefónico
                            </label>
                            <div>
                                <input
                                    name="phone"
                                    type="number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={phone}
                    onChange={e=>onChange(e)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Contraseña
                            </label>
                            <div >
                                <input
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={password}
                    onChange={e=>onChange(e)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Rep. contraseña
                                </label>
                                
                            </div>
                            <div >
                                <input
                                    name="re_password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={re_password}
                    onChange={e=>onChange(e)}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                            {loading ?
                                <ColorRing
                                    className=''
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                /> :
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Entrar
                                </button>

                            }
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        No tienes una cuenta?{' '}
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Registrar
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>

    );
}
const mapStateToProps = state => ({
    loading: state.Auth.loading
})

export default connect(mapStateToProps, {
    signup
})(Signup)