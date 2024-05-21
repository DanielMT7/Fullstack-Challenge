import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

import { baseURL } from '../../utils/constants'

import './Table.css'

function Table() {
  const [prevState, setPrevState] = useState(false)
  const [smartphones, setSmartphone] = useState([])

  const navigate = useNavigate()

  const changeSmartphone = smartphone => {
    navigate('/register', { state: { smartphone } })
  }

  useEffect(() => {
    axios.get(`${baseURL}/get`).then(res => {
      console.log(res.data)
      setSmartphone(res.data)
    })
  }, [prevState])

  const removeSmartphone = id => {
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then(res => {
        console.log(res)
        setPrevState(!prevState)
      })
      .catch(error => {
        console.error('Erro ao deletar smartphone:', error)
      })
  }

  return (
    <div className="tabela_container">
      <Link to="/register">
        <button className="green_hover">Criar Novo</button>
      </Link>

      <h2>Tabela de Smartphones</h2>
      <table className="tabela">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Capacidade de Memória</th>
            <th>Data de Lançamento</th>
            <th>Alterar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {smartphones.map(smartphone => (
            <tr key={smartphone._id}>
              <td data-label="Marca">{smartphone.brand}</td>
              <td data-label="Modelo">{smartphone.model}</td>
              <td data-label="Capacidade de Memória">{smartphone.capacity}</td>
              <td data-label="Data de Lançamento">{smartphone.release}</td>
              <td data-label="Alterar">
                <button
                  className="yellow_hover"
                  onClick={() => changeSmartphone(smartphone)}
                >
                  Alterar
                </button>
              </td>
              <td data-label="Excluir">
                <button
                  className="red_hover"
                  onClick={() => removeSmartphone(smartphone._id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
