/* eslint-disable react/prop-types */
import styles from './Navigation.module.css';

export const Navigation = ({ image_path, listItems }) => {
  return (
    <div className={styles.navigation}>
      <img
        className={styles.logo}
        src={image_path}
      ></img>
      <ul className={styles.nav_items}>
        {listItems.map((listItem, index) => {
          return <li key={index}>{listItem}</li>;
        })}
      </ul>
    </div>
  );
};
