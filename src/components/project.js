import styled from "styled-components";

import { Container } from "./common/container";
import styles from "./common/styles";
import { StyledButton } from "./common/button";

const Project = ({ project }) => {
  // console.log(project);
  // todo
  // url 대신 url params 사용해서 링크 연결하기
  // react router dom
  const { title, tags, description, thumbnail } = project;
  return (
    <ProjectContainer className="flex 2col" id="projects">
      <div className="project-content">
        <span className="project-caption">latest work</span>
        <h2 className="project-title">{title}</h2>
        <div className="project-tag-container">
          {tags.map((tag, index) => (
            // connect link to categories
            <div
              className={`project-tag ${index === 0 ? "first" : ""}`}
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="project-description">{description}</p>
        {/* connect to detail page */}
        <StyledButton className="project-button">see this project</StyledButton>
      </div>
      <div className="project-thumnail">
        <img src={thumbnail.url} alt={title} />
      </div>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled(Container)`
  padding: 140px 30px;
  display: flex;
  align-items: center;

  .project-content {
    flex: 1;
    margin-right: 90px;

    .project-caption {
      color: ${styles.gray};
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .project-tag-container {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 32px;

      .project-tag {
        font-size: 13px;
        padding: 4px 8px;
        background: ${styles.background};
        text-transform: capitalize;
        margin-left: 16px;
        cursor: pointer;
      }
      .first {
        margin-left: 0;
      }
    }
    .project-description {
      margin-bottom: 64px;
    }
  }

  .project-thumnail {
    flex: 1;
    max-width: 50vw;
    background: ${styles.background};
    img {
      width: 100%;
    }
  }
`;
