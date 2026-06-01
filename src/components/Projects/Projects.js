import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import goodBookclub_users from "../../Assets/Projects/goodBookclub_users.png";
import vina_users from "../../Assets/Projects/vina_users.png";
import fast_food_restaurant from "../../Assets/Projects/fast_food_restaurant .png";
import MAY_client from "../../Assets/Projects/MAY-client.png";
import bookept_users from "../../Assets/Projects/bookept_users.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MAY_client}
              isBlog={false}
              title="MAY Coffee"
              description="A full-stack milk tea e-commerce platform built with React, NestJS, and PostgreSQL. Features include customer ordering, product customization, authentication, payment integration, loyalty rewards, and an admin dashboard for managing products, orders, staff, and business analytics. Integrated real-time order tracking with Socket.io, AI-powered product recommendations to help customers choose suitable drinks, and report exporting capabilities (Excel/PDF) for business operations."
              ghLink="https://github.com/nguyen-hong-tham/MAY"
              slug="may-coffee"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vina_users}
              isBlog={false}
              title="Vinabook"
              description="Vinabook is a full-stack book e-commerce platform built with Next.js, React, and PostgreSQL, providing a customer shopping experience alongside an administrative management dashboard. The system supports authentication, product catalog browsing, category filtering, shopping cart workflows, order management, and user profile management. It integrates an AI-powered chatbot to assist customers with product inquiries and frequently asked questions."
              ghLink="https://github.com/nguyen-hong-tham/vina_book"
              slug="vinabook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fast_food_restaurant}
              isBlog={false}
              title="FoodFast"
              description="A full-stack food ordering platform built with React Native, React, TypeScript, and Appwrite, consisting of a customer mobile application, restaurant management portal, and admin dashboard. The system supports authentication, menu management, order workflows, payment integration, analytics dashboards, and role-based management for customers, restaurants, and administrators. Implemented real-time delivery tracking with GPS/map visualization."
              ghLink="https://github.com/nguyen-hong-tham/fast-food"
              slug="foodfast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goodBookclub_users}
              isBlog={false}
              title="GoodBookClub"
              description="GoodBookClub is a full-stack online bookstore platform built with HTML5, CSS3, JavaScript (ES6+), and LocalStorage API, featuring a customer-facing shopping interface and an administrative management dashboard. The system supports authentication, product browsing, advanced search and filtering, shopping cart workflows, checkout processing, and order history management. It includes admin functionalities for product CRUD operations, customer management, order processing, and revenue statistics dashboards."
              ghLink="https://github.com/nguyen-hong-tham/Bookstore-Website-"
              slug="goodbookclub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookept_users}
              isBlog={false}
              title="BOOKEPT"
              description="BOOKEPT is an online bookstore platform that supports end-to-end customer purchasing workflows, from product discovery to order completion, alongside a dedicated administrative dashboard designed for operational management and business monitoring. It is integrated with a relational MySQL backend for robust data storage."
              ghLink="https://github.com/nguyen-hong-tham"
              slug="bookept"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
