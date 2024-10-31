import React from 'react';
import imagen_home from '../../assets/imagen_home.jpg'
import RegisterForm from './RegisterForm';
import './Home.css';

const Home = () => {

    return (
        <div className='home_page_container'>
            <div className='home_container'>
                <div className='imagen_home_container'>
                    <img className='imagen_home' src={imagen_home}></img>
                </div>
                <div className='home_form'>
                    <h1>Solicita tu Crédito sin  visitar una  Entidad Bancaria</h1>
                    <RegisterForm className='register_form'/>
                </div>
            </div>
        </div>
    )
}

export default Home