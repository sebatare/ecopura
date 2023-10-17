import Layout from "../../hocs/Layout"
import { connect } from "react-redux"
import { get_products, get_filtered_products, get_search_products} from '../../redux/actions/products'
import ProductCard from "./product/ProductCard"
import { get_categories } from "../../redux/actions/categories"
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon} from '@heroicons/react/20/solid'
import { prices } from '../../helpers/fixedPrices'



const Shop = ({
    get_products,
    products,
    get_filtered_products,
    filtered_products,
    get_categories,
    categories,
    get_search_products
}) => {

    useEffect(() => {
        get_products()
        get_categories()
        window.scrollTo(0, 0)
    }, [])
    const [filtered, setFiltered] = useState(false)
    const [formData, setFormData] = useState({
        category_id: '0',
        price_range: 'Todo',
        sortBy: 'created',
        order: 'asc'
    })


    const {
        category_id,
        price_range,
        sortBy,
        order
    } = formData
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        get_filtered_products(category_id, price_range, sortBy, order)
        setFiltered(true)
    }
    const [searchData, setSearchData] = useState({
        category_id: 0,
        search: ''
      });

    const onSearch = e => {
        e.preventDefault()
        get_search_products(searchData, category_id)
    }


    const showProducts = () => {
        const productsToMap = filtered ? filtered_products : products;
        if (!productsToMap) return null;
        return (
            <div className='rounded-md sm:grid grid-cols-3 gap-6'>
                {productsToMap.map((product, index) => (
                    <div key={index} className="shadow-2xl my-5 rounded-lg max-w-[200px] mx-auto">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        )
    }
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)



    return (
        <Layout>
            <div className="bg-white">
                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-40 flex">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-[250px] flex-col overflow-y-auto bg-white py-4 pb-12 pl-2 shadow-xl">
                                        <div className="flex items-center justify-between px-4">
                                            <h2 className="text-lg font-semibold text-gray-900">Filtrar</h2>
                                            <button
                                                type="button"
                                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                                onClick={() => setMobileFiltersOpen(false)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>

                                        {/* Filters */}
                                        <form className="mt-4 border-t border-gray-200">
                                            <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                                                {
                                                    categories &&
                                                    categories !== null &&
                                                    categories !== undefined &&
                                                    categories.map(category => {
                                                        if (category.sub_categories.length === 0) {
                                                            return (
                                                                <div key={category.id} className=' flex items-center h-5 my-5'>
                                                                    <input
                                                                        name='category_id'
                                                                        onChange={e => onChange(e)}
                                                                        value={category.id.toString()}
                                                                        type='radio'
                                                                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                                    />
                                                                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                                        {category.name}
                                                                    </label>
                                                                </div>
                                                            )
                                                        } else {
                                                            let result = []
                                                            result.push(
                                                                <div key={category.id} className='flex items-center h-5 underline underline-offset-2'>
                                                                    <input
                                                                        name='category_id'
                                                                        onChange={e => onChange(e)}
                                                                        value={category.id.toString()}
                                                                        type='radio'
                                                                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                                    />
                                                                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                                        {category.name}
                                                                    </label>
                                                                </div>
                                                            )

                                                            category.sub_categories.map(sub_category => {
                                                                result.push(
                                                                    <div key={sub_category.id} className='flex items-center h-5 ml-4 my-5'>
                                                                        <input
                                                                            name='category_id'
                                                                            onChange={e => onChange(e)}
                                                                            value={sub_category.id.toString()}
                                                                            type='radio'
                                                                            className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                                        />
                                                                        <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                                            {sub_category.name}
                                                                        </label>
                                                                    </div>
                                                                )
                                                            })

                                                            return result
                                                        }
                                                    })
                                                }
                                                {
                                                    prices && prices.map((price, index) => {
                                                        if (price.id === 0) {
                                                            return (
                                                                <div key={index} className='form-check'>
                                                                    <input
                                                                        onChange={e => onChange(e)}
                                                                        value={price.name}
                                                                        name='price_range'
                                                                        type='radio'
                                                                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                                        defaultChecked
                                                                    />
                                                                    <label className='ml-3 min-w-0 flex-1 text-gray-500 font-sofiapro-light'>{price.name}</label>
                                                                </div>
                                                            )
                                                        } else {
                                                            return (
                                                                <div key={index} className='form-check'>
                                                                    <input
                                                                        onChange={e => onChange(e)}
                                                                        value={price.name}
                                                                        name='price_range'
                                                                        type='radio'
                                                                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                                    />
                                                                    <label className='ml-3 min-w-0 flex-1 text-gray-500 font-sofiapro-light'>{price.name}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                            </ul>
                                            <div className="space-y-6">

                                            </div>

                                            <button onClick={onSubmit} className="text-xl px-3 py-1 bg-blue-950 text-white font-semibold rounded-md mx-2">Buscar</button>
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>

                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex justify-between">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 my-auto">Productos</h1>
                            <form className="pt-6 w-full max-w-[700px] md:pl-36 md:pr-10">
                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative flex">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input  onChange={e=>onChange(e)} type="search" id="default-search" className="block w-full px-2 py-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar producto..." required />
                                    <button onClick={onSearch} type="text" className="text-center text-white absolute h-full right-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ir</button>
                                </div>
                            </form>
                            <div className="sm:flex">
                                <div className="sm:flex">
                                    <div className='form-group mr-3'>
                                        <label htmlFor='sortBy' className='mr-3 min-w-0 flex-1 text-gray-500'
                                        >Ver por</label>
                                        <select
                                            className='my-2 font-sofiapro-light inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
                                            id='sortBy'
                                            name='sortBy'
                                            onChange={e => onChange(e)}
                                            value={sortBy}
                                        >
                                            <option value='name'>Nombre</option>
                                            <option value='date_created'>Fecha ingreso</option>
                                            <option value='price'>Precio</option>
                                            <option value='sold'>Sold</option>


                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='order' className='mr-3 min-w-0 flex-1 text-gray-500'
                                        >Orden</label>
                                        <select
                                            className='my-2 font-sofiapro-light inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
                                            id='order'
                                            name='order'
                                            onChange={e => onChange(e)}
                                            value={order}

                                        >
                                            <option value='asc'>A - Z</option>
                                            <option value='desc'>Z - A</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex mt-2">
                                    <button
                                        type="button"
                                        className="flex -m-2 ml-1 border-[1px] sm:border-0 border-gray-300 rounded-md p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                        onClick={() => setMobileFiltersOpen(true)}

                                    >

                                        <span className="sm:sr-only">Filtrar</span>
                                        <FunnelIcon className="w-5 mx-5" aria-hidden="true" />
                                    </button>
                                    <button
                                        type="button"
                                        className="sm:hidden -m-2 ml-5 border-[1px] sm:border-0 border-gray-300 rounded-md p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                        onClick={onSubmit}

                                    >


                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>

                                    </button>
                                </div>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pb-24 pt-4">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                {/* Filters */}
                                <form className="hidden lg:block px-2 rounded-md pb-2">
                                    <h3 className="sr-only">Categorias</h3>
                                    <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                                        <li><div className=' flex items-center h-5 my-3'>
                                            <input
                                                name='category_id'
                                                onChange={e => onChange(e)}
                                                value='0'
                                                type='radio'
                                                defaultChecked
                                                className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                            />
                                            <label className="ml-3 min-w-0 flex-1 text-gray-500 underline underline-offset-2">
                                                Todo
                                            </label>
                                        </div></li>
                                        {
                                            categories &&
                                            categories !== null &&
                                            categories !== undefined &&
                                            categories.map(category => {
                                                if (category.sub_categories.length === 0) {
                                                    return (
                                                        <div key={category.id} className=' flex items-center h-5 my-5'>
                                                            <input
                                                                name='category_id'
                                                                onChange={e => onChange(e)}
                                                                value={category.id.toString()}
                                                                type='radio'
                                                                className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                            />
                                                            <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                                {category.name}
                                                            </label>
                                                        </div>
                                                    )
                                                } else {
                                                    let result = []
                                                    result.push(
                                                        <div key={category.id} className='flex items-center h-5 underline underline-offset-2'>
                                                            <input
                                                                name='category_id'
                                                                onChange={e => onChange(e)}
                                                                value={category.id.toString()}
                                                                type='radio'
                                                                className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                            />
                                                            <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                                {category.name}
                                                            </label>
                                                        </div>
                                                    )

                                                    category.sub_categories.map(sub_category => {
                                                        result.push(
                                                            <div key={sub_category.id} className='flex items-center h-5 ml-4 my-2'>
                                                                <input
                                                                    name='category_id'
                                                                    onChange={e => onChange(e)}
                                                                    value={sub_category.id.toString()}
                                                                    type='radio'
                                                                    className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                                />
                                                                <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                                    {sub_category.name}
                                                                </label>
                                                            </div>
                                                        )
                                                    })

                                                    return result
                                                }
                                            })
                                        }
                                    </ul>
                                    {
                                        prices && prices.map((price, index) => {
                                            if (price.id === 0) {
                                                return (
                                                    <div key={index} className='form-check'>
                                                        <input
                                                            onChange={e => onChange(e)}
                                                            value={price.name}
                                                            name='price_range'
                                                            type='radio'
                                                            className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full my-2'
                                                            defaultChecked
                                                        />
                                                        <label className='ml-3 min-w-0 flex-1 text-gray-500 font-sofiapro-light'>{price.name}</label>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={index} className='form-check'>
                                                        <input
                                                            onChange={e => onChange(e)}
                                                            value={price.name}
                                                            name='price_range'
                                                            type='radio'
                                                            className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                        />
                                                        <label className='ml-3 min-w-0 flex-1 text-gray-500 font-sofiapro-light'>{price.name}</label>
                                                    </div>
                                                )
                                            }
                                        })
                                    }


                                    <button className="ml-10 px-2 py-1 mt-2 bg-blue-950 text-white font-semibold text-lg rounded-md " onClick={onSubmit}>Buscar</button>
                                </form>

                                {/* Product grid */}
                                <div className="lg:col-span-3 border-2 border-gray-400 border-dashed rounded-md">{showProducts()}</div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

        </Layout>
    )
}
const mapStateToProps = state => ({

    products: state.Products.products,
    categories: state.Categories.categories,
    filtered_products: state.Products.filtered_products
})


export default connect(mapStateToProps, {
    get_products,
    get_categories,
    get_filtered_products,
    get_search_products
})(Shop)

