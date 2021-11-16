import React from "react";

const Inputs = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
   props.setNameView(props.name)
   props.setAgeView(props.age);
   props.setHobbiesView(props.hobbies);
  };

  return (
    <div>
      <input
        name="name"
        placeholder="name"
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        value={props.name}
      />
      <input
        placeholder="age"
        onChange={(e) => props.setAge(e.target.value)}
        type="text"
        value={props.age}
      />
      <input
        placeholder="hobbies"
        onChange={(e) => props.setHobbies(e.target.value)}
        type="text"
        value={props.hobbies}
      />
      <button  onClick={handleSubmit} type="submit">Submit</button>
    </div>
  );
};

export default Inputs;
