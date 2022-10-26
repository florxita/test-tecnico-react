import React, { useEffect, useState, useContext } from "react";
import { Datacontext } from "../context/DataProvider";

const Header = () => {
  const { news, setNews, fetchData } = useContext(Datacontext);
  const [dataInput, setDataInput] = useState("");
  const tagFilter = [];

  const handleChange = (e) => {
    // e.preventDefault();

    news &&
      news.filter((noticia) => {
        noticia.tag.forEach((tag) => {
          tag.toLowerCase().includes(dataInput.toLowerCase().trim()) &&
            tagFilter.push(noticia);
          console.log(tagFilter);
          // setNews(noticia);
        });
      });
    // console.log(tagFilter);
    // setNews(tagFilter)
    // if (e.key === "Enter") {
    //   setDataInput("");
    // }
    // if (dataInput == "") {
    //   fetchData();
    // }
  };

  return (
    <>
      <section className="header">
        <h1>Stetic News</h1>

        <input
          type="search"
          id="search"
          placeholder="Buscar"
          required
          value={dataInput}
          onKeyDown={handleChange}
          onChange={(e) => setDataInput(e.target.value)}
        />
      </section>
    </>
  );
};
export default Header;
