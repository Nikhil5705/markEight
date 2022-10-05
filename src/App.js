import { useState } from "react";
import "./styles.css";

var database = {
  "😏": "Smirking",
  "😒": "Unamused",
  "🤔": "Thinking",
  "😉": "Winking",
  "🙂": "Smiling",
  "😴": "Sleeping",
  "🤧": "Sneezing",
  "😕": "Confused",
  "😲": "Astonished",
  "😨": "Fearful",
  "😰": "Anxious",
  "😭": "Crying"
};

var emojisWeHave = Object.keys(database);

export default function App() {
  var [show, setshow] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;

    var show = database[userInput];
    if (show === undefined) {
      show = "We do not have this in our Database";
    }
    setshow(show);
  }
  function emojiClickHandler(emoji) {
    var show = database[emoji];
    setshow(show);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#404040" }}>Emoji App</h1>
      <input onChange={inputHandler}></input>
      <div
        style={{
          color: "#404040",
          fontSize: "1.5rem",
          fontWeight: "bold",
          padding: "0.5rem"
        }}
      >
        {show}
      </div>

      <h3 style={{ color: "#404040" }}>Emojis that we have in our Database</h3>
      {emojisWeHave.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
