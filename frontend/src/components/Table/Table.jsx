import './Table.css'

function Table() {
  // Estrutura base da tabela

  return (
    <div className="tabela_container">
      <button className="green_hover">Criar Novo</button>
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
          <tr>
            <td>Samsung</td>
            <td>Galaxy S24</td>
            <td>8GB</td>
            <td>01/01/2023</td>
            <td>
              <button className="yellow_hover">Alterar</button>
            </td>
            <td>
              <button className="red_hover">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>Iphone 15</td>
            <td>16GB</td>
            <td>01/01/2023</td>
            <td>
              <button className="yellow_hover">Alterar</button>
            </td>
            <td>
              <button className="red_hover">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
