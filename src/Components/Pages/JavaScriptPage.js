import React, { useEffect } from "react";
import "./JavaScriptPage.css";

export const JavaScriptPage = () => {
  const jscode = `
  <button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>
  `;
  useEffect(() => {
    const javaScriptCodeEl = document.getElementById("JavaScriptCode");
    if (javaScriptCodeEl) {
      javaScriptCodeEl.innerText = jscode;
    }
  });
  return (
    <section className="section-javascript">
      <div className="section-left">
        <h1>JavaScript</h1>
        <p>The language for programming web pages</p>
        <a href="https://www.w3schools.com/js/default.asp" className="bg-green">
          Learn JavaScript
        </a>
        <a
          href="https://www.w3schools.com/jsref/default.asp"
          className="bg-white"
        >
          JavaScript Reference
        </a>
        <a
          href="https://campus.w3schools.com/collections/certifications/products/javascript-certificate"
          className="bg-pink"
        >
          Get Certified
        </a>
      </div>
      <div className="section-right">
        <div className="editor-container">
          <h1>JavaScript Example :</h1>
          <div className="editor" id="JavaScriptCode"></div>
          <button className="editor-btn">Try it Yourself</button>
        </div>
      </div>
    </section>
  );
};
