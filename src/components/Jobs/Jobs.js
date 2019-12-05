import React from 'react';
import './jobs.css'

const Jobs = ({clients}) => {
    const client = clients.map((i,e)=>{
        return (
            <div className="client">
                <div className="p"><p>NAME</p><p>{clients[e].name}</p></div>
                <div className="p"><p>EMAIL</p><p>{clients[e].mail}</p></div>
                <div className="p"><p>PHONE</p><p>{clients[e].phone}</p></div>
                <div className="p"><p>MESSAGE</p><p>{clients[e].message}</p></div>
            </div>
        )
    })
    return (
        <div className="section jobs">
                <div className="section_content">
                    <h2 className="heading">Jobs</h2>
                    <div className="clients">
                    <div className="client c_head">
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