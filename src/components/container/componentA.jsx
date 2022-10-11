import React from "react";
import ComponentB from "../pure/componentB";
import { Contact } from "../../models/contact.class";

const ComponentA = () => {
  const infoContact = new Contact(
    "Pepito",
    "Gonzales",
    "pepito@gmail.com",
    true,
  );
  return (
    <div>
      <ComponentB contact={infoContact}></ComponentB>
    </div>
  );
};


export default ComponentA;
