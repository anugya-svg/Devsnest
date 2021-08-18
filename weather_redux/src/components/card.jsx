import {useSelector} from "react-redux"
import Day from "./days"
const Card=()=>{
    const placeData=useSelector((state)=>state.placeData)
    const theme=useSelector((state)=>state.toggle)
    return(
        <div className="offset-md-4 col-12 col-md-4">
            <div className={theme ?"card-dark" :"card"}>
                {placeData.location ?(
                    <div>
                        <div className={theme ?"name-dark":"name"}>{placeData.location.name}</div>
                        <div className="country">{placeData.location.country}</div>
                        <div className="mini"><span className="temp">{placeData.current.temp_c}</span> 
                        <img src={placeData.current.condition.icon} alt="" /></div>
                        <div className={theme ?"detail-dark" :"detail"}>{placeData.current.condition.text}</div>
                        <hr className={theme ?"dark" :"light"}></hr>
                        <div className="container">
                            <div className="row">
                                <Day/>
                            </div>
                               
                        </div>
                        </div>
                    
                ):( <div className={theme?"dark":"light"}>Place Not Found</div> )
                }
               
            </div>
        </div>
    )
}
export default Card;