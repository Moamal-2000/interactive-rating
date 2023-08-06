import { useEffect, useState } from "react";
import { useRateContext } from "../Contexts/RateContext";
import styles from "./_ThankYou.module.scss";

const ThankYou = () => {
  const { rateValue } = useRateContext();
  const [delayShowCard, setDelayShowCard] = useState(false);

  useEffect(() => {
    setTimeout(() => setDelayShowCard(true), 300);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.ThankYouCard} ${
          delayShowCard ? styles.active : ""
        }`}
      >
        <div className={styles.imgHolder}>
          <img
            src={require("./images/illustration-thank-you.svg").default}
            alt="Thank you"
            decoding="async"
          />
        </div>

        <div className={styles.rate}>You selected {rateValue} out of 5</div>

        <h2 className={styles.title}>Thank you!</h2>
        <p className={styles.description}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
