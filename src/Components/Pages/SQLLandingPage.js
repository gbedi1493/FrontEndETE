import React, { useEffect } from "react";
import "./SQLLandingPage.css";

export const SQLLandingPage = () => {
  const sqlCode = `
    SELECT * FROM Customers
    WHERE Country='Mexico';     
  `;
  useEffect(() => {
    const sqlCodeEl = document.getElementById("sqlCode");
    if (sqlCodeEl) {
      sqlCodeEl.innerText = sqlCode;
    }
  });
  return (
    <section className="section-sql">
      <div className="section-left">
        <h1>SQL</h1>
        <p>A language for accessing databases</p>
        <a
          href="https://www.w3schools.com/sql/default.asp"
          className="bg-green"
        >
          Learn SQL
        </a>
        <a
          href="https://www.w3schools.com/sql/sql_ref_keywords.asp"
          className="bg-black"
        >
          SQL Reference
        </a>
        <a
          href="https://campus.w3schools.com/en-in/collections/certifications/products/sql-certificate"
          className="bg-pink"
        >
          Get Certified
        </a>
      </div>
      <div className="section-right">
        <div className="editor-container">
          <h1>SQL Example :</h1>
          <div className="editor" id="sqlCode"></div>
          <button className="editor-btn">Try it Yourself</button>
        </div>
      </div>
    </section>
  );
};
