import Skills from "./Skills";

export default function About() {
  return (
    <section id="aboutMe">
      <div className="container">
        <div className="image">
          <img src="img/cat.jpeg" alt="me" className="img" />
        </div>
        <div className="intro">
          <h1 className="text-xl font-semibold mb-2">
            Olá! me chamo Joane Cunha
          </h1>
          <p>
            Sou estudante de Analise e Desenvolvimento de Sistemas, atualmente
            no 4º período e estou em busca de uma oportunidade para crescer como
            desenvolvedora web.{" "}
          </p>
          <p>
            Tenho conhecimento em Lógica de programação, POO, e nas seguintes
            linguagens e tecnologias:
          </p>
          <Skills />
        </div>
      </div>
    </section>
  );
}
