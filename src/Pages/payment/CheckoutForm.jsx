import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useCommonAxios from "../../Hook/useCommonAxios";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const CheckoutForm = ({ charge }) => {
  console.log(charge);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosCommon = useCommonAxios();
  const [scholarship, setScholarShip] = useState({});
  useEffect(() => {
    axiosCommon.get(`/scholarship/${charge}`).then((res) => {
      setScholarShip(res.data);
    });
  }, [charge]);
  console.log(scholarship.application_fees);
  const amount = parseInt (scholarship.application_fees);
  console.log(amount)
  
  console.log(typeof(amount));
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    // defaultValues: {
    //   posted_date: new Date().toISOString().split("T")[0], // Set today's date in YYYY-MM-DD format
    // },
  });
  useEffect(() => {
    if(typeof(amount) === "number" && amount > 0 ){
      axiosCommon
      .post("/create-payment-intent", { price: amount })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosCommon, amount]);

  const handleSubmitforPayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
      toast.error(`${error.message}`, { position: "top-center" });
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction Id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        toast.success(
          `Your payment is successfull and your transaction Id is ${transactionId}`,
          {
            position: "top-center",
          }
        );
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmitforPayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Applicant Form
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Applicant Form</h3>
          <form className="card-body grid md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                {...register("applicants_phone_numbre", { required: true })}
                className="input input-bordered"
              />
              {errors.applicant_phone_numbre && (
                <p className="text-red-600">This Field is required</p>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Vilage</span>
                </label>
                <input
                  type="text"
                  {...register("applicants_village", { requred: true })}
                  className="input input-bordered"
                />
                {errors.applicants_village && (
                  <p className="text-red-600">This Field is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">District</span>
                </label>
                <input
                  type="text"
                  {...register("applicants_district", { requred: true })}
                  className="input input-bordered"
                />
                {errors.applicants_district && (
                  <p className="text-red-600">This Field is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input
                  type="text"
                  {...register("applicants_country", { requred: true })}
                  className="input input-bordered"
                />
                {errors.applicants_country && (
                  <p className="text-red-600">This Field is required</p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select
                defaultValue={""}
                {...register("gender", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value="">
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-600">This Field is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rsult of SSC</span>
              </label>
              <input
                type="number"
                {...register("ssc_result", { requred: true })}
                className="input input-bordered"
              />
              {errors.ssc_result && (
                <p className="text-red-600">This Field is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Results of HSC</span>
              </label>
              <input
                type="text"
                {...register("hsc_result", { requred: true })}
                className="input input-bordered"
              />
              {errors.hsc_result && (
                <p className="text-red-600">This Field is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sudy Gap (otional)</span>
              </label>
              <input
                type="text"
                {...register("applicants_village")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">University Name</span>
              </label>
              <input
                type="text"
                {...register("applicants_village")}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Scholarship Degree</span>
              </label>
              <input
                type="text"
                {...register("applicants_village")}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject Category</span>
              </label>
              <input
                type="text"
                {...register("applicants_village")}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Applying For</span>
              </label>
              <select
                defaultValue={""}
                {...register("degree", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value="">
                  Degree
                </option>
                <option>Diploma</option>
                <option>Bachelor</option>
                <option>Masters</option>
              </select>
              {errors.degree && (
                <p className="text-red-600">This Field is required</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="modal-action justify-center ">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-wide">Appply</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CheckoutForm;
