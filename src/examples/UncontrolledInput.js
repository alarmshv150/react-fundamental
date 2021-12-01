import { useRef } from "react";

export const UncontrolledInput = () => {
    /* accessing a DOM element hook*/
  const inputRef = useRef();
  console.log(inputRef.current.value);
  return (
    <>
      <input ref={inputRef} type="text" placeholder="Описание поста" />
    </>
  );
};

