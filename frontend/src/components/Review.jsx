import React, { useState, useRef } from "react";
import {collection, addDoc} from "firebase/firestore";

import "./Review.scss";
import { db } from "../Lib/init-firebase";

const Review = ({ modalHandler }) => {
  const textarea = useRef();
  const input = useRef();
  const [invalidField, setInvalidField] = useState(false);
  const submitHandler = async function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const review = formData.get("review").trim();
    const reviewer = formData.get("reviewer").trim();
    if (review.length <= 2) {
      setInvalidField(true);
      return;
    }
    textarea.current.value = "";
    input.current.value = "";
    // Store data { review, reviewer }
    const reviewsCollectionRef = collection(db, "reviews");
    const newReview = await addDoc(reviewsCollectionRef, { review, reviewer });
    console.log(newReview);
    modalHandler(true);
  };

  const changeHandler = function (event) {
    const review = event.target.value.trim();
    if (review.length <= 2) {
      setInvalidField(true);
      return;
    } else {
      setInvalidField(false);
    }
  };

  return (
    <div className="review">
      <nav className="nav">
        <div className="logo">
          <h1 className="logo__text">
            KS <span>Store</span>
          </h1>
          <h4 className="logo__text-sub">FASHION BEAUTY STYLE</h4>
        </div>
      </nav>
      <main className="main">
        <h1 className="review__text">
          Help make <span>KS Store</span> better,
          <br />
          please leave a review.
        </h1>
        <form className="form" onSubmit={submitHandler}>
          <div className="form__group">
            <textarea
              ref={textarea}
              className={invalidField ? "error_field" : ""}
              name="review"
              placeholder="What do u have to tell us?"
              onChange={changeHandler}
            ></textarea>
            {invalidField && <span className="error_msg">Too short! 🙂</span>}
          </div>
          <div className="form__group">
            <label htmlFor="reviewer" className="form__label">
              Reviewer (If you don't mind). It's okay to remain anonymous.{" "}
            </label>
            <input
              ref={input}
              name="reviewer"
              id="reviewer"
              placeholder="Do you want us to know you?"
            />
          </div>
          <section className="form__cta">
            <button disabled={invalidField} type="submit">
              Send
            </button>
          </section>
        </form>
      </main>
    </div>
  );
};

export default Review;
