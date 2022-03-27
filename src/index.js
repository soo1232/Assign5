import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header";
import App from "./App";
import About from "./routes/about";
import Projects from "./routes/projects";
import Project from "./routes/project";
import Contact from "./routes/contact";

import css from "./App.css";

const rootElement = document.getElementById("root");
render(
  /* Define Routes */
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} >
        <Route
          index
          element={
            <main style={{ padding: '1rem' }}>
              <p>Select a project</p>
            </main>
          }
        />
        <Route path=":projectId" element={<Project />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);