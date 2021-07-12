import Card from "./card"
function App (){
    return (
        <div className="container">
            <h1>Counter</h1>
            <div className="card">
            <Card key="1"/>
            <Card key="2"/>
            <Card key="3"/>
            <Card key="4"/>
            </div>
        </div>
    )
}
export default App