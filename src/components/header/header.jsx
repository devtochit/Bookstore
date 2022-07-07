import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const navigationLinks = [
  {
    id: 1,
    title: 'home',
    route: '/',
  },
  {
    id: 2,
    title: 'Calculator',
    route: '/calculator',
  },
  {
    id: 3,
    title: 'Qoutes',
    route: '/quotes',
  },
];

function header() {
  return (
    <>
      <div className="App">
        <nav className="App-header">
          <ul className="App-header-container">
            {navigationLinks.map(({ id, title, route }) => (
              <li key={id}>
                <NavLink
                  to={route}
                  style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',
                    borderRadius: isActive ? '2px' : '',
                  })}
                >

                  {title}
                </NavLink>
              </li>
            ))}

          </ul>
        </nav>
      </div>

    </>

  );
}

export default header;
