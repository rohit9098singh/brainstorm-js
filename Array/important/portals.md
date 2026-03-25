```` Portals allow us to render a child component outside the parent DOM hierarchy, while still keeping it inside the React component tree. ```

import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("portal-root")
  );
}


### Whenever we use events like onClick or onChange in React, it does not directly use the browser’s native events. Instead, React uses a Synthetic Event, which is a wrapper around the original native event. 

### This is done to ensure cross-browser compatibility, provide a consistent event interface, and improve performance through event delegation.