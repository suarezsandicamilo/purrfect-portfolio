//

import { Link } from 'react-router';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to={'/'} className="header-link-main">
          Portfolio
        </Link>
        <nav className="header-nav">
          <Link to={'#about'} className="header-link">
            About
          </Link>
          <Link to={'#projects'} className="header-link">
            Projects
          </Link>
          <Link to={'#contact'} className="header-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
