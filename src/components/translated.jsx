import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Iframe from "react-iframe";
import queryString from "query-string";
import "./translated.css";

export default function Translated({ location }) {
  const history = useHistory();
  const defaultHomepage = "russian.rt.com";
  const [inputUrl, setInputUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [navigableUrl, setNavigableUrl] = useState("");

  useEffect(() => {
    let queryParams = queryString.parse(location.search);
    let queryUrl = queryParams["url"];
    setInputUrl(queryUrl || defaultHomepage);
    setCurrentUrl(queryUrl || defaultHomepage);
  }, []);

  useEffect(() => {
    setNavigableUrl("https://" + currentUrl);
  }, [currentUrl]);

  useEffect(() => {
    if (inputUrl.includes("http://")) {
      setInputUrl(inputUrl.replace("http://", ""));
    }
    if (inputUrl.includes("https://")) {
      setInputUrl(inputUrl.replace("https://", ""));
    }
    if (inputUrl.includes(" ")) {
      setInputUrl(inputUrl.replace(/\s/g, ""));
    }
  }, [inputUrl]);

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
            URL: https://
            <input
              value={inputUrl}
              onChange={(event) => setInputUrl(event.target.value)}
              name="inputUrl"
              type="text"
            />
          </label>
          <br></br>
          <button>Submit</button>
          <span>Upon submit, URL in browser will update to a copy/paste-able link</span>
        </form>
      </div>
      <div class="iframe-container">
        <embed
          src={navigableUrl}
        />
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
