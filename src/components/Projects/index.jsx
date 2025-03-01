import Title from "../Title";
import CardProject from "../CardProject";
import "../../sass/components/_Projects.sass";
import data from "../../json/db.json";
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <section className="container-projects" id="project">
            <Title>
                <div className="wave-container" data-aos="fade-right">
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>j</span>
                    <span>e</span>
                    <span>t</span>
                    <span>o</span>
                    <span>s</span>
                </div>
            </Title>

            

                {
                    data.length > 0 ? (
                        <div className="container-cards-projects" data-aos="fade-up" data-aos-delay="200">
                            {
                                data.map((project, i) => (
                                    <Link to={`/project/${project.name}`} key={i}>
                                        <CardProject
                                            name={project.name}
                                            technologies={project.technologies}
                                            img={project.imagem}
                                        />
                                    </Link>
                                ))
                            }
                        </div>
                    ) : (
                        <div>carregando...</div>
                    )
                } 
        </section>
    )
}

export default Projects;