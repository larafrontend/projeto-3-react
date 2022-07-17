import './contato.css'
import Header from '../../componentes/Header/Header'
import search from '../../assets/search.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'

function Contato() {
    return (
        <>
             <Header
                image={search}
                description="ilustração search people"
            >
                Olha o Contatinho Dela
            </Header>
            <div className='contato-container'>
                <div className='each-contato'>
                    <div className='image-container'>
                        <img className='responsive-img img-git' src={github} alt="github logo" />
                    </div>
                    <span><a className='link' href="https://github.com/laraof">Acesse meu Github</a></span>
                </div>
                <div className='each-contato'>
                    <div className='image-container'>
                        <img className='responsive-img' src={linkedin} alt="linkedin logo" />
                    </div>
                    <span><a className='link' href="https://www.linkedin.com/in/lara-oliveira">Acesse meu Linkedin</a></span>
                </div>
                <div className='each-contato'>
                    <div className='image-container'>
                        <img className='responsive-img' src={instagram} alt="instagram logo" />
                    </div>
                    <span><a className='link' href="https://www.instagram.com/lara.f.arq/">Acesse meu Instagram</a></span>
                </div>
            </div>
        </>
    )
}

export default Contato