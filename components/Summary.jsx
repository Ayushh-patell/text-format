import React from "react";

export default function Summary(props) {
  return (
    <>
      <div className="row">
        <h3>Text Summary</h3>
        <span className="col">{props.texts.length} Characters in your text</span>
        <span className="col">{props.texts.split(/\s+/).filter((element)=>{return element!==""}).length} Words in your text</span>
      </div>
    </>
  );
}
