import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./BlinkingCursor.css";

const TypingHeadingWithCursor = (variant) => {
  const [displayText, setDisplayText] = useState("");
  const text = "Immersive Digital Experiences Through Data";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval); // Clear the interval when the text is fully displayed
      }
    }, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <Typography
        maxWidth="md"
        variant={variant}
        sx={{ display: "inline-block", fontWeight: "bold", color: "#fff" }}
      >
        {displayText}
        <span variant={variant} className="blinking-cursor">
          |
        </span>
      </Typography>
    </div>
  );
};

export default TypingHeadingWithCursor;
