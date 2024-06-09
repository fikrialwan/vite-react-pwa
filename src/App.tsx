import { useEffect, useState } from "react";
import { type newsType } from "./interface";
import "./App.css";
import { fetchAPI } from "./fetch";

function App() {
  const [news, setNews] = useState<newsType[]>([]);

  useEffect(() => {
    fetchAPI.then((res) => setNews(res));
  }, []);

  return (
    <ol>
      {news.map(({ story_id, title, url }: newsType) => (
        <li key={story_id} style={{ textAlign: "left" }}>
          <a
            href={url}
            style={{
              color: "white",
            }}
            target="_blank"
          >
            {title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default App;
