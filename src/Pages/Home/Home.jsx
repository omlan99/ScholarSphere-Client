import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewCard from '../../Component/ReviewCard';

const Home = () => {
    return (
        <div>
            <Helmet><title>ScholarSphere | Home</title></Helmet>
            <ReviewCard></ReviewCard>
            Home is here
        </div>
    );
};

export default Home;