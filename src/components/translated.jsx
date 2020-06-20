import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Iframe from "react-iframe";
import queryString from "query-string";
import "./translated.css";

export default function Translated({ location }) {
  const history = useHistory();
  const homepage = "russian.rt.com";
  const [inputUrl, setInputUrl] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [navigableUrl, setNavigableUrl] = useState('');

  useEffect(() => {
    let queryParams = queryString.parse(location.search);
    let queryUrl = queryParams['url'];
    setInputUrl(queryUrl || homepage)
    setCurrentUrl(queryUrl || homepage);
  }, []);

  useEffect(() => {
    setNavigableUrl("http://" + currentUrl)
  }, [currentUrl]);

  const submitInputUrl = (e) => {
    e.preventDefault();
    setCurrentUrl(inputUrl);
    history.push("/?url=" + encodeURIComponent(inputUrl));
  };

  return (
    <div class="iframes">
      <div class="control">
        <form class="url" onSubmit={submitInputUrl}>
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
        <Iframe url={navigableUrl} frameBorder="0" />
      </div>
      <div class="iframe-container">
        <embed
          src={
            "https://translate.google.com/translate?hl=&sl=auto&tl=en&u=" +
            encodeURIComponent(navigableUrl)
          }
        />
      </div>
    </div>
  );
}
