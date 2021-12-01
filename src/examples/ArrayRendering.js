export const ArrayRendering = () => {
  return (
    <ul>
      {["first", "second", "third"].map((item) => (
          /* key with a unique value is needed for efficient list rendering */
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
