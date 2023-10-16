import imgproducto from "../../../images/productos/1_bidon_azul.png"
const ProductCard = ({ product }) => {
  const f = new Intl.NumberFormat('es-CL', {
    currency: 'CLP',
    style: "currency",
  })
  return (

    <div key={product.id} className="group mx-2 max-w-[300px]">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={imgproducto}//{product.photo}
          alt=""
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div>
          <h3 className="text-lg font-semibold text-blue-900">
            <p to={`/product/${product.id}`}>

              {product.name}
            </p>
          </h3>
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