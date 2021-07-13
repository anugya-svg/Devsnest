import Card from './card'
import CardVal from './card_data'
import { useState } from 'react'
const Box=()=>{
    
    const [value,setValue]=useState(CardVal)
    // console.log(value)
    const CardComponents=value.map(values=>
        <Card key={values.id} title={values.title} detail={values.detail} setValue={setValue} index={values.id} game={value} checker={values.checker}/>
    )
    
    return (
        <div className="box">
            {CardComponents}
        </div>
    );
}
export default Box;