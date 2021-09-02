import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤓": "Nerd Face",
  "🤮": "Face Vomiting",
  "😰": "Anxious Face with Sweat",
  "😱": "Face Screaming in Fear",
  "😬": "Grimacing Face",
  "😮‍💨": "Face Exhaling",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😉": "Winking Face",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "👿": "Angry Face with Horns"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not available in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Emoji Machine!!</h1>

      <input onChange={emojiInputHandler}></input>

      <div> It's {meaning} </div>

      <h3> emojis we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
