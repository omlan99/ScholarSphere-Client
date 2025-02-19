import React from "react";

const Faq = () => {
  return (
    <div className="pt-[100px] px-5">
        <h2 className="text-4xl p-4">Frequently Asked Questin</h2>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Who is eligible to apply for the scholarships?
        </div>
        <div className="collapse-content">
          <p>
            Eligibility criteria vary for each scholarship. Some are based on
            academic merit, financial need, or specific fields of study, while
            others may require applicants to be from a particular country or
            university. Please check the specific scholarship details for exact
            requirements.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          How can I apply for a scholarship?
        </div>
        <div className="collapse-content">
          <p>
            To apply for a scholarship: Browse available scholarships on our
            website. Check the eligibility criteria to ensure you qualify. Fill
            out the online application form with the required details. Upload
            necessary documents, such as transcripts, recommendation letters,
            and personal statements. Submit your application before the
            deadline. You will receive a confirmation email after submission.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          When will I know if I have been selected for a scholarship?
        </div>
        <div className="collapse-content">
          <p>
            The selection process varies depending on the scholarship provider.
            Generally, shortlisted candidates will be contacted within 4 to 8
            weeks after the application deadline. You can check your application
            status on your account dashboard or wait for an email notification
            from the scholarship provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
