import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Bienvenido a mi portfolio</h1>
      <p>
        Soy un desarrollador web con experiencia en React y tecnologías frontend.
        Aquí puedes conocer mis proyectos y mi trayectoria profesional.
      </p>
      <nav>
        <Link to="/projects">Ver proyectos</Link>
        <Link to="/resume">Ver currículum</Link>
      </nav>
    </section>
  );
}

export default Home;
