import * as React from 'react';

import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';
import { getProjects } from '../data/data';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Projects() {
  let projects = getProjects();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    /* Define projects page */
    <main>
      <div class="container">
        <div style={{ display: 'flex' }}>
          <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
            <input
              value={searchParams.get('filter') || ''}
              onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                  setSearchParams({ filter }, { replace: true });
                } else {
                  setSearchParams({}, { replace: true });
                }
              }}
            />
            {/* Search project */}
            {projects
              .filter((project) => {
                let filter = searchParams.get('filter');
                if (!filter) return true;
                let name = project.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
              })
              .map((project) => (
                <QueryNavLink
                  key={project.number}
                  style={({ isActive }) => {
                    return {
                      display: 'block',
                      margin: '1rem 0',
                      color: isActive ? 'red' : '',
                    };
                  }}
                  to={`/projects/${project.number}`}
                >
                  {project.name}
                </QueryNavLink>
              ))}
          </nav>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
