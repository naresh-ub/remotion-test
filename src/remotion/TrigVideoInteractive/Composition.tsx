import { useCurrentFrame } from "remotion";
import { interpolate } from "remotion";
import { Latex } from "../Latex";

export const MyComposition: React.FC<{ graphType?: string }> = ({
  graphType = "cos",
}) => {
  const frame = useCurrentFrame();
  const width = 1280;
  const height = 720;
  const graphWidth = 600;
  const graphHeight = 300;
  const startX = width / 4; // X-axis starting point
  const startY = height - height / 4; // Y-axis starting point
  const amplitude = 50;
  const frequency = 0.05;
  const totalFrames = 300; // Total frames before stopping the movement

  // Function to compute y-value based on the selected graph type
  const computeY = (x: number) => {
    switch (graphType) {
      case "sin":
        return startY - amplitude * Math.sin(x * frequency);
      case "cos":
        return startY - amplitude * Math.cos(x * frequency);
      case "tan":
        return startY - amplitude * Math.tan(x * frequency) * 0.1; // Scale down tan to fit
      default:
        return startY;
    }
  };

  // Ensure dot stops moving at the end of the x-axis
  const progress = Math.min((frame / totalFrames) * graphWidth, graphWidth);
  const dotX = startX + progress;
  const dotY = computeY(progress);

  // Generate graph path up to the current progress
  const tracedPath = Array.from({ length: Math.floor(progress) }, (_, x) => {
    const y = computeY(x);
    return `${startX + x},${y}`;
  }).join(" ");

  // Camera control: Static at start, focus on dot at 2s (60 frames), remove focus at 6s (180 frames)
  const zoomFactor = interpolate(
    frame,
    [0, 60, 180, totalFrames], // Static, zoom at 2s, hold till 6s, back to static
    [1, 1, 2, 1], // Normal, normal, stronger zoom-in, back to normal
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const focusX = interpolate(
    frame,
    [0, 60, 180, totalFrames],
    [width / 2, width / 2, dotX, width / 2],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const focusY = interpolate(
    frame,
    [0, 60, 180, totalFrames],
    [height / 2, height / 2, dotY, height / 2],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div style={{ background: "#1E1E1E", width: "100%", height: "100%" }}>
      <svg
        width={width}
        height={height}
        viewBox={`${focusX - width / zoomFactor / 2} ${
          focusY - height / zoomFactor / 2
        } ${width / zoomFactor} ${height / zoomFactor}`}
      >
        {/* X-Axis */}
        <line
          x1={startX}
          y1={startY}
          x2={startX + graphWidth}
          y2={startY}
          stroke="white"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        {/* Y-Axis */}
        <line
          x1={startX}
          y1={startY}
          x2={startX}
          y2={startY - graphHeight}
          stroke="white"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />

        {/* Arrow Definition */}
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#E0E0E0" />
          </marker>
          <filter id="glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feFlood floodColor="gold" result="glowColor" />
            <feComposite
              in="glowColor"
              in2="coloredBlur"
              operator="in"
              result="softGlow"
            />
            <feMerge>
              <feMergeNode in="softGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Graph Path */}
        <polyline
          points={tracedPath}
          stroke="orange"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Moving Dot */}
        <circle
          cx={dotX}
          cy={dotY}
          r="5"
          fill="gold"
          filter="url(#glow)"
          stroke="#FFD700"
          strokeWidth="2"
        />

        {/* Labels using LaTeX */}
        <foreignObject
          x={width / 2 - 100}
          y={startY - graphHeight + 120}
          width={200}
          height={50}
        >
          <Latex expression={`y = \\${graphType}(x)`} fontSize={30} />
        </foreignObject>
        <foreignObject
          x={startX + graphWidth + 5}
          y={startY - 10}
          width={50}
          height={50}
        >
          <Latex expression="x" fontSize={24} />
        </foreignObject>
        <foreignObject
          x={startX - 20}
          y={startY - graphHeight - 50}
          width={50}
          height={50}
        >
          <Latex expression="y" fontSize={24} />
        </foreignObject>
        <foreignObject x={dotX - 10} y={dotY - 45} width={30} height={30}>
          <Latex expression="\delta" fontSize={24} />
        </foreignObject>
      </svg>
    </div>
  );
};