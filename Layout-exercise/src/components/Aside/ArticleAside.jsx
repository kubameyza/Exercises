import styles from './ArticleAside.module.css';

const ArticleAside = ({ articles }) => {
  return (
    <div>
      {articles.map((heading, index) => {
        return (
          <div
            key={index}
            className={styles.article}
          >
            <h3>{heading.title}</h3>
            <p>{heading.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleAside;
