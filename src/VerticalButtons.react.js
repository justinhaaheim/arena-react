// @flow

import React from "react";
import "./VerticalButtons.react.scss";
import Button from "react-bootstrap/Button";

type Props = {|
  words: $ReadOnlyArray<string>,
  fillLength: number,
|};

function VerticalButtons({ words, fillLength }: Props): React.MixedElement {
  // const fillerArray = [...Array(fillLength - words.length)].map((_) => "(select from above)");
  // const wordsWithFill = words.concat(fillerArray);
  const wordsWithFill = words;

  // console.log({ words, fillerArray });

  console.log({ fillLength, wordsLength: words.length });

  return (
    <ul className="verticalButtons-list">
      {wordsWithFill.map((word, index) => (
        <li key={index}>
          <Button children={word} variant={"outline-primary"} disabled={true} />
        </li>
      ))}
      {wordsWithFill.length < fillLength && (
        <li>
          <strong>
            Select {fillLength - wordsWithFill.length} more{" "}
            {fillLength - wordsWithFill.length > 1 ? "qualities" : "quality"}{" "}
            from the list above
          </strong>
        </li>
      )}
    </ul>
  );
}

export default VerticalButtons;
