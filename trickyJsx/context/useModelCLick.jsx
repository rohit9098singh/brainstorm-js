import { useEffect, useRef, useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener("mousedown", handleOutsideClick);

    // 🔒 disable background scroll
    document.body.style.overflow = "hidden";
  }

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);

    // 🔓 enable scroll back
    document.body.style.overflow = "auto";
  };
}, [isOpen]);


  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div
          ref={modalRef}
          style={{
            padding: "20px",
            background: "#fff",
            border: "1px solid #ccc",
            width: "300px"
          }}
        >
          <h3>Modal</h3>
          <p>Click outside to close</p>
        </div>
      )}
    </>
  );
}



