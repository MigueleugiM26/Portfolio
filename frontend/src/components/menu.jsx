import React from "react";

const Menu = () => {
  const currentPath = window.location.pathname;

  const getStaticPath = (path) => {
    return `${process.env.PUBLIC_URL || ""}/static/${path}`;
  };

  const isActive = (path) => {
    return currentPath === path;
  };

  return (
    <>
      <div className="menuContainer">
        <a href="/home">
          <button
            className={`${
              isActive("/home") ? "activeMenuButton" : "menuButton"
            }`}
          >
            <img
              src={getStaticPath("img/icons/home.png")}
              className="menuImagem"
              alt="Home"
            />
            <h2>Início</h2>
          </button>
        </a>

        <a href="/projetos">
          <button
            className={`${
              isActive("/projetos") ? "activeMenuButton" : "menuButton"
            }`}
          >
            <img
              src={getStaticPath("img/icons/computer.png")}
              className="menuImagem"
              alt="Projetos"
            />
            <h2>Projetos</h2>
          </button>
        </a>

        <a href="/galeria">
          <button
            className={`${
              isActive("/galeria") ? "activeMenuButton" : "menuButton"
            }`}
          >
            <img
              src={getStaticPath("img/icons/galery.png")}
              className="menuImagem"
              alt="Galeria"
            />
            <h2>Galeria</h2>
          </button>
        </a>
      </div>
    </>
  );
};

export default Menu;
