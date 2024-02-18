import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GavelIcon from "@mui/icons-material/Gavel";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tätigkeiten</h2>
        </div>
        <div className="row">
          <div key={`kaktus`} className="col-md-4">
            {" "}
            <i className="fa fa-building"></i>
            <div className="service-desc">
              <h3>Unternehmen</h3>
              <div className="services-point">
                <div className="col-12">
                  <div className="list-style">
                    <ul>
                      <li key={`bbu`}>Beratung bei Unterbehmensgründung</li>
                      <li key={`fb`}>Finanzbuchhaltung</li>
                      <li key={`lg`}>Lohn- und Gehaltsabrechungen</li>
                      <li key={`eeur`}>
                        Erstellung von Einnahmen-Überschuss-Rechnungen
                      </li>
                      <li key={`eoj`}>
                        Erstellung und Offenlegung von Jahresabschlüssen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div key={`kaktus1`} className="col-md-4">
            {" "}
            <i className="fa fa-pencil"></i>
            <div className="service-desc">
              <h3>Erstellung</h3>
              <div className="services-point">
                <div className="list-style">
                  <ul>
                    <li key={`ese`}>Einkommensteuererklärungen</li>
                    <li key={`kse`}>Körperschaftsteuererklärungen</li>
                    <li key={`gse`}>Gewerbesteuererklärungen</li>
                    <li key={`use`}>Umsatzsteuererklärungen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div key={`kaktus2`} className="col-md-4">
            {" "}
            <i className="fa fa-gavel"></i>
            <div className="service-desc">
              <h3>Recht</h3>
              <div className="services-point">
                <div className="list-style">
                  <ul>
                    <li key={`fvsr`}>
                      Führen von steuerlichen Rechtsbehelfsverfahren
                      (Einsprüche)
                    </li>
                    <li key={`bssb`}>
                      Betreuung von steuerlichen und
                      sozialversicherungsrechtlichen Betriebsprüfungen
                    </li>
                    <li key={`vs`}>Verteidigung im Steuerstrafverfahren</li>
                    <li key={`pva`}>
                      Prüfungsberichte zur Vorlage bei der Ausländerbehörde
                    </li>
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
