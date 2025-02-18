import image from '../../assets/girl.png'

const Apply = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 mb-[100px]">
      <div>
        <img src={image} alt="" />
      </div>
      <div className='my-auto'>
        <div className="py-5 border-b-2">
          <h3 className="text-2xl font-bold pb-2">Create your profile</h3>
          <p>After signing up, you'll find your scholarship .</p>
        </div>
        <div className="py-5 border-b-2">
          <h3 className="text-2xl font-bold pb-2">Get instant scholarship matches</h3>
          <p>
            Using your unique profile, you'll get a list of scholarships you
            qualify for based upon your strengths, interests, student activities
            and skills.
          </p>
        </div>
        <div className="py-5 border-b-2">
          <h3 className="text-2xl font-bold pb-2">Apply Get scholarship for masters, degree, assignment!</h3>
          <p>
            Each time you log in you're greeted with new scholarship matches,
            and the total value of the scholarships you qualify for! Filter
            through your list, save those you're interested in and start
            applying for scholarships.
          </p>
        </div>
        <button className="btn btn-primary btn-wide  mt-8">Apply</button>
      </div>
    </div>
  );
};

export default Apply;
