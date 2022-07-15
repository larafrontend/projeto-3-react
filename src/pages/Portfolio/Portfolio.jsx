import Header from '../../componentes/Header/Header'
import project from '../../assets/project-complete.svg'
import projects from './projects'
import { BsArrowReturnRight } from 'react-icons/bs'
import "./portfolio.css"
import axios from 'axios'
import { useState, useEffect } from 'react'

function Portfolio() {
    const [ repos, setRepos ] = useState([])
    const baseURL = 'https://api.github.com/users/laraof/repos'

    useEffect(() => {
      axios
      .get(baseURL)
      .then((response) => setRepos(response.data))
    }, [])
  
    return (
        <>
            <Header 
            image={project} 
            description="ilustração projects"
            >Meus Projetos
            </Header>
            <div className="cartao-container">
              {projects.map(infos => {
          return (
            <div className="cartao" key={infos.id}>
              <h3 className="skills">{infos.name}</h3>
              <img src={infos.poster} alt={infos.name} />
              <a href={infos.link} className="enter-repo" target="_blank">
                <BsArrowReturnRight size={16} color="#111"/>
              </a>
            </div>
          
          )
          })}
          </div>
          <h2 className='titulo'>Outros Projetos no Meu Github</h2>
          <div className="card-container">
            {
              repos.map(repo => {
                return(
                  <div className="card" key={repo.id}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <a href={repo.html_url} className="enter-repo" target="_blank">
                <BsArrowReturnRight size={16} color="#fff"/>
              </a>
                  </div>
                )
              })
            }
          </div>
        </>
    )
}

export default Portfolio