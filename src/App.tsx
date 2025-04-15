//

import { Link } from 'react-router';

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
    </>
  );
};
