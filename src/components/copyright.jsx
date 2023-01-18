import React from "react";
function CurrentYear() {
  const date = new Date();
  const ThisYear = date.getFullYear();

  return (
    <footer className="footer">
      <p>Coypright © {ThisYear} H.Clement</p>
    </footer>
  );
}
export default CurrentYear;
