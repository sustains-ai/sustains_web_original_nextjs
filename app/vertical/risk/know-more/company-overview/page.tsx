// app/company-overview/page.tsx
"use client";

import CompanyOverview from "../../../components/company_overview";

const CompanyOverviewPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <CompanyOverview />
        </div>
    );
};

export default CompanyOverviewPage;