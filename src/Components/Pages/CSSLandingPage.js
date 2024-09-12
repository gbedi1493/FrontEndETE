import React, { useEffect } from "react";
import "./CSSLandingPage.css";

export const CSSLandingPage = () => {
  const cssCodeEl = `
  body {
    background-color: lightblue;
  }
  
  h1 {
    color: white;
    text-align: center;
  }
  
  p {
    font-family: verdana;
  }
  `;
  useEffect(() => {
    const cssCodeElement = document.getElementById("cssCode");
    if (cssCodeElement) {
      cssCodeElement.innerText = cssCodeEl;
    }
  });
  return (
    <section className="section-css">
      <div className="section-left">
        <h1>CSS</h1>
        <p>The language for styling web pages</p>
        <a
          href="https://www.w3schools.com/css/default.asp"
          className="bg-green"
        >
          Learn CSS
        </a>
        <a href="https://w3schools.com/cssref/index.php" className="bg-black">
          CSS Reference
        </a>
        <a
          href="https://campus.w3schools.com/collections/certifications/products/css-certificate"
          className="bg-pink"
        >
          Get Certified
        </a>
      </div>
      <div className="section-right">
        <div className="editor-container">
          <h1>CSS Example :</h1>
          <div className="editor" id="cssCode"></div>
          <button className="editor-btn">Try it Yourself</button>
        </div>
      </div>
    </section>
  );
};
