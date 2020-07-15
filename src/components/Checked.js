import React, { useState } from "react";
function Checked(props) {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(!checked)}
      />{" "}
      <span style={{ backgroundColor: "red" }}>
        {" "}
        {checked ? "completed" : null}
      </span>
    </div>
  );
}
export default Checked;
