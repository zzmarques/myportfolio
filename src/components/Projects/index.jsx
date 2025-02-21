import Title from "../Title";
import CardProject from "../CardProject";
import "../../sass/components/_Projects.sass";


const Projects = () => {
    return (
        <section className="container-projects">
            <Title>
                <div className="wave-container">
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
            <div className="container-cards-projects">
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </div>
        </section>
    )
}

export default Projects;