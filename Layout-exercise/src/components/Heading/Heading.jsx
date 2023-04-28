import styles from './Heading.module.css';

const Heading = ({ articles }) => {
  return (
    <div>
      {articles.map((heading, index) => {
        return (
          <div
            key={index}
            className={styles.heading}
          >
            <h3>{heading.title}</h3>
            <p>{heading.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Heading;
