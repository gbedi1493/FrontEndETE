import React, { useEffect } from "react";
import "./PythonLandingPage.css";

export const PythonLandingPage = () => {
  const pythonCode = `
  if 5 > 2:
  print("Five is greater than two!")
  `;
  useEffect(() => {
    const pythonCodeEl = document.getElementById("pythonCode");
    if (pythonCodeEl) {
      pythonCodeEl.innerText = pythonCode;
    }
  });
  return (
    <section className="section-python">
      <div className="section-left">
        <h1>Python</h1>
        <p>A popular programming language</p>
        <a
          href="https://www.w3schools.com/python/default.asp"
          className="bg-green"
        >
          Learn Python
        </a>
        <a
          href="https://www.w3schools.com/python/python_reference.asp"
          className="bg-black"
        >
          Python Reference
        </a>
        <a
          href="https://campus.w3schools.com/collections/certifications/products/python-certificate"
          className="bg-pink"
        >
          Get Certified
        </a>
      </div>
      <div className="section-right">
        <div className="editor-container">
          <h1>Python Example :</h1>
          <div className="editor" id="pythonCode"></div>
          <button className="editor-btn">Try it Yourself</button>
        </div>
      </div>
    </section>
  );
};
