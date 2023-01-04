import { Header } from "../Header"
import { ListContainer } from "../ListContainer"

const Acoples = (listProduct) => {
    console.log(listProduct.list.filter(element=>element.Categoria=="Acople"))
    return (
        <>
        <Header/>
        <ListContainer list={listProduct.list.filter(element=>element.Categoria=="Acople")}/>
        </>
    )
}

export {Acoples}