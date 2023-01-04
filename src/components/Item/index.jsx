const Item = ({product}) => {
    fetch("https://api-dolar-argentina.herokuapp.com/dolarblue")
    return(
        <div id={product.Codigo} className="ItemDiv">
            <div className="flexDataItem1">
                <h2 className="nameprod">{product.nombre}</h2>
                <h3 className="codprod">Cod:{product.Codigo}</h3>
                <h3 className="modprod">Modelo:{product.Modelo}</h3>
                <h3 className="priceprod">{product.Precio}USD</h3>
            </div>
            <div>
                <h3 className="infoprod">DESCRIPCION: {product.Descrpcion}</h3>
            </div>
            

        </div>
    )
}

export {Item}