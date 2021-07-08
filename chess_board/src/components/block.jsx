const Board=()=>{
    let list=[];
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            
            list.push(<div className="block"></div>)
            
        }
    }
    return list;
}
export default Board;