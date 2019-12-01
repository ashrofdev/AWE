import React from 'react';
import { firebaseDB } from '../../Server';


const Contact = () => {
    const onMessageSend = () => {
        firebaseDB.ref('clients').push().set({
            name: 'Someone Someone',
            email: 'someone@nobody.com',
            phone: 12122423434,
            message: 'I kinda need yaa service'
        })
    }
    return (
        <div className="section contact">
            <div className="section_content">
                <h2 className="heading">contact me</h2>
                <div className="options">
                    <div className="left">
                        left
                        

                    </div>
                    <div className="right">
                        right
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;