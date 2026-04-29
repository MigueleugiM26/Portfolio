import React, { useState, useEffect } from "react";

const Menu = () => {
  const currentPath = window.location.pathname;

  const getStaticPath = (path) => {
    return `${process.env.PUBLIC_URL || ""}/static/${path}`;
  };

  const isActive = (path) => currentPath === path;

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <div className="menuContainer">
        <a href="/home">
          <button
            className={isActive("/home") ? "activeMenuButton" : "menuButton"}
          >
            <img
              src={getStaticPath("img/icons/home.webp")}
              className="menuImagem"
              alt="Home"
            />
            <h2>Início</h2>
          </button>
        </a>

        <a href="/projetos">
          <button
            className={
              isActive("/projetos") ? "activeMenuButton" : "menuButton"
            }
          >
            <img
              src={getStaticPath("img/icons/computer.webp")}
              className="menuImagem"
              alt="Projetos"
            />
            <h2>Projetos</h2>
          </button>
        </a>

        <a href="/galeria">
          <button
            className={isActive("/galeria") ? "activeMenuButton" : "menuButton"}
          >
            <img
              src={getStaticPath("img/icons/galery.webp")}
              className="menuImagem"
              alt="Galeria"
            />
            <h2>Galeria</h2>
          </button>
        </a>

        <button
          className="themeToggle"
          onClick={() => setIsDark((d) => !d)}
          aria-label="Alternar tema"
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default Menu;
