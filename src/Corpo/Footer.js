import React from "react"
import styles from '../page.css'
import insta from '../imagem/facebook.png';
import face from '../imagem/instagram.png';
import tel from '../imagem/telefone.png';
import whats from '../imagem/whatsapp.png';

const Footer = () => <footer className="page-footer font-small blue pt-4" class="myBackground">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-5 mt-0">
                <h5 className="text-uppercase">IFOOT</h5>
                <img src={whats} alt="whatsapp" width="18" height="18" />&emsp;contato : (XX) XXXXX-XXXX<br></br>
                <img src={face} alt="facebook" width="18" height="18" /> &ensp;Ifoot_Oficial<br></br>
                <img src={insta} alt="isntagram" width="18" height="18" />&ensp; Ifoot_Oficial
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-2 mt-md-4 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-2 mt-md-4 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Original:
        <a href="https://mdbootstrap.com/"> IFOOT.com</a>
    </div>

</footer>

export default Footer;