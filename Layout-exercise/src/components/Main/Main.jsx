import styles from './Main.module.css';

const Main = ({ image_path, mobile_image_path, heading, text, buttonText }) => {
  return (
    <div className={styles.main}>
      <img
        className={styles.image}
        src={image_path}
      ></img>
      <img
        className={styles.mobile_image}
        src={mobile_image_path}
      ></img>
      <div className={styles.text}>
        <h1>{heading}</h1>
        <div className={styles.article}>
          <p>{text}</p>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
