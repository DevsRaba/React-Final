import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [mensaje, setMensaje] = useState({
    nombre: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mensaje.nombre.length > 5) {
      alert(
        `Thanks ${mensaje.nombre}, we'll contact you asap at the email ${mensaje.email}`
      );
      setMensaje({
        nombre: "",
        email: "",
      });
    } else {
      alert("Please check the information provided again");
    }
  };

  return (
    <div>
      <form className="section" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={mensaje.nombre}
          onChange={(e) => setMensaje({ ...mensaje, nombre: e.target.value })}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          value={mensaje.email}
          onChange={(e) => setMensaje({ ...mensaje, email: e.target.value })}
        />

        <button>Send</button>
      </form>
    </div>
  );
};

export default Form;
