import React, { useState } from "react";
import Iframe from "react-iframe";
import "./translated.css";

export default function Translated() {
  const homepage = "stoiccamel.ru/peter-the-great/";
  const [url, setUrl] = useState('http://' + homepage);
  const [inputUrl, setInputUrl] = useState(homepage);

  const submitInputUrl = (e) => {
    e.preventDefault();
    setUrl('http://' + inputUrl);
  };

  return (
    <div class="iframes">
      <div class="control">
        <form class= "url" onSubmit={submitInputUrl}>
          <label>
            URL: http://
            <input
              value={inputUrl}
              onChange={(event) => setInputUrl(event.target.value)}
              name="inputUrl"
              type="text"
            />
          </label>
          <br></br>
          <button>Submit</button>
        </form>
      </div>
      <div class="iframe-container">
        <Iframe url={url} frameBorder="0" />
      </div>
      <div class="iframe-container">
        <embed
          src={
            "https://translate.google.com/translate?hl=&sl=auto&tl=en&u=" +
            encodeURIComponent(url)
          }
        />
      </div>
    </div>
  );
}
