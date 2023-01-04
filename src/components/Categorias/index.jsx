import { Link } from "react-router-dom"

const Categorias = () => {
    return (
        <>
            <div className="containerCateg">
                <div><Link className="Category" to={"/jnonONJkJBKJBikBIUbKJHkjhkjhJKBhjgvcTRDeRTdfcghVJBKhNLKOPJhugfRTDERSwrStRYTVb/Acoples"}>·Acoples</Link></div>
                <div><Link className="Category" to={"/Acoples"}>·Mallas</Link></div>
                <div><Link className="Category" to={"/Acoples"}>·Mangueras Hidraulicas</Link></div>
            </div>
        </>
    )
}

export {Categorias}