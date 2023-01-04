import { useState } from "react"
import { Item } from "../Item"
const ListContainer = ({list}) => {
    const [dolar,setDolar] = useState(360)
    const actdolar = (e) =>{
        setDolar(e.target.value)
    }
    return (
        <div className="container">
            <div className="ItemDiv TitleCat">
                <h1>Acoples</h1>
                <div>
                    <label htmlFor="">Valor del dolar: </label>
                    <input type="number" placeholder={dolar} onChange={actdolar}/>
                </div>
            </div>
            {list.map(product=><Item product={product} dolar={dolar}/>)}
            
        </div>
    )
}

export {ListContainer}