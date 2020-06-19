import React from "react";
import Iframe from 'react-iframe'
import './translated.css'

export default function Translated() {
  return (
    <div class='iframes'>
      <div class='control'>
        Control
      </div>
      <div class='iframe-container'>
        <Iframe url="http://stoiccamel.ru/peter-the-great/" frameBorder='0' id='translated'/>
      </div>
      <div class='iframe-container'>
        <embed src="https://translate.google.com/translate?hl=&sl=ru&tl=en&u=http%3A%2F%2Fstoiccamel.ru%2Fpeter-the-great%2F"/>
      </div>
    </div>
  )
}
