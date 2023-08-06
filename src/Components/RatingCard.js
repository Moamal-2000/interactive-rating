import { useEffect, useRef } from "react";
import { useRateContext } from "../Contexts/RateContext";
import styles from "./_RatingCard.module.scss";

const RatingCard = () => {
  const rateContainerRef = useRef();
  const { rateValue, setRateValue, setIsUserRated } = useRateContext();

  function handleSubmitButton(e) {
    if (!rateValue) return;
    setIsUserRated(true);
  }

  useEffect(() => {
    const rateButtons = [...rateContainerRef.current.children];

    rateButtons.forEach((button) => {
      button.addEventListener("click", () => {
        rateButtons.forEach((button) => button.removeAttribute("active"));
        button.setAttribute("active", true);

        setRateValue(button.textContent);
      });
    });
  }, [setRateValue]);

  return (
    <div className={styles.container}>
      <div className={styles.RatingCard}>
        <div className={styles.imgHolder}>
          <img
            src={require("./images/icon-star.svg").default}
            alt="start icon"
          />
        </div>

        <h2 className={styles.title}>How did we do?</h2>
        <p className={styles.description}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className={styles.rateContainer} ref={rateContainerRef}>
          <button className={styles.rate} type="button">
            1
          </button>
          <button className={styles.rate} type="button">
            2
          </button>
          <button className={styles.rate} type="button">
            3
          </button>
          <button className={styles.rate} type="button">
            4
          </button>
          <button className={styles.rate} type="button">
            5
          </button>
        </div>

        <button
          className={styles.submitButton}
          type="button"
          onClick={(e) => handleSubmitButton(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatingCard;

// Rating state end

// Thank you state start

// You selected ( Add rating here ) out of 5

// Thank you!

//   We appreciate you taking the time to give a rating. If you ever need more support,
//   don’t hesitate to get in touch!

// Thank you state end
