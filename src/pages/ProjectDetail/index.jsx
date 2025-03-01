import { useParams } from 'react-router-dom';
import DetailProject from "../../components/DetailProject";
import '../../sass/Pages/_ProjectDetail.sass';
import data from '../../json/db.json'

const ProjectDetail = () => {

    const { id } = useParams();
    const project = data.find(item => item.name === id)


    return (
        <main className="container-project-detail">
            <DetailProject
                name={project.name}
                description={project.description}
                liveDemo={project.liveDemo}
                repository={project.repository}
                img={project.imagem}
            />
        </main>
    );
}

export default ProjectDetail;