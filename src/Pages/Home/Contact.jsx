import React from 'react';

const Contact = () => {
    return (
        <div className='mb-[100px]'>
            <div className='grid lg:grid-cols-2 p-5 bg-base-200 my-10'>
                <div className='p-[100px] text-4xl font-bold'>
                Connect with Our Team
                </div>
                <div className='m-auto '>
                    <p className='pb-4 font-medium'>If you have a question regarding the any of our scholarship opportunities, please contact scholarships@sdfoundation.org or submit a contact form.</p>
                    <button className='btn btn-primary'>Submit a contact form</button>
                </div>
                </div>    
        </div>
    );
};

export default Contact;