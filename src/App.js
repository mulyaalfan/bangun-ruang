import './App.css';
import React, { useState } from "react";
import AmbilNilai from './AmbilNilai';
import Rumus from './Rumus';



function App() {

    const [sisi, setSisi] = useState("")
    const [Luas, setLuas] = useState("")
    const [Volume, setVolume] = useState("")
    const rubahSisi = (event) => {
        setSisi(event.target.value)
    }
function Hitung(){
    setLuas(6 * Math.pow(sisi,2))
    setVolume(Math.pow(sisi,3))
    // const Luas = 6 * sisi**2
    // const Volume = sisi**3
}

    console.log(`sisi : ${sisi}`)

    return (
      <div className="App">
        <p class = "Jenis">KUBUS</p>
        <p> Masukkan Sisi (s) (cm): </p>
        <input type="text"
            onChange={rubahSisi} id="in_s">
        </input>
        <AmbilNilai 
            sisiProps = {sisi}
        />
        <p>
            <button onClick =  {Hitung}> HITUNG </button>
        </p>
        <Rumus
            LuasProps = {Luas}
            VolumeProps = {Volume}
        />
        
        {/* <p class = "Hasil">Luas Permukaan : {Luas} cm<sup>2</sup></p>
        <p class = "Hasil">Volume : {Volume} cm<sup>3</sup></p> */}
      </div>
  );
}
  
export default App;
