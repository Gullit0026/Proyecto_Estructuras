import React from 'react';
import imagen_home from '../../assets/home_img.jpg';
import RegisterForm from './RegisterForm';
import './Home.css';

const Home = () => {

    return (
        <>
            <div className='home_page_container_container'>
                <div className='home_page_container'>
                    <div className='home_container'>
                        <div className='imagen_home_container'>
                            <img className='imagen_home' src={imagen_home}></img>
                        </div>
                        <div className='home_text'>
                            <h1>Solicita tu crédito</h1>
                            <p>Dile sí a todo lo que quieras comprar, 
                            en menos de 5 minutos puedes solicitar y activar tu crédito</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home_credito'>
                <p>¿Como solicitar un <strong>crédito </strong>?</p>
                <p>Registrate aquí, recibirás un correo eléctronico con más información acerca de tu solicitud</p>
                <RegisterForm/>
            </div>
        </>
    )
}

export default Home