import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.EmojiSymbol}>
          {props.EmojiSymbol}
        </span>
        <span>{props.EmojiName}</span>
      </dt>
      <dd>{props.EmojiDefinition}</dd>
    </div>
  );
}
export default Entry;
