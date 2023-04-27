import './App.css';
import { Navigation } from './components/Header/Navigation';
import Main from './components/Main/Main';

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
        <div className="content">
          <main>
            <Main
              image_path="../assets/images/image-web-3-desktop.jpg"
              heading="The Bright Future of Web 3.0?"
              text="We dive into the next evolution of web that claims to put the power of
              the platforms back into the hands of the people. But is it really
              fullfilling its promise?"
              buttonText="read more"
            ></Main>
          </main>
          <aside></aside>
          <footer></footer>
        </div>
      </div>
    </>
  );
}

export default App;
