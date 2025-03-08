import { useEffect, useState } from "react";

const CursorShadow: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-shadow"
      style={{
        width: "0.5rem",
        height: "0.5rem",
        position: "fixed",
        borderRadius: "50%",
        pointerEvents: "none",
        top: `${cursorPos.y}px`,
        left: `${cursorPos.x}px`,
        backgroundColor: "transparent",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 10rem rgba(255, 255, 255, 1)",
      }}
    />
  );
};

export default CursorShadow;
