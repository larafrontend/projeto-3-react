import Header from '../../componentes/Header/Header'
import about from '../../assets/about-me.svg'
import me from '../../assets/me.jpg'
import './sobre.css'

function Portfolio() {
    return (
        <>
            <Header 
            image={about} 
            description="ilustração about me"
            >
                Sobre
            </Header>
            <section className='container'>
                <div className='author-infos'>
                    <div className='img-container'>
                        <img className='author' src={me} alt="lara oliveira" />
                    </div>
                    <div className='text-container'>
                        <h3>Oiê! Sou a Lara</h3>
                        <p>
                            Mulher trans paraense, há 28 anos tentando não virar um pinscher. Tenho graduação em 
                            arquitetura em urbanismo, nunca fui muito entusiasta da área. Quase larguei o curso
                            no penúltimo semestre, mas consegui finalizar. Já sabia que não era isso, mas segui
                            adiante. 
                        </p>
                        <p>
                            Em 2017 me mudei para o Rio Grande do Sul, onde vivo ainda hoje, e onde também pude
                            descobrir esse mundo da tecnologia através de um emprego que tive. Sempre estudei por
                            conta própria através de video aulas e sites como o <span><a className='link' href='https://www.freecodecamp.org/'>
                                freecodecamp
                            </a></span>.
                        </p>
                        <p>
                            Atualmente estou tendo a grande oportunidade de participar do Bootcamp "Todas em Tech", da <span><a className='link' href="https://reprograma.com.br/">Reprograma</a></span>. Onde estou podendo adquirir conhecimentos na área de desenvolvimento front-end
                            e assim conseguir migrar de carreira.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio