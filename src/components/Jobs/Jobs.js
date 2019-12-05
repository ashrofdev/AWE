import React from 'react';
import './jobs.css'

const Jobs = ({clients}) => {
    const client = clients.map((i,e)=>{
        return (
            <div className="client">
                <p>{clients[e].name}</p>
                <p>{clients[e].mail}</p>
                <p>{clients[e].message}</p>
                <p>{clients[e].phone}</p>
            </div>
        )
    })
    return (
        <div className="section jobs">
                <div className="section_content">
                    <h2 className="heading">Jobs</h2>
                    <div className="clients">
                        {client}
                    </div>
                </div>
        </div>
    );
};

export default Jobs;