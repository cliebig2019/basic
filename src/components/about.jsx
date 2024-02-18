import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12 col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <img
              src="https://www.basic-wpg.eu/wp-content/uploads//2015/05/man_jil.jpg"
              className="img-responsive"
              alt=""
            />{" "}
            <p>Jürgen M. Liebig Diplom-Kaufmann Wirtschaftsprüfer</p>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Geschäftsführung</h2>
              <p>
                Nach der Ausbildung zum Bankkaufmann sowie einem
                betriebswirtschaftlichen Studium an der Freien Universität
                Berlin arbeitete Herr Liebig von 1990 bis 1996 bei einer der
                großen internationalen Wirtschaftsprüfungsgesellschaften.
              </p>
              <p>
                Im Jahre 1996 erfolgte seine Bestellung zum Wirtschaftsprüfer.
              </p>
              <p>
                Von 1996 bis 2005 war Herr Liebig – seit 2001 als Partner – in
                einer mittelständischen Sozietät von Wirtschaftsprüfern,
                Steuerberatern und Rechtsanwälten in Berlin tätig.
              </p>
              <p>
                Darüber hinaus war er seit 1999 Geschäftsführer der dieser
                Sozietät angeschlossenen Wirtschaftsprüfungsgesellschaft.
              </p>
              <p>
                Seit 2006 ist Herr Liebig Geschäftsführer der BASIC GmbH
                Wirtschaftsprüfungsgesellschaft.
              </p>
              <p>Sprachen: Deutsch und Englisch</p>
              <h3></h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li key={`steuerberaterverband`}>
                      Mitglied im Deutschen Steuerberaterverband e. V.
                    </li>
                    <img
                      style={{ width: "100%" }}
                      src="https://stbverband.de/upload/am090gnaffdts8iaio1acphld8f/1707915685726/Logo_Verband_2024_dark.png"
                    ></img>
                  </ul>
                </div>

                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li key={`steuerberaterverband`}>
                      Mitglied im Institut der Wirtschaftsprüfer
                    </li>
                    <img
                      style={{ width: "100%" }}
                      src="https://www.idw.de/Technische-Medien/idw-logo-red-data.svg"
                    ></img>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
