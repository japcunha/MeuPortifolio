import React, { useState } from "react";
export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-title">
        <h2>Projetos</h2>
        <p>Projetos destacados</p>
      </div>
      <div className="project-grid">
        <div
          className="project-card"
          onClick={() => window.open("https://fino-grao-cafe-v1.onrender.com/")}
        >
          <h3>Site Cafeteria</h3>
          <p>
            Construção de frontend do site com React,Javascript,CSS3 e
            TailwindCSS
          </p>
          <div className="project-tag">
            <span>Javascript</span>
            <span>React</span>
            <span>Express</span>
            <span>tailwindCSS</span>
            <span>Vite</span>
          </div>
        </div>
        <div
          className="project-card"
          onClick={() => window.open("https://japcunha.github.io/RELOGIO/")}
        >
          <h3>Calculadora</h3>
          <p>Construção de uma calculadora</p>
          <div className="project-tag">
            <span>Javascript</span>
            <span>React</span>
            <span>tailwindCSS</span>
          </div>
        </div>
        <div
          className="project-card"
          onClick={() => window.open("https://japcunha.github.io/RELOGIO/")}
        >
          <h3>RELÓGIO</h3>
          <p></p>
          <div className="project-tag">
            <span>Javascript</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS3</span>
          </div>
        </div>
        <div
          className="project-card"
          onClick={() => window.open("https://japcunha.github.io/TIMER-js/")}
        >
          <h3>Timer</h3>
          <p></p>
          <div className="project-tag">
            <span>Javascript</span>
            <span>CSS</span>
            <span>HTML</span>
          </div>
        </div>
      </div>
    </section>
  );
}
