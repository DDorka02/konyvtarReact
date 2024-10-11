import "./App.css";
import Konyv from "./komponensek/Konyv.js";
import { adatLista } from './adatok.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Könyváruház</h1>
        </header>
        <main className="App-main">
          <div className="fokonyv">
            <h3>Könyvek</h3>
            <div className="kiemelt">
            <Konyv adat={{ szerző:"Leiner Laura", alt:"Iskolák országos versenye"}} key={0} />
            </div>
            <p>Leírás leírás leírás</p>
        </div>
        <div className="konyvek">
            {adatLista.map((elem,index)=> {
              return(<Konyv adat={elem} key={index}/>)
            })}
          </div>
        </main>
        <footer>
          <p>Dobszay Dorka</p>
        </footer>
    </div>
  );
}

export default App;
