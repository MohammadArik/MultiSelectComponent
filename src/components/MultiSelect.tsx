import React, { useEffect, useState } from "react";

const MultiSelect = ({
  options,
  setResult,
}: {
  options: Array<string>;
  setResult: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<boolean>>(() => {
    let optionConditions: Array<boolean> = [];
    for (let i = 0; i < options.length; i++) {
      optionConditions.push(false);
    }
    return optionConditions;
  });

  useEffect(() => {
    let newResult: Array<string> = [];
    options.forEach((value, index) => {
      if (selectedOptions[index]) {
        newResult.push(value);
      }
    });
    setResult(newResult);
  }, [selectedOptions]);

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
