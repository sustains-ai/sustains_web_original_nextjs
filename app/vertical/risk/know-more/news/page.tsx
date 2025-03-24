import NewsFeed from "../../../components/NewsFeed";

export default function NewsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Market News & Sentiment</h1>
            <p className="text-gray-600 mb-10">
                Stay ahead with real-time financial news and insights curated for informed decision-making.
            </p>
            <NewsFeed />
        </main>
    );
}
