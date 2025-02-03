import React, { useState } from "react";
import { Player } from "@remotion/player";
import { MyComposition } from "../remotion/TrigVideoInteractive/Composition";

const Element_TrigVideoInteractive: React.FC = () => {
  const [graphType, setGraphType] = useState("cos");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "100%",
        backgroundColor: "grey",
        color: "white",
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Interactive Graph Animation</h2>

      {/* Remotion Player */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "900px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Player
          component={MyComposition}
          durationInFrames={500}
          compositionWidth={1280}
          compositionHeight={720}
          fps={60}
          controls
          inputProps={{ graphType }}
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
          // posterFillMode="composition-size" // Ensures the poster matches the video size
        />
      </div>

      {/* Dropdown below the video (left-aligned) */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start", // Left-align dropdown
          alignItems: "center",
          width: "80%",
          maxWidth: "900px",
          marginTop: "20px",
        }}
      >
        <label style={{ fontSize: "18px", marginRight: "10px" }}>
          Choose Graph Type:
        </label>
        <select
          value={graphType}
          onChange={(e) => setGraphType(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
            color: "#000",
          }}
        >
          <option value="sin">Sine (sin)</option>
          <option value="cos">Cosine (cos)</option>
          <option value="tan">Tangent (tan)</option>
        </select>
      </div>
    </div>
  );
};

export default Element_TrigVideoInteractive;
