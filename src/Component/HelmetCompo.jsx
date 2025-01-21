import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetCompo = ({pageName}) => {
    return (
        <div>
             <Helmet><title>ScholarSphere |  {pageName}</title></Helmet>
        </div>
    );
};

export default HelmetCompo;