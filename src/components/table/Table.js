import React from 'react'

import './table.css';

export const Table = ({name, type, description, constraints}) => {
  return (
    <div className="main__attributes">
      <hr />
      <span className="main__attributes__add">
        <h2 className="main__attributes__title">Atributos</h2>
        <button className="main__attributes__add__btn">
          Agregar +
        </button>
      </span>

      <table className="main__attributes__table">
        <tr className="main__attributes__table__group">
          <td className="main__attributes__table__field">{ name }</td>
          <td className="main__attributes__table__field">{ type }</td>
          <td className="main__attributes__table__field">{ description }</td>
          <td className="main__attributes__table__field">{ constraints }</td>
        </tr>
        <hr />
        <tr className="main__attributes__table__group">
          <td className="main__attributes__table__field">ID</td>
          <td className="main__attributes__table__field">
          <select className="main__atributes__table__select">
              <option className="main__atributes__table__option">Option</option>
              <option className="main__atributes__table__option">2</option>
              <option className="main__atributes__table__option">3</option>
              <option className="main__atributes__table__option">4</option>
            </select>
          </td>
          <td className="main__attributes__table__field">Atributo para xyz</td>
        </tr>
        <hr />
        <tr className="main__attributes__table__group">
          <td className="main__attributes__table__field">Celular</td>
          <td className="main__attributes__table__field">
          <select className="main__atributes__table__select">
              <option className="main__atributes__table__option">Char</option>
              <option className="main__atributes__table__option">2</option>
              <option className="main__atributes__table__option">3</option>
              <option className="main__atributes__table__option">4</option>
            </select>
          </td>
          <td className="main__attributes__table__field">Atributo para xyz</td>
        </tr>
        <hr />
      </table>
    </div>
  )
}
