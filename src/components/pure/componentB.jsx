import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from "../../models/contact.class"


const ComponentB = ({contact}) => {
  return (
    <div>
      <p>Nombre: {contact.nombre}</p>
      <p>Apellido: {contact.apellido}</p>
      <p>Correo: {contact.email}</p>

      <div>
        <span>
          Estado: {contact.conectado ? "Contacto En Linea" : "Contacto No Disponible"}
        </span>
      </div>
    </div>
  );
};


ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired
};


export default ComponentB;