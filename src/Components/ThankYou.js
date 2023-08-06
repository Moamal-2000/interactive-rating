import { useRateContext } from "../Contexts/RateContext";
import styles from "./ThankYou.module.scss";

const ThankYou = () => {
  const { rateValue } = useRateContext();

  return (
    <div className={styles.container}>
      <div className={styles.ThankYouCard}>
        <div className={styles.imgHolder}>
          <img
            src={require("./images/illustration-thank-you.svg").default}
            alt="Thank you"
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
