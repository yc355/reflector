import React, { Component } from "react";
import Iframe from 'react-iframe'
import './translated.css'

export default class Translated extends Component {
  render() {
    return (
      <div class='iframes'>
        <div class='iframe-container'>
          <Iframe url="http://stoiccamel.ru/peter-the-great/" frameBorder='0'/>
        </div>
        <div class='iframe-container'>
          <Iframe url="http://stoiccamel.ru/peter-the-great/" frameBorder='0'/>
        </div>
      </div>
    )
  }
}
