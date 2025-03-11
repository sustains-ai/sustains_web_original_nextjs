import { useState } from "react";
import axios from "axios";

export default function StockData() {
    const [symbol, setSymbol] = useState("IBM");
    const [data, setData] = useState<any>(null);

    const fetchStockData = async () => {
        try {
            const response = await axios.get(`/api/stock-data-time-series-daily?symbol=${symbol}`);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching stock data:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter stock symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            />
            <button onClick={fetchStockData}>Get Stock Data</button>

            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
