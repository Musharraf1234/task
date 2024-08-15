// src/TimeSpentChart.js

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const TimeSpentChart = () => {
    const data = [
        { day: 'Mon', segments: [25, 0, 75, 0] },
        { day: 'Tue', segments: [0, 20, 0, 80] },
        { day: 'Wed', segments: [10, 40, 30, 20] },
        { day: 'Thu', segments: [0, 0, 100, 0] },
        { day: 'Fri', segments: [0, 0, 0, 100] },
        { day: 'Sat', segments: [0, 50, 0, 50] },
        { day: 'Sun', segments: [10, 40, 0, 50] }
    ];

    const labels = ['Vocabulary', 'Grammar', 'Listening', 'Writing'];

    return (
        <div className="learning-box p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="font-weight-bold mb-0">Time spent on learning</h5>
                <div className="dropdown">
                    Last week &#9660;
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-end mb-4 chart">
                {data.map((item, index) => (
                    <div className="text-center" key={index}>
                        <div className="mt-2 font-weight-bold">{item.day}</div>
                        <div className="bar bg-light d-flex flex-column-reverse">
                            {item.segments.map((segment, idx) => (
                                <div
                                    key={idx}
                                    className={`segment-${idx}`}
                                    style={{ height: `${segment}%` }}
                                ></div>
                            ))}
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between legend">
                {labels.map((label, index) => (
                    <div className="d-flex align-items-center" key={index}>
                        <span className={`legend-color legend-color-${index} mr-2`}></span>
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeSpentChart;
