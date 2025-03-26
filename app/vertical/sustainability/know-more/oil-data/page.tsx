import Nasdaqoildata from "../../../components/Nasdaqoildata";

export default function OilDataPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Monthly Oil Energy Dashboard</h1>
            <p className="text-gray-600 mb-10">
                Visualize the latest monthly oil data across countries. Updated regularly with Nasdaq's energy dataset.
            </p>
            <Nasdaqoildata />
        </main>
    );
}
