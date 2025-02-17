import React, { useRef } from "react";
import texts from "../assets/data/texts.json";

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

  const listText = (text) => {
    const items = text.split("\n");
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{boldText(item)}</li>
        ))}
      </ul>
    );
  };

  const boldText = (text) => {
    return text
      .split("**")
      .map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
      );
  };

  const calculateAge = (nascimento) => {
    const birth = new Date(nascimento);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <>
      <div className="homeContainer">
        <section className="homeSection sticky">
          <img src={getStaticPath("img/pfp.webp")} className="homePFP" />
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

          <div className="info">
            <h3>{texts.nome}</h3>
            <p>{texts.contato}</p>
            <p>{texts.local}</p>
            <p>{calculateAge(texts.nascimento)} anos</p>
          </div>
        </section>

        <section className="homeSection">
          <h1 ref={introducaoRef}>Introdução</h1>
          <p>{boldText(texts.introducao)}</p>

          <h1 ref={formacaoRef}>Formação</h1>
          <p>{boldText(texts.formacao)}</p>

          <h1 ref={habilidadesRef}>Habilidades Técnicas</h1>
          <p style={{ width: "100%" }}>{listText(texts.habilidades)}</p>
        </section>

        <div className="sideTopicos">
          <button
            onClick={() => scrollToSection(introducaoRef)}
            className="sideElement s16"
          >
            <hr /> Introdução
          </button>

          <button
            onClick={() => scrollToSection(formacaoRef)}
            className="sideElement s16"
          >
            <hr /> Formação
          </button>

          <button
            onClick={() => scrollToSection(habilidadesRef)}
            className="sideElement s16"
          >
            <hr /> Habilidades Técnicas
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
