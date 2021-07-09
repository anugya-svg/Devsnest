const Card=(props)=>{
    const {title,detail}=props;
    return (
        <div className="card">
            <h2>{title}</h2>
            <h4>{detail}</h4>
        </div>
    )
}
export default Card;