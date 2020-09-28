// @flow

import React from "react";
import "./App.scss";
import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import ls from "local-storage";
import Button from "react-bootstrap/button";

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
  const [activeQualities, setActiveQualities] = useState<Array<string>>([]);

  // Load qualities on initial load
  useLayoutEffect(() => {
    const qualities = ls.get("activeQualities");
    if (qualities != null && qualities.length > 0) {
      setActiveQualities(qualities);
    }
  }, []);

  useEffect(() => {
    // TODO: Throttle this?
    ls.set("activeQualities", activeQualities);
  }, [activeQualities]);

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

  const isMaxQualities = activeQualities.length >= MAX_QUALITIES;

  return (
    <div className="App">
      <div className="container-narrow">
        <div className="masthead">
          <h1 className="muted">The Coaching Arena</h1>
        </div>

        <div id="qualities">
          <h4>
            Qualities of Being{" "}
            <Button
              variant="warning"
              size="sm"
              id="clear_qualities"
              onClick={() => setActiveQualities([])}
            >
              Reset
            </Button>
          </h4>
          <ul>
            {Object.values(QUALITIES).map((word) => {
              const isActive = activeQualities.includes(word);
              return (
                <li key={word}>
                  <Button
                    variant={isActive ? "primary" : "light"}
                    onClick={() => toggleQuality(word)}
                    disabled={isMaxQualities && !isActive}
                    size="sm"
                  >
                    {word}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>

        <div id="questions">
          <h4>Arena Questions</h4>
          <ol>
            <li>
              Who am I willing to be in order to produce an extraordinary result
              out of this interaction?{" "}
              <em>
                (I am willing to be:{" "}
                <span id="qualities_selected">
                  {activeQualities.join(", ")}
                  {!isMaxQualities && (
                    <strong>
                      {" "}
                      — Choose {MAX_QUALITIES - activeQualities.length} more{" "}
                      {MAX_QUALITIES - activeQualities.length > 1 ? "qualities" : "quality"}{" "}
                      from above
                    </strong>
                  )}
                </span>
                )
              </em>
            </li>
            <li>
              Am I willing to systematically dismantle my structure of knowing?{" "}
              <em>('Yes' or 'No')</em>
            </li>
            <li>
              Am I willing to be a demand for coaching?{" "}
              <em>('Yes' or 'No')</em>
            </li>
            <li>
              Am I willing to guarantee that whoever coaches me will be
              successful? <em>('Yes' or 'No')</em>
            </li>
          </ol>
        </div>

        <hr />
        <p>
          <a href="http://www.SetTheArena.com">www.SetTheArena.com</a>
        </p>

        <div className="footer">
          <p>
            Copyright &copy; 1997-{new Date().getFullYear()}{" "}
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
