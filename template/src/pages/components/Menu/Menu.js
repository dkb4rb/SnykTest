import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import './Menu.css'

const cookies = new Cookies();

const redirect = () => {
    window.location.href = './Login';
}


class Menu extends Component {    

    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('apellido_paterno', { path: "/" });
        cookies.remove('apellido_materno', { path: "/" });
        cookies.remove('nombre', { path: "/" });
        cookies.remove('username', { path: "/" });
        window.location.href = './';
    }

    componentDidMount() {
        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    }

    render() {
        console.log('id: ' + cookies.get('id'));
        console.log('apellido_paterno: ' + cookies.get('apellido_paterno'));
        console.log('apellido_materno: ' + cookies.get('apellido_materno'));
        console.log('nombre: ' + cookies.get('nombre'));
        console.log('username: ' + cookies.get('username'));
        return (
            <div className='container_menu'>
                <div>
                    <Header />
                </div>
                <br />
                <br />
                <div>
                    <div className="container_carousel_principal">                      
                        <Carousel />
                    </div>
                </div>
                <div>
                
                    <br />
                    <div className="li_button">
                        <button className="btn btn-primary" type="button" onClick={() => redirect()}>Log In</button>
                    </div>
                    <button className="btn btn-secondary" type="button" onClick={() => this.cerrarSesion()}>Cerrar Sesión</button>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Menu;