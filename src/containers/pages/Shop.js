import Layout from "../../hocs/Layout"
import { useEffect } from "react"
import { get_products } from '../../redux/actions/products'
import { connect } from "react-redux"
import ProductCard from "./product/ProductCard"

const Shop = ({
    get_products,
    products
}) => {
    const showProducts = () => {
        let results = []
        let display = []
        if (
            products &&
            products !== null &&
            products !== undefined
          ){
        products.map((product, index) => {
            return display.push(
                <div key={index} className="max-w-[300px] mx-auto shadow-lg rounded-md">
                    <ProductCard product={product} />
                </div>
            )
        })
          }

        for (let i = 0; i < display.length; i += 3) {
            results.push(
              <div key={i} className='grid md:grid-cols-3 my-10'>
                {display[i] ? display[i] : <></>}
                {display[i + 1] ? display[i + 1] : <></>}
                {display[i + 2] ? display[i + 2] : <></>}
              </div>
            )
          }
          console.log(results)
          return results
    }

    useEffect(() => {
        get_products()
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <h1>Shop</h1>
            <div className=" mx-72">{showProducts()}</div>
        </Layout>
    )
}
const mapStateToProps = state => ({

    products: state.Products.products,

})


export default connect(mapStateToProps, {
    get_products
})(Shop)

