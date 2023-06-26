import './App.css'
import './AppDois.css'
import pesquisa from './assets/Search.png'
import car from './assets/car.png'
import ImageCarousel from './pages/slide';
import CityCarousel from './pages/citys/city'; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <>

    <body>
      <header>
        <div className='name'>
          <img src={car} alt="" />
          <p>CarRent</p> 
        </div>
        <div className='input'>
          <input type="text" placeholder='Buscar'/>
          <button id="pesquisar" className="pesquisar"><img src={pesquisa} alt="" /> </button>
        </div>

      </header>
      <nav>
        <button><a href="">Cidades</a></button>
        <button><a href="">Carros</a></button>
        <button><a href="">Modos de pagamento</a></button>
        <button><a href="">Duvidas</a></button>
      </nav>

      <div className="conheca">
          <p>Conheça nossos carros e onde nos encontrar</p>
        </div>

      <main>


        <div id="carsView" className="carsView">
          <div>
            <p className='h1'>Conheça nossos carros</p>
            <p>Viaje com conforto e segurança</p></div>

          <div className='imagens'>
            <ImageCarousel/>
          </div>

          <div >
            <button className="seeCars" id="seeCars">Veja todos os modelos</button>
          </div>

        </div>



 
          <div className='citiesDiv'>
            <p className='h1'>
              Quer saber onde nos encontrar ?
            </p>
            <div><p>Estamos em varias capitais</p></div>

            <div className='cityes'>
              <CityCarousel/>
            </div>

            <div>
              <button className="seelugar" id="seelugar">Veja todos os lugarres</button>
            </div>
          </div>





        



      </main>

      <footer>


      </footer>
    </body>
    </>
  )
}

export default App

