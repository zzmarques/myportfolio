import img from "../../../public/assets/imgs/about.png"


const AboutMe = () => {

    return (
        <section className="container-about">
            <div className="container-texts">
                <p>
                    Sou um desenvolvedor front-end com a ambição de me tornar um desenvolvedor fullstack. Atualmente, estou concentrado em me especializar no front-end, onde posso aplicar e aperfeiçoar minhas habilidades na criação de interfaces web intuitivas e funcionais. Além dos projetos pessoais, também tenho experiência como freelancer, onde enfrentei e superei diversos desafios, sempre buscando soluções criativas e eficazes.
                </p>
                <p>
                    Meu compromisso com o aprendizado contínuo me motiva a buscar novos projetos e desafios que expandam minhas competências e explorem novas tecnologias. Cada projeto é uma oportunidade valiosa para fortalecer minhas habilidades. Acredito que dedicação e aprendizado constante são essenciais para alcançar meus objetivos como desenvolvedor fullstack. Estou sempre em busca de novas oportunidades para crescer profissionalmente e contribuir com soluções inovadoras no desenvolvimento de interfaces web.
                </p>
            </div>
            <div className="container-img">
                <img src={img} alt="about img" />
            </div>
        </section>
    )
}

export default AboutMe;