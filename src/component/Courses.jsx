import React from 'react';


const LatestResults = () => {
    const results = [
        { unit: 'Unit 5', topic: 'Technology', percentage: 25, color: 'red-bar' },
        { unit: 'Unit 12', topic: 'Ecology', percentage: 44, color: 'blue-bar' },
        { unit: 'Unit 9', topic: 'Real estate', percentage: 40, color: 'blue-bar' },
        { unit: 'Unit 8', topic: 'Education', percentage: 15, color: 'red-bar' },
        { unit: 'Unit 16', topic: 'Job market', percentage: 76, color: 'blue-bar' }
    ];

    return (
        <div className="results-box">
            <div className="header">
                <h5>Latest results</h5>
                <a href="#">More &#8594;</a>
            </div>
            {results.map((result, index) => (
                <div className="result-item" key={index}>
                    <div className="unit">{result.unit}</div>
                    <div className="topic">- {result.topic}</div>
                    <div className="progress">
                        <div className={`progress-bar ${result.color}`} style={{ width: `${result.percentage}%` }}></div>
                    </div>
                    <div className="percentage">{result.percentage}%</div>
                </div>
            ))}
        </div>
    );
}

export default LatestResults;
