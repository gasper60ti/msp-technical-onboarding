/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pcBackground.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Graphic design and motion graphics projects 🎉",
    description:
      "A set of graphical projects aimed to boost the marketing side of the clients.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "NutriBoost!🌟",
    description:
      "Project manager and front-end dev in the making of an e-commerce website for dietary and orthopedic nutrition products.",
    url: "https://www.linkedin.com/posts/nasreddine-fliti-219193205_nutriboostlinkedinpost-activity-7078698156040835073-wE61?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "S9ILLO",
    description:
      "Contribution to the realization of a plant watering system.",
    url: "https://www.linkedin.com/posts/nasreddine-fliti-219193205_react-github-team-activity-6983682662125174784-ToUQ?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "YouTube Channel",
    description:
      "My Youtube channel where I do some Tech content creation.",
    url: "https://www.youtube.com/channel/UCRtFaLerrGJDwXTePHz3zXA",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
