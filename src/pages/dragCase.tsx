import React, { useState, useRef } from "react";
import "./app.less";

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const dragItem = useRef();
  const dropArea = useRef();

  const handleDragStart = (e) => {
    setIsDragging(true);
    dragItem.current = e.target;
    e.target.style.opacity = "0.5"; // 拖动时变半透明
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // 允许放置
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log("handleDrop->", dropArea);
    if (dropArea.current && dragItem.current && e.target === dropArea.current) {
      dropArea.current.appendChild(dragItem.current);
    }
    dragItem.current.style.opacity = "1"; // 恢复不透明
  };

  const handleDragEnd = (e) => {
    // 拖动结束，恢复元素显示
    e.target.style.opacity = "1";
    setIsDragging(false);
  };

  return (
    <div className="App">
      <div
        className="drag-item"
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          margin: "20px",
        }}
      >
        Drag me
      </div>
      <div
        className="drop-area"
        ref={dropArea}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "blue",
          margin: "20px",
          color: "white",
        }}
      >
        Drop here
      </div>
    </div>
  );
}

export default App;
