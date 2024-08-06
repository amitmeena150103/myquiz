import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import quizContext from './context/quizContext';

const Scorecards = () => {
    const [scorecards, setScorecards] = useState([]);
    const {user} = useContext(quizContext)

    useEffect(() => {
        const fetchScorecards = async () => {
            try {
                const response = await axios.get('/scorecards');
                const allScorecards = response.data;
                // Filter scorecards based on user ID
                const filteredScorecards = allScorecards.filter(card => card.owner === user.id);
                setScorecards(filteredScorecards);
            } catch (error) {
                console.error('Error fetching scorecards:', error);
            }
        };

        fetchScorecards();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Your Scorecards</h1>
            {scorecards.length === 0 ? (
                <p className="text-lg text-gray-500">No scorecards available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {scorecards.map((card) => (
                        <div key={card._id} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 shadow-lg rounded-lg border border-gray-200">
                            <h2 className="text-xl font-semibold text-white mb-4">Scorecard Details</h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-white rounded-lg shadow-md">
                                        <p className="text-gray-800 font-medium"><strong>Percentage:</strong> {card.percentage}%</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow-md">
                                        <p className="text-gray-800 font-medium"><strong>Total Questions:</strong> {card.total_que}</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow-md">
                                        <p className="text-gray-800 font-medium"><strong>Correct Answers:</strong> {card.correct_que}</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow-md">
                                        <p className="text-gray-800 font-medium"><strong>Wrong Answers:</strong> {card.wrong_que}</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow-md">
                                        <p className="text-gray-800 font-medium"><strong>Category:</strong> {card.category}</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow-md">
                                        <p className="text-gray-800 font-medium"><strong>Difficulty:</strong> {card.difficulty}</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow-md">
                                        <p className="text-gray-800 font-medium"><strong>Type:</strong> {card.type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Scorecards;
