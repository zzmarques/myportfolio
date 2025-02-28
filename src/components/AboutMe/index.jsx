import img from "../../../public/assets/imgs/about.png"
import Title from "../Title";
import "../../sass/components/_AboutMe.sass";



const AboutMe = () => {

    return (
        <section className="container-about" id="about">
            <Title>
                <div 
                    className="wave-container" 
                    data-aos="fade-right"
                >
                    <span>S</span>
                    <span>o</span>
                    <span>b</span>
                    <span>r</span>
                    <span>e</span>
                    <span>M</span>
                    <span>e</span>
                </div>
            </Title>
            <div className="container-content">
                <div className="container-texts" >
                    <p  data-aos="fade-right" data-aos-delay="100">
                        Sou um desenvolvedor front-end com a ambição de me tornar um desenvolvedor fullstack. Atualmente, estou concentrado em me especializar no front-end, onde posso aplicar e aperfeiçoar minhas habilidades na criação de interfaces web intuitivas e funcionais. Além dos projetos pessoais, também tenho experiência como freelancer, onde enfrentei e superei diversos desafios, sempre buscando soluções criativas e eficazes.
                    </p>
                    <p  data-aos="fade-right" data-aos-delay="300">
                        Meu compromisso com o aprendizado contínuo me motiva a buscar novos projetos e desafios que expandam minhas competências e explorem novas tecnologias. Cada projeto é uma oportunidade valiosa para fortalecer minhas habilidades. Acredito que dedicação e aprendizado constante são essenciais para alcançar meus objetivos como desenvolvedor fullstack. Estou sempre em busca de novas oportunidades para crescer profissionalmente e contribuir com soluções inovadoras no desenvolvimento de interfaces web.
                    </p>
                </div>
                <div className="container-img" data-aos="fade-left" data-aos-delay="400">
                    <img src={img} alt="about img" />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;