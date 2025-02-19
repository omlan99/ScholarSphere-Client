import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const Review = () => {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    useAxiosSecure.get("/reviews").then((res) => {
      // console.log(res.data);
      setReviews(res.data);
    });
  }, []);
  const slicedReview = reviews.slice(0,3)
    return (
        <div> 
            {
                slicedReview.map((review, index) =>{
                    <div key={index} className=''>
                        hello

                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p></p>

                        </div>
                    </div>
                })
            }
            
        </div>
    );
};

export default Review;