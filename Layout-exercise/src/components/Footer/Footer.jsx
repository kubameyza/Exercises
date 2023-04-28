import styles from './Footer.module.css';
import FooterElement from './FooterElement';

const articles = [
  {
    imgPath: '../../../assets/images/image-retro-pcs.jpg',
    orderNumber: '01',
    title: 'Reviving Retro PCs',
    subtitle: 'What happens when old PCs are given modern upgrades?',
  },
  {
    imgPath: '../../../assets/images/image-top-laptops.jpg',
    orderNumber: '02',
    title: 'Top 10 Laptops of 2022',
    subtitle: 'Our best picks for various need and budgets',
  },
  {
    imgPath: '../../../assets/images/image-gaming-growth.jpg',
    orderNumber: '03',
    title: 'The Growth of Gaming',
    subtitle: 'How the pandemic has sparked fresh oportunities',
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FooterElement footerArticles={articles}></FooterElement>
    </div>
  );
};

export default Footer;
