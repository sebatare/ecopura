import Layout from "../../../hocs/Layout"
import bannermobile from "../../../images/1-responsive.png"
import banner from "../../../images/1.png"
import InfoComponent from "./InfoComponent"
import ServicesComponent from "./ServicesComponent"
import { Link } from "react-router-dom"

import img31 from "../../../images/3-1.png";
import img32 from "../../../images/3-2.png";
import img33 from "../../../images/3-3.png";
import img34 from "../../../images/3-4.png";
import img41 from "../../../images/4-1.png";
import img42 from "../../../images/4-2.png";
import img43 from "../../../images/4-3.png";
import img5 from "../../../images/5.png";

const Home = () => {
  return (
    <Layout>
      <header>
        <img className="hidden sm:block mx-auto shadow-md pt-2" src={banner} alt="" />
        <img className="sm:hidden" src={bannermobile} alt="" />
      </header>
      <section className='sm:flex justify-center mt-20'>
        <ServicesComponent title='Recargas' src={img31} alt='Producto Servicio' />
        <ServicesComponent title='kit iniciales' src={img32} alt='Producto Servicio' />
        <ServicesComponent title='planes' src={img33} alt='Producto Servicio' />
        <ServicesComponent title='dispensadores' src={img34} alt='Producto Servicio' />
      </section>
      <section className='sm:flex justify-center'>
        <InfoComponent title='Calidad Premium' text='Nuestro equipo de profesionales consta de ingenieros químicos y especialistas en tratamiento de aguas' src={img41} alt="Informacion de calidad premium" />
        <InfoComponent title='AGUA PURIFICADA' text='Nuestra agua Purificada es un tipo de Agua Potable donde las impurezas se reducen hasta tal punto que son casi imperceptibles' src={img42} alt='Informacion de agua purificada' />
        <InfoComponent title='AGUA ALCALINA' text='Es un tipo de agua ionizada que actúa como un potente y natural antioxidante' src={img43} alt='Informacion de agua alcalina' />
      </section>
      <section className='sm:flex'>
        <div className='py-4'>
          <img src={img5} alt="" />
        </div>
        <div className='text-left text-blue-900 xl:py-10 max-w-[750px] lg:px-20'>
          <h1 className=' text-2xl sm:text-5xl font-bold hover:underline underline-offset-3'>Quienes Somos</h1>
          <div className='px-3'>
            <p className='sm:text-2xl font-semibold py-2'>
              Ecopura SpA, es una empresa joven y dedicada a entregar productos y servicio de calidad garantizada con análisis y certificaciones constantes.
              <br />
              Nuestra planta está echa por ingenieros químicos y expertos entretamiento de aguas, por lo que aseguramos a calidad en todo el proceso.
            </p>
            <Link>
              <button className='mt-10 px-4 py-3 border-2 border-blue-900 bg-blue-900 text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition ease-in duration-300 text-2xl'>
                Ver Mas
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className='py-8'>
        <h1 className='relative uppercase font-bold text-5xl text-white text-center py-5 bg-blue-600 shadow-xl z-20'>productos destacados</h1>
        

      </section>
    </Layout>
  )
}
export default Home