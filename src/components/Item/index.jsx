const Item = ({product,dolar}) => {
    
    return(
        <div id={product.Codigo} className="ItemDiv">
            <div className="flexDataItem1">
                <h2 className="nameprod">{product.nombre}</h2>
                <h3 className="codprod">Cod:{product.Codigo}</h3>
                <h3 className="modprod">Modelo:{product.Modelo}</h3>
                <h3 className="priceprod">{product.Precio}USD</h3>
            </div>
            <div className="flexDataItem1">
                <h3 className="infoprod">DESCRIPCION: {product.Descrpcion}</h3>
                <h3 className="pricearsprod">{parseInt(product.Precio*dolar)} Ars</h3>
            </div>
            

        </div>
    )
}

export {Item}