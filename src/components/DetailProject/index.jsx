import img from '../../../public/assets/imgs/imagem-branca.png';
import '../../sass/components/_DetailProject.sass';
const DetailProject = () => {
    return (
        <section className='container-detail-project'>


            <div className='container-img'>
                <img src={img} alt="" srcset="" />
            </div>

            <div className='container-detail'>

                <div className='container-text'>
                    <h1>Nome Projeto</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iste totam, molestias dolores quam eum? Ipsam reiciendis esse molestias non odio nemo vel, aliquam dicta pariatur? Quibusdam placeat debitis reprehenderit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iste totam, molestias dolores quam eum? Ipsam reiciendis esse molestias non odio nemo vel, aliquam dicta pariatur? Quibusdam placeat debitis reprehenderit.
                    </p>
                </div>

                <div className='container-buttons'>
                    <a href="#"><button>Demo do projeto</button></a>
                    <a href="#"><button>Repositório</button></a>
                </div>

            </div>
        </section>
    );
}

export default DetailProject;