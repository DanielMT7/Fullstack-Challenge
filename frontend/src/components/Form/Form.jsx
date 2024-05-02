import React from 'react'
import './Form.css'

function Form() {
  // estruta inicial do form

  return (
    <div className="form_container">
      <h2>Celular</h2>
      <form className="form_group_container">
        <div className="form_group">
          <label htmlFor="marca">Marca:</label>
          <input type="text" id="marca" name="marca" />
        </div>
        <div className="form_group">
          <label htmlFor="modelo">Modelo:</label>
          <input type="text" id="modelo" name="modelo" />
        </div>
        <div className="form_group">
          <label htmlFor="memoria">Memória:</label>
          <input type="text" id="memoria" name="memoria" />
        </div>
        <div className="form_group">
          <label htmlFor="dataLancamento">Data de Lançamento:</label>
          <input type="text" id="dataLancamento" name="dataLancamento" />
        </div>
      </form>
      <div className="buttons_container">
        <button className="red_hover" type="submit">
          Cancelar
        </button>
        <button className="green_hover" type="submit">
          Salvar
        </button>
      </div>
    </div>
  )
}

export default Form
