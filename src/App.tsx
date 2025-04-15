//

import { Link } from 'react-router';
import { ProjectCard } from './components';

export const App = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="header-item">
            Portfolio
          </Link>
          <nav className="header-nav">
            <Link to="#about" className="header-nav-item">
              About
            </Link>
            <Link to="#projects" className="header-nav-item">
              Projects
            </Link>
            <Link to="#contact" className="header-nav-item">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <ProjectCard
        title='Porfolio Website'
        description='A responsive portfolio website showcasing projects and skills with a clean, minimalist design.'
        tags={['TypeScript', 'React', 'Tailwind CSS']}
      />
    </>
  );
};
