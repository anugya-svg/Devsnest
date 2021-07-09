const Board=()=>{
    let list=[];
    for(let i=0;i<8;i++)
    {
        for(let j=0;j<8;j++)
        {
            if(i%2===0)
            list.push(<div className="black"></div>)
            else
            list.push(<div className="white"></div>)
            
        }
    }
    return list;
}
export default Board;