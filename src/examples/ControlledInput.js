import { useState } from "react";

  /* Form data is handled by the state within the component. */
export const ControlledInput = () => {
  const value = useState("Текст в инпуте");
  return (
    <>
      <h1>{value}</h1>
      <input type="текст" value={value} onChange={(e) => e.target.value} />
    </>
  );
};

