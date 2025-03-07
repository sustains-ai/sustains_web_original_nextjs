import React from 'react';

interface CardProps {
    title: string;
    value: string | number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
    return (
        <div className="rounded-lg border bg-white p-4 shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <p className="mt-2 text-2xl font-bold text-black">{value}</p>
        </div>
    );
};

export default Card;
