import React from "react";
import "./Footer.scss";

export default function Footer({ author, year }: any): JSX.Element {
  return (
    <footer>
      <p className="footer-text">
        Made By {author} {year}
      </p>
    </footer>
  );
}
