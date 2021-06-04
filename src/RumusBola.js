import React from "react";

function Hasil (props){
    return (
        <div>
            <p class= "Hasil">Luas Permukaan : {props.LuasProps} cm<sup>2</sup></p>
            <p class= "Hasil">Volume : {props.VolumeProps} cm<sup>3</sup></p>
        </div>
    )
}
export default Hasil