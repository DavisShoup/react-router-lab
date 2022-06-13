import stockArr from "../data.json"
import { Link } from "react-router-dom"


const StockPrice = (props) => {
    const symbol = props.match.params.symbol;
    const stockData = stockArr.find(data => data.symbol === symbol);
      return(
        <div className="stock-price">
            <h2>{stockData.name} - ({stockData.symbol})</h2>
            <p>${stockData.lastPrice}</p>
            <Link to={`/stocks`}>
            <button>Back to Stocks</button>
            </Link>
        </div>
    )
}

export default StockPrice;