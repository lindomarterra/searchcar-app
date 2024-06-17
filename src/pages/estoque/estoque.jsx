import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import './estoque.css'
import { BiSearch } from 'react-icons/bi'
import { carInfo } from '../../data/car'
import Card from '../../components/card/card'
import Pagination from '../../components/pagination/pagination'

const Estoque = () => {
  /* creating pagination  */

  const limit = 9

  const [cards, setCards] = useState(null)
  const [skip, setSkip] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const searchCards = (skip, end) => {
      return carInfo.slice(skip, end)
    }
    setCards(searchCards(skip, skip === 0 ? 1 * limit : skip * limit))
  }, [skip])

  const searchCar = (searchedText) => {
    const resultCars = carInfo.filter((text) =>
      text.modelo.includes(searchedText)
    )

    setCards(
      resultCars.length > limit ? resultCars.slice(0, limit) : resultCars
    )
  }

  return (
    <>
      <Navbar />

      <div className="est-container">
        <div className="est-content">
          <div className="est-banner">
            <h1>Estoque</h1>
            <h2>
              Carros selecionados pelo nosso time para garantir <br />
              uma ótima compra do seu usado.
            </h2>
            <div className="est-search-content">
              <input
                type="text"
                id="txt-search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <BiSearch onClick={() => searchCar(search)} />
            </div>
          </div>
          <div className="est-vitrine">
            {cards /* unlike null */ &&
              cards.map((item, index) => {
                const car = JSON.parse(JSON.stringify(item))
                return <Card key={index} item={car} />
              })}
          </div>

          <div className="est-vitrine-pagination">
            <Pagination
              limit={limit} /* PROPS */
              total={carInfo.length}
              skip={skip}
              setSkip={setSkip}
            />
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
export default Estoque
