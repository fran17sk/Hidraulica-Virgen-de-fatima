import { Item } from "../Item"
const ListContainer = ({list}) => {
    return (
        <div>
            {list.map(product=><Item product={product}/>)}
            
        </div>
    )
}

export {ListContainer}