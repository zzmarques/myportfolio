import { useParams } from 'react-router-dom';
import img from '../../../public/assets/imgs/imagem-branca.png';
import '../../sass/components/_DetailProject.sass';
import BtnBack from '../BtnBack';
import data from "../../json/db.json";



const DetailProject = () => {

    const { id } = useParams();
    const card = data.find(item => item.name === id)
    console.log(card)


    return (
        <section className='container-detail-project'>
            

            <div className='container-img'>
                <img src={img} alt="" srcset="" />
            </div>

            {
                card && (
                    <div className='container-detail'>
                    
                    <div className='container-text'>
                        <div className='container-cabecalho'>
                        <h1>{ card.name }</h1>
                        <BtnBack/>
                        </div>
                        <div className='container-p'>
                            <p>{ card.description }</p>
                        </div>
                    </div>

                    <div className='container-buttons'>
                        <a href={card.liveDemo}><button>Demo do projeto</button></a>
                        <a href={card.repository}><button>Repositório</button></a>
                    </div>

                </div>
                )
                
            }
        </section>
    );
}

export default DetailProject;