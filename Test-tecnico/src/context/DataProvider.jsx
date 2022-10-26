import React, { useState, createContext } from "react";

export const Datacontext = createContext(false);

const DataProvider = ({ children }) => {
  //aca paso los diferentes estados
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // obtengo la data del Json y la guardo en news
      let response = await fetch("http://127.0.0.1:5173/src/api/data.json");
      let news = await response.json();
      setNews(news);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  const values = {
    news,
    setNews,
    loading,
    setLoading,
    fetchData,
  };

  return <Datacontext.Provider value={values}>{children}</Datacontext.Provider>;
};
export default DataProvider;
