import '../../sass/components/_DetailProject.sass';
import BtnBack from '../BtnBack';



const DetailProject = ({ name, description, liveDemo, repository, img }) => {


    return (
        <section className='container-detail-project'>

            <div className='container-img'>
                <img src={img} alt={name} loading="lazy"/>
            </div>

            <div className='container-detail'>
                    
                    <div className='container-text'>
                        <div className='container-cabecalho'>
                        <h1>{ name }</h1>
                        <BtnBack/>
                        </div>
                        <div className='container-p'>
                            <p>{ description }</p>
                        </div>
                    </div>

                    <div className='container-buttons'>
                        <a href={liveDemo} target='_blank'><button>Demo do projeto</button></a>
                        <a href={repository} target='_blank'><button>Repositório</button></a>
                    </div>

                </div>
        </section>
    );
}

export default DetailProject;