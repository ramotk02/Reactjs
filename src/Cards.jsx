import React, { useState } from "react";
import pic from "./assests/pic/Logo.png";
import Button from "./Button";

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
  {
    name: "Yassine",
    age: 25,
    status: "Teacher",
    text: "ggjierfv ghuerighurehogfr greufio g eergurwi greuwigoeo greuger egergiopfsg ueor vjfgve",
  },
  {
    name: "",
    age: 20,
    status: "",
    text: "ggjierfv ghuerighurehogfr greufio g eergurwi greuwigoeo greuger egergiopfsg ueor vjfgve",
  },
];

// const Cards = () => {
//   const [firstName, setFirstName] = useState("Omar");

//   const handleClick = () => {
//     setFirstName("Rashid");
//   };

//   return (
    
// <div>
//   <div className="big-container grid grid-cols-3">
//       {students.map((item) => (
//         <CardItem
//           key={item.name} 
//           name={item.name}
//           age={item.age}
//           status={item.status}
//           text={item.text}
//         />
//       ))}
//       {/* <CardItem name={firstName}/> */}
//   </div>
//       {/* <Button handleClick={handleClick} /> */}
//       </div>
//   );
// };

const CardItem = ({ name, age, status, text, children }) => {
  return (
    <section className="flex justify-center m-[20px]">
      <div className="Card h-[200px] bg-[#0101] rounded-lg p-[10px]">
        <div className="icon h-[60px] w-[60px] rounded-full bg-[#f9f7f4]">
          <img src={pic} alt="gmc-pic" />
        </div>
        <p className="text-xl">{name || "Incognito"}</p>
        <p>{children}</p>
        <p>{age || "None"}</p>
        <p>{status || "None"}</p>
        <p>{text || "None"}</p>
      </div>
      <p>TEST</p>
    </section>
  );
};

// export default Cards;
