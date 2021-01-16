import { useState, useEffect } from "react";

import Layout from "./components/layout";
import Project from "./components/project";

import "./App.scss";
// import { contentful } from "./config";

import { contentful } from "./utils/contentful";

import Hero from "./components/hero";
import Scroll from "./components/scroll";
import Skill from "./components/skill";

const App = () => {
  // const { space_id, token_delivery } = contentful;

  // const graphql = `https://graphql.contentful.com/content/v1/spaces/${space_id}/explore?access_token=${token_delivery}`;
  const query = `{
    projectsCollection {
      items {
        sys {
          id
        }
        title
        description
        tags
        thumbnail {
          url
        }
        featuredImage {
          url
        }
        body
        url
      }
    }
  }
  `;

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    contentful(query)
      .then((data) => setProjects(data.projectsCollection.items))
      .catch((err) => console.log(err));
  }, [query]);

  useEffect(() => {
    fetch("https://park-portfolio-backend.herokuapp.com/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!projects) {
    return "Loading...";
  }

  return (
    <Layout>
      {/* <a href={graphql} target="_blank" rel="noreferrer">
        graphql
      </a> */}
      <br />
      <Hero />
      <section>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </section>
      <section>
        <Skill />
      </section>
      <Scroll />
    </Layout>
  );
};

export default App;
