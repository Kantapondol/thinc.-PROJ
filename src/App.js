import './App.css';
import Header  from './header';
import Main  from './main';
import Footer from './footer';
import CreatePost from './pages/CreatePost';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div id="Main2">
        <h2 className="h2">
        MORE THAN 6 PEOPLE HAVE VISITED!<br></br>
        (OUR TEAM OFC)
        </h2>
      </div>
      <Footer/>
      <section id = "Description">
        <h5 id = "DescriptionName" className="Des">Name</h5>
        <hr></hr>
        <m className="Des" id="ILEA">I LEA 51.</m>
      </section>
    </div>
  );
}

export default App;
