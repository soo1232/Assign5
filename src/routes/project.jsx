import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getProject, deleteProject } from '../data/data';

export default function Project() {
  let navigate = useNavigate();
  let params = useParams();
  let project = getProject(parseInt(params.projectId, 10));

  return (
    /* Define project page */
    <main style={{ padding: '1rem' }}>
      <br/>
      <h5> {project.name}</h5>
      <p>
        NO: {project.number}
      </p>
      <p>Release Date: {project.due}</p>
      <p>Project Cost: {project.amount}</p>
    </main>
  );
}
