/* eslint-disable react/prop-types */
import styles from './Navigation.module.css';

export const Navigation = ({ image_path, listItems }) => {
  return (
    <div className={styles.navigation}>
      <div>
        <img src={image_path}></img>
      </div>
      <ul className={styles.nav_items}>
        {listItems.map((listItem, index) => {
          return <li key={index}>{listItem}</li>;
        })}
      </ul>
    </div>
  );
};
