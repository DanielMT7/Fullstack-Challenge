import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import axios from 'axios'

import { baseURL } from '../../utils/constants'

import './Form.css'

function Form() {
  const [smartphoneData, setSmartphoneData] = useState({
    brand: '',
    model: '',
    capacity: '',
    release: ''
  })

  const navigate = useNavigate()

  const location = useLocation()
  const { smartphone } = location.state ?? {}

  useEffect(() => {
    if (smartphone) {
      setSmartphoneData(smartphone)
    }
  }, [smartphone])

  const handleChange = e => {
    const { name, value } = e.target
    setSmartphoneData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const addSmartphone = () => {
    if (smartphone) {
      axios
        .put(`${baseURL}/update/${smartphone._id}`, smartphoneData)
        .then(res => {
          console.log(res.data)

          navigate(-1)
        })
        .catch(error => {
          console.error('Erro ao atualizar o smartphone:', error)
        })
    } else {
      axios
        .post(`${baseURL}/save`, smartphoneData)
        .then(res => {
          console.log(res.data)

          setSmartphoneData({
            brand: '',
            model: '',
            capacity: '',
            release: ''
          })
        })
        .catch(error => {
          console.error('Erro ao enviar os dados:', error)
        })
    }
  }

  return (
    <div className="form_container">
      <h2>Celular</h2>
      <form className="form_group_container">
        <div className="form_group">
          <label htmlFor="brand">Marca:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={smartphoneData.brand}
            onChange={handleChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="model">Modelo:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={smartphoneData.model}
            onChange={handleChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="capacity">Memória:</label>
          <input
            type="text"
            id="capacity"
            name="capacity"
            value={smartphoneData.capacity}
            onChange={handleChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="release">Data de Lançamento:</label>
          <input
            type="text"
            id="release"
            name="release"
            value={smartphoneData.release}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="buttons_container">
        <Link to="/">
          <button className="red_hover" type="button">
            Cancelar
          </button>
        </Link>

        <button className="green_hover" type="button" onClick={addSmartphone}>
          Salvar
        </button>
      </div>
    </div>
  )
}

export default Form
