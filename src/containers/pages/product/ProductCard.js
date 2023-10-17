import imgproducto from "../../../images/productos/1_bidon_azul.png"
import { Link } from "react-router-dom"
const ProductCard = ({ product }) => {
  const f = new Intl.NumberFormat('es-CL', {
    currency: 'CLP',
    style: "currency",
  })
  return (

    <div key={product.id} className="text-center">
      <div>
        <img
          src={imgproducto}//{product.photo}
          alt="Producto"
        />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold text-blue-900">
              <p to={`/product/${product.id}`}>
  
                {product.name}
              </p>
            </h3>
          </Link>
        </div>
        <p className="text-lg font-semibold text-blue-950">{f.format(product.price)}</p>
        <form>
          <button className="border-2 border-blue-800 py-1 mb-3 rounded-md bg-blue-900 text-white font-bold px-2 hover:bg-white hover:text-blue-900 ">Agregar al carro</button>
        </form>

      </div>
    </div>
  )
}

export default ProductCard