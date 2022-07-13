import { useState } from "react";
import MultiSelect from "./components/MultiSelect";

function App() {
  const [result, setResult] = useState<Array<string>>([]);
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
  ];
  return (
    <div className="App">
      <MultiSelect options={options} setResult={setResult} />
      <h2>Selected Options:</h2>
      <ul>
        {result.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
