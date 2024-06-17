import React from 'react' 
import './pagination.css'

const MAX_PAGES= 7
const QTD_MAX_ITEMS= (MAX_PAGES - 1) / 2 /* PAGA GARANTIR SEMPRE 3 A ESQUERDA E 3 A DIREITA */


const Pagination = (limit, total, skip, setSkip) =>{

    const currentPage= skip ? skip / limit + 1 : 1
    const totalPage= Math.ceil(total / limit)
    const firstPage= Math.max(currentPage - QTD_MAX_ITEMS, 1)

    return (
      <div className="pgn-container">
        <button>Anterior</button>

        {
        Array.from({length: Math.min(MAX_PAGES, totalPage)}).map((indice)=>(
            indice + firstPage
        )).map((item)=>(
            <button onClick={()=> setSkip(item - 1) * limit } > {item} </button>
        ))
        }

        <button>Próximo</button>
      </div>
    )
}
export default Pagination