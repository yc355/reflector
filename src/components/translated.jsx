import React, { useState } from "react";
import Iframe from "react-iframe";
import "./translated.css";

export default function Translated() {
  const homepage = "https://russian.rt.com/";
  const [url, setUrl] = useState(homepage);
  const [inputUrl, setInputUrl] = useState(homepage);

  const submitInputUrl = (e) => {
    e.preventDefault();
    if (!(inputUrl.startsWith("http://") || inputUrl.startsWith("https://"))) {
      setInputUrl("http://" + inputUrl);
    }
    setUrl(inputUrl);
  };

  return (
    <div class="iframes">
      <div class="control">
        <form onSubmit={submitInputUrl}>
          <label>
            URL:
            <input
              value={inputUrl}
              onChange={(event) => setInputUrl(event.target.value)}
              name="inputUrl"
              type="text"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div class="iframe-container">
        <Iframe src={url} frameBorder="0" />
      </div>
      <div class="iframe-container">
        <embed
          uri={
            "https://translate.google.com/translate?hl=&sl=auto&tl=en&u=" +
            encodeURIComponent(url)
          }
        />
      </div>
    </div>
  );
}
