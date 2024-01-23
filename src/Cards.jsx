import React from 'react';

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
  


const Cards = (props) => {
  return (
    <div className="big-container" >
      {students.map((item, index) => (
        <CardItem key={index} name={item.name} age={item.age} status={item.status} text={item.text} />
      ))}
    </div>
  );
};

const CardItem = (props) => {
  return (
    <section className=' flex justify-center m-[20px] '>
      <div className="Card h-[200px] w[25%] bg-[#0101] rounded-lg p-[20px]" >
        <div className="icon h-[60px] w-[60px] rounded-full bg-[#f9f7f4 ]"></div>
        <p className='text-xl'>{props.name || "Incognito"}</p>
        <p>{props.age || "None"}</p>
        <p>{props.status || "None"}</p>
        <p>{props.text || "None"}</p>
      </div>
      <style></style>
    </section>
  );
};

export default Cards;
