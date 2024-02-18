import React from "react";
import rezeption from "../img/rezeption3.jpg";

export const Features = (props) => {
  return (
    <div id="features" style={{ width: "100%" }}>
      <div
        className="container"
        style={{ width: "100%", padding: "0", marginTop: "0" }}
      >
        <div className="col-12">
          <img
            src={rezeption}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
