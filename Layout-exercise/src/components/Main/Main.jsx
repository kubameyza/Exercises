import styles from './Main.module.css';

const Main = ({ image_path, heading, text, buttonText }) => {
  return (
    <div className={styles.main}>
      <img
        className={styles.image}
        src={image_path}
      ></img>
      <h1>{heading}</h1>
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default Main;
