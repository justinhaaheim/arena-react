// @flow

import React from "react";
import "./App.css";
import { useState, useCallback } from "react";

const QUALITIES = {
  alert: "Alert",
  appreciative: "Appreciative",
  attentive: "Attentive",
  clear: "Clear",
  compassionate: "Compassionate",
  courageous: "Courageous",
  creative: "Creative",
  empowering: "Empowering",
  enthusiastic: "Enthusiastic",
  flexible: "Flexible",
  focused: "Focused",
  generous: "Generous",
  gentle: "Gentle",
  grateful: "Grateful",
  joyous: "Joyous",
  kind: "Kind",
  loving: "Loving",
  open: "Open",
  present: "Present",
  receptive: "Receptive",
  supportive: "Supportive",
  truthful: "Truthful",
  vulnerable: "Vulnerable",
};

const MAX_QUALITIES = 5;

function App() {
  React.useEffect(() => {
    console.log("Yoooo!");
  });

  const [activeQualities, setActiveQualities] = useState<Array<string>>([]);
  console.log(activeQualities);

  const toggleQuality = useCallback(
    (word) => {
      if (activeQualities.includes(word)) {
        setActiveQualities(activeQualities.filter((w) => w !== word));
      } else {
        if (activeQualities.length < MAX_QUALITIES) {
          setActiveQualities(activeQualities.concat(word));
        }
      }
    },
    [activeQualities]
  );

  return (
    <div className="App">
      <div className="container-narrow">
        <div className="masthead">
          <h1 className="muted">The Coaching Arena</h1>
        </div>

        <div id="qualities">
          <h4>
            Qualities of Being{" "}
            <button
              className="btn btn-warning btn-small"
              id="clear_qualities"
              onClick={() => setActiveQualities([])}
            >
              Reset
            </button>
          </h4>
          <ul>
            {Object.values(QUALITIES).map((word) => (
              <li key={word}>
                <button
                  className={[
                    "btn",
                    activeQualities.includes(word) ? "btn-primary" : null,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => toggleQuality(word)}
                >
                  {word}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div id="questions" className="clear">
          <h4>Arena Questions</h4>
          <ol>
            <li>
              Who am I willing to be in order to produce an extraordinary result
              out of this interaction?{" "}
              <em>
                (I am willing to be:{" "}
                {activeQualities.length === 0 ? (
                  <span id="qualities_selected">
                    <strong>Choose 5 from above</strong>
                  </span>
                ) : (
                  activeQualities.join(", ")
                )}
                )
              </em>
            </li>
            <li>
              Am I willing to systematically dismantle my structure of knowing?{" "}
              <em>(Choose 'Yes' or 'No')</em>
            </li>
            <li>
              Am I willing to be a demand for coaching?{" "}
              <em>(Choose 'Yes' or 'No')</em>
            </li>
            <li>
              Am I willing to guarantee that whoever coaches me will be
              successful? <em>(Choose 'Yes' or 'No')</em>
            </li>
          </ol>
        </div>

        <hr />
        <p>
          <a href="http://www.SetTheArena.com">www.SetTheArena.com</a>
        </p>

        <div className="footer">
          <p>
            Copyright &copy; 1997-
            <script>document.write(new Date().getFullYear());</script>{" "}
            <a href="https://acecoachtraining.com/">
              The Academy for Coaching Excellence
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
