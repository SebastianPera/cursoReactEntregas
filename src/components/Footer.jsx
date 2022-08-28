import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from 'react-icons/bs'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>    
        <section className="sectionFooter1">
            <div>
                <span>Conectate con nosotros en las redes sociales:</span>
            </div>
            <div>
                <a href="https://www.facebook.com" target="_blank"><BsFacebook style={{color:'black'}}/></a>
                <a href="https://twitter.com" target="_blank"><BsTwitter style={{color:'black'}}/></a>
                <a href="https://www.google.com.ar" target="_blank"><BsGoogle style={{color:'black'}}/></a>
                <a href="https://www.instagram.com/" target="_blank"><BsInstagram style={{color:'black'}}/></a>
            </div>
        </section>
        
        <section className="sectionFooter2">
            <div>
                <span>Tienda Online</span>
                <hr/>
                <p>En Comfy House te ofrecemos envío a domicilio a cualquier punto del país, más un sitio web renovado para que encuentres la mayor variedad de electrodomésticos, tecno y entretenimiento en tu hogar.</p>
            </div>

            <div>
                <span>Productos</span>
                <hr/>
                <Link to='/categoria/audioyvideo'>Audio y Video</Link>
                <Link to='/categoria/Electrodomésticos y AC'>Electrodomésticos y AC</Link>
                <Link to='/categoria/Cuidado Personal'>Cuidado personal</Link>
                <Link to='/categoria/Hogar y Jardín'>Hogar y Jardín</Link>
                <Link to='/categoria/Más Categorías'>Más categorías</Link>
            </div>
            
            <div>
                <span>Contacto</span>
                <hr/>
                <p><i className="fas fa-home"></i> Rosario, Santa Fe - Argentina</p>
                <p><i className="fas fa-envelope"></i> sebaa.pera@gmail.com</p>
                <p><i className="fas fa-phone"></i> +54 3413134665</p>
            </div>         
        </section>
        
        <div className="footerBase">© 2022 Creado por Sebastián Pera - Todos los derechos reservados
        </div>
    </footer>
  )
}

export default Footer