import './App.css';
import { Navigation } from './components/Header/Navigation';

const navListItems = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

function App() {
  return (
    <>
      <div className="wrapper">
        <nav>
          <Navigation
            image_path="../assets/images/logo.svg"
            listItems={navListItems}
          ></Navigation>
        </nav>
        <main></main>
        <aside></aside>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
