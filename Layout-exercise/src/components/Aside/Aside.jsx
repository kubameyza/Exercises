import styles from './Aside.module.css';
import ArticleAside from './ArticleAside';

const asideArticles = [
  {
    title: 'Hydrogen VS Electric Cars',
    subtitle: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistty',
    subtitle:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    subtitle:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

const Aside = () => {
  return (
    <>
      <div className={styles.aside}>
        <h2>New</h2>
        <ArticleAside articles={asideArticles}></ArticleAside>
      </div>
    </>
  );
};

export default Aside;
