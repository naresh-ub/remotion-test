import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
 
interface LatexProps {
  expression: string;
  fontSize?: number;
}
 
export const Latex: React.FC<LatexProps> = ({ expression, fontSize = 24 }) => {
  const html = katex.renderToString(expression, {
    throwOnError: false,
  });
 
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        fontSize: `${fontSize}px`,
        textAlign: "center",
        color: "white",
      }}
    />
  );
};