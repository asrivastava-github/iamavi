import React, {useContext} from "react";
import "./Blogs.scss";
import {blogSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  if (!blogSection.display) return null;

  return (
    <Fade cascade damping={0.2} duration={800} triggerOnce>
      <div className="main" id="blogs">
        <div>
          <h1 className="blog-heading">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
          <div className="blog-cards-container">
            {blogSection.blogs.map((blog, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode blog-card blog-card-dark"
                    : "blog-card blog-card-light"
                }
                onClick={() => window.open(blog.url, "_blank")}
              >
                <h3
                  className={isDark ? "dark-mode blog-card-title" : "blog-card-title"}
                >
                  {blog.title}
                </h3>
                <p
                  className={
                    isDark ? "dark-mode blog-card-description" : "blog-card-description"
                  }
                >
                  {blog.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
