import styled from "styled-components";

import { Container } from "./common/container";

const skills = [
  {
    title: "design",
    description:
      "I design beautiful and powerful websites for modern businesses. Any business today needs a website that wins customers’ trust and helps you do your business well. I make sure your website is up to that standard.",
  },
  {
    title: "Development",
    description:
      "I build websites in Webflow where I can create responsive, powerful and fully custom websites. Plus, Webflow has an incredibly simple Content Editor for you and your team to edit website content quickly and easily.",
  },
];

const Skill = () => {
  return (
    <SkillContainer className="flex">
      <h2 className="skill-title">
        What I <span className="highlight">do</span>
      </h2>
      <div className="skill-content">
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className={`skill-content--row ${
              index + 1 === skills.length ? "last" : ""
            }`}
          >
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </SkillContainer>
  );
};

export default Skill;

const SkillContainer = styled(Container)`
  padding: 140px 30px;
  h2 {
    flex: 1;
    margin-right: 90px;
  }
  .skill-content {
    flex: 1;
  }

  .skill-content--row {
    h3 {
      text-transform: capitalize;
      font-weight: bold;
      margin: 0 auto 10px;
    }
    &:not(.last) {
      margin-bottom: 80px;
    }
  }
  .highlight::after {
    width: 100%;
    left: 0;
  }
`;
