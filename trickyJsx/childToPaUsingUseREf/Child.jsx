"use client";
import React, { forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} placeholder="Type something here..." />
    </div>
  );
});

export default Child;
