import React from "react";
import "./Footer.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

export default function Footer() {
  return (
    <footer className="footer_main">
      <div className="footer_sections">
        <div className="footer_item">
          <b>Service & contact</b>
        </div>
        <div className="footer_item">
          <span>
            <PersonIcon />
          </span>
          <p>
            Snel regelen in je account Volg je bestelling, betaal facturen of
            retourneer een artikel.
          </p>
        </div>
        <div className="footer_item">
          <span>
            <ForumIcon />
          </span>
          <p>We helpen je graag. Onze klantenservice is dag en nacht open.</p>
        </div>
      </div>
    </footer>
  );
}
