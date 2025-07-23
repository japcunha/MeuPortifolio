import Skills from "./Skills";

export default function About() {
  return (
    <section id="aboutMe">
      <div className="container">
          <img src="img/cat.jpeg" alt="me" className="img" />
          <div className="text-content">
        <h2>
          Olá! me chamo Joane Cunha
        </h2>
        <p>
          Sou estudante de Análise e Desenvolvimento de Sistemas e estou em busca de uma oportunidade para
          crescer como desenvolvedora web. Amo Tecnologia e estar em constante aprendizado! 
          Tenho conhecimentos em HTML, CSS, JavaScript, React, Tailwind, Git/Github,Lógica, POO 
          e estou me aventurando em Java e Banco de dados.
        </p>
        <Skills/>
</div>
</div>
    </section>
  );
}
