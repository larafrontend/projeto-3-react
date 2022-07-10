import Header from '../../componentes/Header/Header'
import project from '../../assets/project-complete.svg'

function Portfolio() {
    return (
        <Header 
        image={project} 
        description="ilustração projects"
        >Meus Projetos
        </Header>
    )
}

export default Portfolio