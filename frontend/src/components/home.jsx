import React, { useRef } from "react";

const Home = () => {
  const getStaticPath = (path) => {
    return `${process.env.PUBLIC_URL || ""}/static/${path}`;
  };

  const introducaoRef = useRef(null);
  const formacaoRef = useRef(null);
  const habilidadesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="homeContainer">
        <section className="homeSection sticky">
          <img src={getStaticPath("img/pfp.jpeg")} className="homePFP" />
          <div className="homeButtonContainer">
            <a href="https://github.com/MigueleugiM26" target="blank">
              <button className="homeButton">
                <img
                  src={getStaticPath("img/icons/github.webp")}
                  className="menuImagem"
                  alt="GitHub"
                />
                <h2>GitHub</h2>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-gabriel-a63b00226/"
              target="blank"
            >
              <button className="homeButton">
                <img
                  src={getStaticPath("img/icons/linkedin.webp")}
                  className="menuImagem"
                  alt="LinkedIn"
                />
                <h2>LinkedIn</h2>
              </button>
            </a>
          </div>

          <h2>(minhas informações aqui)</h2>
        </section>

        <section className="homeSection">
          <h1 ref={introducaoRef}>Introdução</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            dolor dictum, tempor libero aliquam, imperdiet elit. Integer posuere
            tellus eu lorem sodales fermentum. Cras aliquam felis turpis, ut
            eleifend purus tincidunt eget. Nulla in bibendum urna, at ultricies
            risus. Nunc a semper dui. Proin tincidunt pretium dapibus. Etiam vel
            mi placerat, porttitor dolor eu, scelerisque felis. Maecenas dictum,
            erat vehicula rutrum euismod, mauris nunc maximus arcu, vitae
            ultrices odio purus non felis. Curabitur pharetra consequat tempor.
            Quisque pulvinar iaculis turpis, ac commodo risus varius in. Sed
            eget dapibus purus. Quisque non purus eu tortor placerat iaculis.
            Cras ac urna pulvinar, convallis dui vitae, auctor magna. Mauris
            iaculis blandit gravida.
          </p>

          <h1 ref={formacaoRef}>Formação</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            dolor dictum, tempor libero aliquam, imperdiet elit. Integer posuere
            tellus eu lorem sodales fermentum. Cras aliquam felis turpis, ut
            eleifend purus tincidunt eget. Nulla in bibendum urna, at ultricies
            risus. Nunc a semper dui. Proin tincidunt pretium dapibus. Etiam vel
            mi placerat, porttitor dolor eu, scelerisque felis. Maecenas dictum,
            erat vehicula rutrum euismod, mauris nunc maximus arcu, vitae
            ultrices odio purus non felis. Curabitur pharetra consequat tempor.
            Quisque pulvinar iaculis turpis, ac commodo risus varius in. Sed
            eget dapibus purus. Quisque non purus eu tortor placerat iaculis.
            Cras ac urna pulvinar, convallis dui vitae, auctor magna. Mauris
            iaculis blandit gravida.
          </p>

          <h1 ref={habilidadesRef}>Habilidades Técnicas</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            dolor dictum, tempor libero aliquam, imperdiet elit. Integer posuere
            tellus eu lorem sodales fermentum. Cras aliquam felis turpis, ut
            eleifend purus tincidunt eget. Nulla in bibendum urna, at ultricies
            risus. Nunc a semper dui. Proin tincidunt pretium dapibus. Etiam vel
            mi placerat, porttitor dolor eu, scelerisque felis. Maecenas dictum,
            erat vehicula rutrum euismod, mauris nunc maximus arcu, vitae
            ultrices odio purus non felis. Curabitur pharetra consequat tempor.
            Quisque pulvinar iaculis turpis, ac commodo risus varius in. Sed
            eget dapibus purus. Quisque non purus eu tortor placerat iaculis.
            Cras ac urna pulvinar, convallis dui vitae, auctor magna. Mauris
            iaculis blandit gravida.
          </p>
        </section>

        <div className="sideTopicos">
          <button
            onClick={() => scrollToSection(introducaoRef)}
            className="sideElement"
          >
            <hr /> Introdução
          </button>

          <button
            onClick={() => scrollToSection(formacaoRef)}
            className="sideElement"
          >
            <hr /> Formação
          </button>

          <button
            onClick={() => scrollToSection(habilidadesRef)}
            className="sideElement"
          >
            <hr /> Habilidades Técnicas
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
