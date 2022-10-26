import { useContext, useEffect } from "react";
import { Datacontext } from "./context/DataProvider";
import Card from "./components/Card";
import Header from "./Components/Header";
import "./App.css";

function App() {
  const { news, fetchData } = useContext(Datacontext);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {news.map((_new) => {
        return (
          <Card
            id={_new.id}
            category={_new.category}
            region={_new.region}
            body={_new.body}
            url={_new.url}
            hour={_new.hour}
            key={_new.id}
          />
        );
      })}
    </div>
  );
}

export default App;
