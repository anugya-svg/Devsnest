import Card from './card'
const Box=()=>{
    return (
        <div className="box">
            <Card title="Pizza" detail="you have consumed 56 cals today"/>
            <Card title="Burger" detail="you have consumed 69 cals today"/>
            <Card title="Coke" detail="you have consumed 500 cals today"/>
            <Card title="Browne" detail="you have consumed 180 cals today"/>
            <Card title="Fried Rice" detail="you have consumed 90 cals today"/>
            <Card title="Lassania" detail="you have consumed 200 cals today"/>
            <Card title="Pani Puri" detail="you have consumed 10 cals today"/>
        </div>
    );
}
export default Box;