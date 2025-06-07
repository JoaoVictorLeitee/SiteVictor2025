import logo from '../../Imagens/eu.jpg'
import './estilo.css'

function Logo() {
    return (
        <div className="logo">
             {/* <img src={logo} alt='logo' className='logo-img' /> */}
             <p className="nome">
                <strong>&lt;Victor</strong>Leite /&gt;
            </p>

        </div>
    )
}

export default Logo;