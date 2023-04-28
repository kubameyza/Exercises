import styles from './FooterElement.module.css';

const FooterElement = ({ footerArticles }) => {
  return footerArticles.map((article, index) => {
    return (
      <div
        className={styles.element}
        key={index}
      >
        <img
          className={styles.img}
          src={article.imgPath}
        ></img>
        <div className={styles.text}>
          <h2>{article.orderNumber}</h2>
          <h3>{article.title}</h3>
          <p>{article.subtitle}</p>
        </div>
      </div>
    );
  });
};

export default FooterElement;
