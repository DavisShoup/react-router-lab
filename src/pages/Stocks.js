import { Link } from "react-router-dom"

const Stocks = ({name, symbol}) => {
    return(
        <div className="stock-names">
            <Link to={`/stocks/${symbol}`}>
                <h1>{name}</h1>
            </Link>
        </div>
    )
}

export default Stocks;