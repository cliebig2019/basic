import React from "react";
import rezeption from "../img/rezeption2.jpg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 intro-text"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingBottom: "60px",
                  width: "100%",
                }}
              >
                <span>
                  {" "}
                  This is a site purely for demonstration, it is not the
                  companies real site
                </span>
                <h1>
                  <span>Steuerberatung und Wirtschaftsprüfung</span>
                </h1>
                <p>
                  Die BASIC GmbH Wirtschaftsprüfungsgesellschaft berät seit über
                  15 Jahren am Standort Berlin-Wilmersdorf branchenübergreifend
                  und bundesweit Unternehmerinnen und Unternehmer - gern auch
                  mit internationalem Background - in allen
                  betriebswirtschaftlichen und steuerlichen Fragen.
                </p>
                <p>
                  Wir betreuen auch Ihre steuerliche Betriebsprüfung oder
                  verteidigen Sie im Steuerstrafverfahren.
                </p>
                <p>Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch!</p>
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefon
                  </span>{" "}
                  <a href="tel:+493086391777">+49 (0) 30 863 91 777</a>
                  <br></br>
                  Montag - Donnerstag: 9:00 - 15:00 Uhr<br></br>Freitag: 9:00 -
                  13:00 Uhr
                </p>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Mehr erfahren
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
