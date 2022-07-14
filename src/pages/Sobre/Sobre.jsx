import Header from '../../componentes/Header/Header'
import about from '../../assets/about-me.svg'

function Portfolio() {
    return (
        <Header 
        image={about} 
        description="ilustração about me"
        >Sobre
        </Header>
    )
}

export default Portfolio