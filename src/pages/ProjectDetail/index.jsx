import DetailProject from "../../components/DetailProject";
import Title from "../../components/Title";
import '../../sass/Pages/_ProjectDetail.sass'

const ProjectDetail = () => {
    return (
        <main className="container-project-detail">
            <Title>Name Projeto</Title>
            <DetailProject/>
        </main>
    );
}

export default ProjectDetail;