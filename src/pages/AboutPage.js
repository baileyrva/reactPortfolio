import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        Junior Developer with a self-driven attitude towards learning new
        technologies and programming paradigms. Trained and certified at the
        University of Richmond in software engineering, including skills in
        JavaScript (Node.js/React) and associated front-end technologies.
        Previously taught Algebra skills to middle school students for four
        years, and co-coached a middle school robotics team. I thrive in the
        process of breaking down an issue to its simplest form and building it
        back up to be more efficient and polished. My ability to quickly solve
        minor code issues paired with the work ethic, durability, and
        dependability it takes to tackle larger issues makes me a tremendous
        benefit to any team effort.
      </Content>
    </div>
  );
}

export default AboutPage;
