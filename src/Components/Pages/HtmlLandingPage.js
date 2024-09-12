import React, { useEffect } from "react";
import "./HtmlLandingPage.css";

export const HtmlLandingPage = () => {
  const HTMLCODE = `
    <!DOCTYPE html>
    <html>
    <head>
    <title> HTML TUTORIAL </title>
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>
  `;
  useEffect(() => {
    const htmlCodeElement = document.getElementById("htmlCode");
    if (htmlCodeElement) {
      htmlCodeElement.innerText = HTMLCODE;
    }
  });
  return (
    <section className="section-html">
      <div className="section-left">
        <h1>HTML</h1>
        <p>The language for building web pages</p>
        <a
          href="https://www.w3schools.com/html/default.asp"
          className="bg-green"
        >
          Learn HTML
        </a>
        <a
          href="https://www.w3schools.com/videos/index.php"
          className="bg-yellow"
        >
          Video Tutorial
        </a>
        <a
          href="https://www.w3schools.com/tags/default.asp"
          className="bg-black"
        >
          HTML Reference
        </a>
        <a
          href="https://campus.w3schools.com/en-in/collections/certifications/products/html-certificate"
          className="bg-pink"
        >
          Get Certified
        </a>
      </div>
      <div className="section-right">
        <div className="editor-container">
          <h1>HTML Example :</h1>
          <div className="editor" id="htmlCode"></div>
          <button className="editor-btn">Try it Yourself</button>
        </div>
      </div>
    </section>
  );
};
