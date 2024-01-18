import "./App.css";

const students = [
  {
    name: "Omar",
    age: 20,
    status: "Student",
    text: "ggjierfv ghuerighurehogfr greufio g eergurwi greuwigoeo greuger egergiopfsg ueor vjfgve",
  },
  {
    name: "Rashid",
    age: 21,
    status: "Student",
    text: "ggjierfv ghuerighurehogfr greufio g eergurwi greuwigoeo greuger egergiopfsg ueor vjfgve",
  },
  {
    name: "Hafsa",
    age: 24,
    status: "Student",
    text: "ggjierfv ghuerighurehogfr greufio g eergurwi greuwigoeo greuger egergiopfsg ueor vjfgve",
  },
  {
    name: "Meriem",
    age: 36,
    status: "Student",
    text: "ggjierfv ghuerighurehogfr greufio g eergurwi greuwigoeo greuger egergiopfsg ueor vjfgve",
  },
];

function Card(props) {
  return (
    <section>
      <div className="Card">
        <div className="icon"></div>
        <p>{props.name || "Inconito"}</p>
        <p> {props.age || "None"} </p>
        <p> {props.status || "None"}</p>
        <p>{props.text || "None"}</p>
      </div>
      <style></style>
    </section>
  );
}

function App() {
  return (
    <div className="big-container">
      {students.map((item) => (
        <Card name={item.name}  age={item.age} status={item.status} text={item.text} />
      ))}
    </div>
  );
}

export default App;
