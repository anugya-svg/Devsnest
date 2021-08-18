import "bootstrap/dist/css/bootstrap.min.css"
import { useState,useEffect } from "react";
const App=()=>{
const [place,setPlace]=useState("")
const [placeData,setPlaceData]=useState("")
const handleClick=()=>{

fetch(`https://api.weatherapi.com/v1/current.json?key=8f6a7603b7b34d7fa80180852211708&q=${place}`)
.then((res)=>res.json())
.then((data)=>{
    setPlace("")
setPlaceData(data)
})

}
return (
<div className="app">
    <div className="container">
        <div className="row">
            <div className="col-12 form">
                <input onChange={(e)=>{
                setPlace(e.target.value)
                }} value={place} placeholder="Enter Your City"/>
                <button className="btn btn-secondary" onClick={handleClick}>Submit</button>
            </div>
            <div className="offset-md-4 col-12 col-md-4">
                <div className="card">
                    {placeData.location ? (
                    <div>
                        <img src={placeData.current.condition.icon} alt="icon" />
                        <h2 className="temp">{placeData.current.temp_c}°</h2>
                        <h6 className="detail">{placeData.current.condition.text}</h6>
                        <h2 className="place">
                            {placeData.location.name}
                        </h2>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="extra">Wind</div>
                                    <div>
                                    <span className="digit">{placeData.current.wind_kph}</span>
                                         <span className="val">Kph</span > </div>
                                </div>
                                <div className="col">
                                    <div className="extra">Humidity</div>
                                    <div>
                                        <span className="digit">{placeData.current.humidity}</span>
                                        <span className="val">%</span > </div>
                                </div>
                                <div className="col">
                                    <div className="extra">Precipitation</div>
                                    <div>
                                    <span className="digit">{placeData.current.precip_in}</span>
                                        <span className="val">%</span > </div>
                                </div>
                            </div>
                        </div>
                    </div> ) : (<h2>Place Not Found</h2>)}

                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default App;