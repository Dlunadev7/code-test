import React from "react";

import "./form.css";

export const Form = () => {
  return (
    <form className="main__form">
      <div className="main__form__container">
        <label className="main__form__label">
          Nombre
          <input
            className="main__form__input"
            type="text"
            placeholder="Person"
            required
          />
        </label>
        <label className="main__form__label">
          Descripción
          <input
            className="main__form__input"
            type="textarea"
            placeholder="Tabla usada para x y z"
            required
          />
        </label>
      </div>
    </form>
  );
};
