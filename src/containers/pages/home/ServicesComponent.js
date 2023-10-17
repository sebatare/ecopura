import { Link } from "react-router-dom"

const ServicesComponent = ({title, src,alt}) => {
  return (
    <div className='relative px-4 py-4'>
        <Link to='/' className='flex flex-col items-center '>
        <img className="max-w-[200px]" src={src} alt={alt} />
            <div className='pt-3'>
                <p className='bg-blue-800 px-4 py-2 text-white font-bold uppercase rounded-lg hover:border-2 hover:border-blue-800 hover:bg-white hover:text-blue-800 transition ease-in duration-200 ' >{title}</p>
            </div>
        </Link>
    </div>
  )
}

export default ServicesComponent