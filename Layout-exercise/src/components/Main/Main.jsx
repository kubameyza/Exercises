import styles from './Main.module.css';

const Main = ({ image_path, heading, text, buttonText }) => {
  return (
    <div className={styles.main}>
      <img
        className={styles.image}
        src={image_path}
      ></img>
      <div className={styles.text}>
        <h1>{heading}</h1>
        <div>
          <p>{text}</p>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
