import React from 'react';

const Stats = () => {
    return (
        <div>
             <div className="mb-[100px] px-5">
        <div className="stats shadow w-full  stats-vertical lg:stats-horizontal md:mx-auto ">
          <div className="stat place-items-center">
            <div className="stat-title">Applicants</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Scholarship</div>
            <div className="stat-value ">4,200</div>
            <div className="stat-desc">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">University</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Stats;