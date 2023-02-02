import React from "react";
import "../App.css";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import CurrentYear from "./copyright";

function createEmoji(emoji) {
  return (
    <Entry
      key={emoji.id}
      EmojiSymbol={emoji.emoji}
      EmojiName={emoji.name}
      EmojiDefinition={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
      <CurrentYear />
    </div>
  );
}

export default App;
