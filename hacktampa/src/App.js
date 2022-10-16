
import Dropdown from './components/Dropdown.js';
import Table from './components/Table.js'

function App() {
  const options = [
    {value: "green", label: "Green" },
    {value: "blue", label: "Blue" },
    {value: "red", label: "Red" },
    {value: "yellow", label: "Yellow" },
    {value: "orange", label: "Orange" },
    {value: "pink", label: "Pink" },
    {value: "purple", label: "Purple" },
    {value: "grey", label: "Grey" },
  ];

  return (
    <div>
    <Table />
    <Dropdown placeHolder="Select..." options={options} />
    <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />
    </div>
    
  );
}

export default App;
