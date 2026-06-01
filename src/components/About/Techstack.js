import React from "react";
import { Col, Row } from "react-bootstrap";

// Import TechIcons
import React_Icon from "../../Assets/TechIcons/React.svg";
import Next_Icon from "../../Assets/TechIcons/Next.svg";
import Typescript_Icon from "../../Assets/TechIcons/Typescript.svg";
import Javascript_Icon from "../../Assets/TechIcons/Javascript.svg";
import Tailwind_Icon from "../../Assets/TechIcons/Tailwind.svg";
import Redux_Icon from "../../Assets/TechIcons/Redux.svg";
import Node_Icon from "../../Assets/TechIcons/Node.svg";
import Python_Icon from "../../Assets/TechIcons/Python.svg";
import CPlusPlus_Icon from "../../Assets/TechIcons/C++.svg";
import Java_Icon from "../../Assets/TechIcons/Java.svg";
import Git_Icon from "../../Assets/TechIcons/Git.svg";
import Docker_Icon from "../../Assets/TechIcons/Docker.svg";
import Postman_Icon from "../../Assets/TechIcons/Postman.svg";
import SQL_Icon from "../../Assets/TechIcons/SQL.svg";
import Firebase_Icon from "../../Assets/TechIcons/Firebase.svg";
import MUI_Icon from "../../Assets/TechIcons/MUI.svg";

function Techstack() {
  const skills = {
    "Frontend Development": [
      { name: "React", icon: React_Icon },
      { name: "Next.js", icon: Next_Icon },
      { name: "TypeScript", icon: Typescript_Icon },
      { name: "JavaScript (ES6+)", icon: Javascript_Icon },
      { name: "Tailwind CSS", icon: Tailwind_Icon },
      { name: "Redux Toolkit", icon: Redux_Icon },
      { name: "React Query", icon: React_Icon },
      { name: "React Router", icon: React_Icon },
      { name: "HTML5 / CSS3", icon: MUI_Icon }
    ],
    "Backend Development": [
      { name: "Node.js", icon: Node_Icon },
      { name: "NestJS", icon: Node_Icon },
      { name: "RESTful APIs", icon: Postman_Icon },
      { name: "Authentication & Authorization", icon: SQL_Icon },
      { name: "Appwrite", icon: Firebase_Icon },
      { name: ".NET Core (Basic)", icon: SQL_Icon },
      { name: "PHP (Basic)", icon: SQL_Icon }
    ],
    "Programming Languages": [
      { name: "C++", icon: CPlusPlus_Icon },
      { name: "JavaScript", icon: Javascript_Icon },
      { name: "Python", icon: Python_Icon },
      { name: "Java", icon: Java_Icon }
    ],
    "Database & Data Management": [
      { name: "PostgreSQL", icon: SQL_Icon },
      { name: "MySQL", icon: SQL_Icon },
      { name: "SQL Server", icon: SQL_Icon },
      { name: "Prisma ORM", icon: SQL_Icon },
      { name: "Supabase", icon: Firebase_Icon },
      { name: "LocalStorage API", icon: Javascript_Icon }
    ],
    "Tools & Workflow": [
      { name: "Git / GitHub", icon: Git_Icon },
      { name: "Docker", icon: Docker_Icon },
      { name: "Jest", icon: Node_Icon },
      { name: "GitHub Actions", icon: Git_Icon },
      { name: "Swagger", icon: Postman_Icon },
      { name: "Postman", icon: Postman_Icon }
    ],
    "Core Concepts": [
      { name: "Data Structures & Algorithms", icon: CPlusPlus_Icon },
      { name: "Object-Oriented Programming (OOP)", icon: Java_Icon },
      { name: "Database Design", icon: SQL_Icon },
      { name: "System Design (Basic)", icon: Node_Icon },
      { name: "State Management", icon: Redux_Icon },
      { name: "Problem Solving", icon: Python_Icon }
    ]
  };

  const [hoveredSkill, setHoveredSkill] = React.useState(null);

const skillBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",

  padding: "12px 18px",

  background: "rgba(18,10,35,0.92)",
  border: "2px solid rgba(192,132,245,0.45)",
  borderRadius: "999px",

  color: "#e8e8e8",
  fontSize: "15px",
  fontWeight: "500",

  cursor: "pointer",
  transition: "all .25s ease",

  minHeight: "62px",

  boxShadow: "0 0 12px rgba(192,132,245,.12)"
};

const getSkillBoxHoverStyle = () => ({
  transform: "translateY(-4px)",
  border: "2px solid #c084f5",
  boxShadow: "0 0 22px rgba(192,132,245,.35)"
});

return (
  <Row
    style={{
      justifyContent: "center",
      paddingBottom: "40px"
    }}
  >
    {Object.entries(skills).map((category, index) => (
      <Col
        md={12}
        key={index}
        style={{
          marginBottom: "40px"
        }}
      >
        <h4
          style={{
            color: "#c084f5",
            marginBottom: "26px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "600"
          }}
        >
          {category[0]}
        </h4>

        <Row
          style={{
            justifyContent: "center"
          }}
        >
          {category[1].map((skill, skillIndex) => (
            <Col
              xs="auto"
              key={skillIndex}
              style={{
                padding: "8px",
                marginBottom: "10px"
              }}
            >
              <div
                style={{
                  ...skillBoxStyle,
                  ...(hoveredSkill === `${index}-${skillIndex}`
                    ? getSkillBoxHoverStyle()
                    : {})
                }}
                onMouseEnter={() =>
                  setHoveredSkill(`${index}-${skillIndex}`)
                }
                onMouseLeave={() =>
                  setHoveredSkill(null)
                }
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{
                    height: "28px",
                    width: "28px",
                    objectFit: "contain"
                  }}
                />

                <span
                  style={{
                    whiteSpace: "nowrap"
                  }}
                >
                  {skill.name}
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    ))}
  </Row>
);
}

export default Techstack;
