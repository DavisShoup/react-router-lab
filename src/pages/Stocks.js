import { Link } from "react-router-dom"

const Stocks = ({name, symbol}) => {
    return(
        <Link to={`/stocks/${symbol}`}>
        <h1>{name}</h1>
        </Link>
    )
}

export default Stocks;