import img from '../../../public/assets/imgs/imagem-branca.png';
import '../../sass/components/_DetailProject.sass';
const DetailProject = () => {
    return (
        <section className='container-detail-project'>
            <div>
                <div>
                    <img src={img} alt="" srcset="" />
                </div>
                <div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iste totam, molestias dolores quam eum? Ipsam reiciendis esse molestias non odio nemo vel, aliquam dicta pariatur? Quibusdam placeat debitis reprehenderit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iste totam, molestias dolores quam eum? Ipsam reiciendis esse molestias non odio nemo vel, aliquam dicta pariatur? Quibusdam placeat debitis reprehenderit.
                        </p>
                    </div>

                    <div>
                        <a href="#"><button>Demo do projeto</button></a>
                        <a href="#"><button>Repositório</button></a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default DetailProject;