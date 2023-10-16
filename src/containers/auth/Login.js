import Layout from './../../hocs/Layout.js';
import { Link } from 'react-router-dom'
import { login } from '../../redux/actions/auth'
import { ColorRing } from 'react-loader-spinner'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router'
const Login = ({
    login,
    loading
}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [activated, setActivated] = useState(false);

    const {
        email,
        password,
    } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
        setActivated(true);
        window.scrollTo(0, 0);
    }
    if (activated)
    return <Navigate to='/' />;

    return (
        <Layout>
            <div className="flex min-h-full max-w-md mx-auto flex-1 flex-col px-6 lg:px-8  rounded-md my-20 bg-blue-300 bg-opacity-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Iniciar Sesión Ecopura
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={e => onSubmit(e)} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Correo
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contraseña
                                </label>
                                <div className="text-sm">
                                    <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Olvidaste tu contraseña?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={e => onChange(e)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
    login
})(Login)