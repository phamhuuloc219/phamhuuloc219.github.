import React from 'react'

function formatText(text, maxLength = 30) {
  return text
    .match(new RegExp(`.{1,${maxLength}}`, "g"))
    .join("\n");
}

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p style={{ whiteSpace: "pre-wrap" }}>{formatText(p, 30)}</p>
    </a>
  );
}

export default ProjectCard