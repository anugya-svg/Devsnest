import {useSelector} from "react-redux"
const Days=()=>{
    const placeData=useSelector((state)=>state.placeData)
    const theme=useSelector((state)=>state.toggle)

    let list=[]
    let title=["Today","Tomorrow"]
    for(let i=0;i<2;i++) { 
        list.push(
        <div className="col">
            <div className="title">{title[i]}</div>
            <div className="icon">
                <img src={placeData.forecast.forecastday[i].day.condition.icon} alt="" />
            </div>
            <div className={theme?"text_temp-dark":"text_temp"}>
            {placeData.forecast.forecastday[i].day.mintemp_c}°/
            {placeData.forecast.forecastday[i].day.maxtemp_c}°
            </div> 
        </div>)
    }
    return list;
}
export default Days;