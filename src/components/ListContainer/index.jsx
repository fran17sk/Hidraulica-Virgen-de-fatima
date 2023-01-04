import { useEffect } from "react"
import { Item } from "../Item"
const ListContainer = ({list}) => {
    
    return (
        <div className="container">
            <div className="ItemDiv">
                <h1>Acoples</h1>
            </div>
            {list.map(product=><Item product={product}/>)}
            
        </div>
    )
}

export {ListContainer}