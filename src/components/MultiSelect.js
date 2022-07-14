import React, { useEffect, useState } from "react";

const MultiSelect = ({ options, setResult }) => {
  const [selectedOptions, setSelectedOptions] = useState(() => {
    let optionConditions = [];
    for (let i = 0; i < options.length; i++) {
      optionConditions.push(false);
    }
    return optionConditions;
  });

  useEffect(
    () => {
      let newResult = [];
      options.forEach((value, index) => {
        if (selectedOptions[index]) {
          newResult.push(value);
        }
      });
      setResult(newResult);
    }, // eslint-disable-next-line
    [selectedOptions]
  );

  const showOptions = () => {
    return options.map((value, index) => {
      return (
        <label
          style={{
            backgroundColor: "#e0e0e0",
            display: "inline-block",
            padding: "0.5rem 0.8rem",
            margin: "0rem 0.5rem",
          }}
          key={index}
          htmlFor={"option-" + index}
        >
          <input
            id={"option-" + index}
            type="checkbox"
            checked={selectedOptions[index]}
            value={index}
            onChange={() => {
              let newSelectedOptions = [...selectedOptions];
              newSelectedOptions[index] = !selectedOptions[index];
              setSelectedOptions(newSelectedOptions);
            }}
          />
          {value}
        </label>
      );
    });
  };

  return <div>{showOptions()}</div>;
};

export default MultiSelect;
