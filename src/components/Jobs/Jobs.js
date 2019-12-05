import React from 'react';
import './jobs.css'

const Jobs = ({clients}) => {
    const client = clients.map((i,e)=>{
        return (
            <div className="client">
                <div className="p">{clients[e].name}</div>
                <div className="p">{clients[e].mail}</div>
                <div className="p">{clients[e].phone}</div>
                <div className="p">{clients[e].message}</div>
            </div>
        )
    })
    return (
        <div className="section jobs">
                <div className="section_content">
                    <h2 className="heading">Jobs</h2>
                    <div className="clients">
                    <div className="client">
                        <div className="p">NAME</div>
                        <div className="p">EMAIL</div>
                        <div className="p">PHONE</div>
                        <div className="p">MESSAGE</div>
                    </div>
                        {client}
                    </div>
                </div>
        </div>
    );
};

export default Jobs;