import './App.css';
import React, { useState } from "react";
import AmbilNilaiBola from './AmbilNilaiBola';
import Rumus from './RumusBola';

function Bola() {

    const [r, setR] = useState("")
    const [Luas, setLuas] = useState("")
    const [Volume, setVolume] = useState("")
    const rubahR = (event) => {
        setR(event.target.value)
    }

    function Hitung() {
        let phi 
        if (r%7 === 0 ) {
            phi = 22/7
        }
        else {
            phi = 3.14
        }
        setLuas(4 * phi * r **2)
        setVolume(4/3 *phi * r ** 3)
    }
    
    console.log(`jari-jari : ${r}`)
    return (
      <div className="App">

        <p class = "Jenis">BOLA </p>
        <p> Masukkan Jari-jari (r) (cm): </p>
        <input type="text"
            onChange={rubahR} id="in_r">
        </input>
        
        <AmbilNilaiBola 
            rProps = {r}
        />

        <button id="myBtn" onClick =  {Hitung}> HITUNG </button>
        
        <Rumus
            LuasProps = {Luas}
            VolumeProps = {Volume}
        />
      </div>
  );
}
  
export default Bola;