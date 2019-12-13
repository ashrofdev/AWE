import React from 'react';
import './jobs.css'

import {firebaseDB, storage} from '../../Server'

const Jobs = ({clients, upload}) => {

    

    const client = clients.map((i,e)=>{
        return (
            <div className="client">
                <div className="p"><p className="mobile">NAME</p><p>{clients[e].name}</p></div>
                <div className="p"><p className="mobile">EMAIL</p><p>{clients[e].mail}</p></div>
                <div className="p"><p className="mobile">PHONE</p><p>{clients[e].phone}</p></div>
                <div className="p"><p className="mobile">MESSAGE</p><p>{clients[e].message}</p></div>
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
                <div className="section_content">
                    <input onChange={(file)=>upload(file)} placeholder="upload new project" type="file"/>
                </div>
        </div>
    );
};

export default Jobs;