import React, { useEffect } from "react";
import styles from "./cursoranimation.module.css";

export default function CursorAnimation() {
  return (
    <div>
      <div id="page" className="site">
        <canvas className="banner_canvas" id="canvas_banner"></canvas>
      </div>
    </div>
  );
}
