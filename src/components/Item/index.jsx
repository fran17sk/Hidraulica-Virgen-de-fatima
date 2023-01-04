const Item = ({product}) => {
    console.log(product)
    return(
        <div id={product.Codigo}>
            <h2>{product.nombre}</h2>

        </div>
    )
}

export {Item}