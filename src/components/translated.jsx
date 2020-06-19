import React, { useState } from "react";
import Iframe from "react-iframe";
import "./translated.css";

export default function Translated() {
  const [url, setUrl] = useState(
    "http://stoiccamel.ru/information-cycle-summary/"
  );

  return (
    <div class="iframes">
      <div class="control">{url}</div>
      <div class="iframe-container">
        <Iframe url={url} frameBorder="0" />
      </div>
      <div class="iframe-container">
        <embed
          src={
            "https://translate.google.com/translate?hl=&sl=ru&tl=en&u=" +
            encodeURIComponent(url)
          }
        />
      </div>
    </div>
  );
}
