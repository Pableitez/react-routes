import projects from '../data/projects';

function Projects() {
  return (
    <section>
      <h1>Proyectos</h1>
      <p>Estos son algunos de los proyectos en los que he trabajado:</p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} width="200" />
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
