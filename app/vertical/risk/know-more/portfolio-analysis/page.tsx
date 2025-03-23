// pages/portfolio-analysis.tsx
"use client";


import PortfolioTheory from "../../../components/portfolio_theory";
import FiveSymbolAnalytics from "../../../components/5symbolanalytics";

const PortfolioAnalysis = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <PortfolioTheory />
            <FiveSymbolAnalytics />
        </div>
    );
};

export default PortfolioAnalysis;