import StockDataFetcher from "../../../../alpha_vantage/StockDataFetcher";
import PortfolioManager from "../../../../alpha_vantage/PortfolioManager";

export default function PortfolioAnalysisPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Portfolio Analysis</h1>
            <StockDataFetcher />
            <PortfolioManager />
        </div>
    );
}
