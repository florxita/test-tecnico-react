import React, { useEffect, useState } from "react";

const Card = ({ id, category, region, body, url, hour }) => {
  const [links, setLinks] = useState("");

  const createLinks = () => {
    const linksProcesados = url.map((link) => {
      const cuttedLink = link.split("/")[2];

      if (cuttedLink.includes("www")) {
        return {
          originalLink: link,
          linkWithoutW: cuttedLink.slice(4),
        };
      }
      return {
        originalLink: link,
        linkWithoutW: cuttedLink,
      };
    });

    setLinks(linksProcesados);
  };

  useEffect(() => {
    createLinks();
  }, []);

  return (
    <>
      <div className="card" id={id}>
        <div className="flexContainer">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <h2>{region}</h2>
        </div>
        <article>
          <p>{body.slice(0, 254).concat("...")}</p>
        </article>
        <div className="flexContainer">
          <span>{hour}</span>
          <span>
            {links &&
              links.map((link) => (
                <a
                  key={link.originalLink}
                  href={link.originalLink}
                  target="_blank"
                >
                  ver en {link.linkWithoutW}
                </a>
              ))}
          </span>
        </div>
      </div>
    </>
  );
};
export default Card;
