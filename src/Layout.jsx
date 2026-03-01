import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/resume">Currículum</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
