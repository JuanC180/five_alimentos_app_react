import imgError404 from '../../assets/img/error404.svg'
// import '../assets/css/style.css'
import '../../pages/error404/css/error404.css'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
        {/* <h1>Error404</h1> */}

        <div className='contenedor404'>
          <img className='contenedor404__img' src={imgError404}></img>

          <div className='contenedor404__div'>
            <p className='contenedor404__texto'>
              Oops!<br/>
              No hemos encontrado la página a la cual deseas entrar.
            </p>

            <Link to={'/'}>
              <button className='contenedor__btn'>Regresar al inicio</button>
            </Link>

          </div>
        </div>

    </>
  )
}

export default Error404