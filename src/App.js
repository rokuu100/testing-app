import logo from './Logo_UC3M.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="title">The survey of Roberto</h1>
      <p id="description">Thank you for completing the survey!</p>
      <form id="survey-form">
        <label for="name-label" type="text" id="name-label">Name <input id="name" placeholder="Write your name..." required></input></label>
        <label for="email-label" type="text" id="email-label">Email <input id="email" type="email" placeholder="Write your email..." required></input></label>
        <label for="number-label" type="number" id="number-label">Age <input id="number" type="number" min="10" max="120" placeholder="Choose your age..."></input></label>

        <label for="dropdown">Which degree do you study?</label>
           <select class= "lastobject" id="dropdown">
             <option value="">Choose an option...</option>
             <option value="1">Ingeniería informática</option>
             <option value="2">Matemática Aplicada y Computación</option>
             <option value="3">Ingeniería de Software</option>
           </select>
        
        <legend>Would you study Physics in your near future?</legend>
<label for="yes-physics"><input id="yes-phyiscs" type="radio" name="yes-no-idk" value="yes-physics"></input> Yes, I would study it.</label>
        <label for="no-physics"><input id="no-phyiscs" type="radio" name="yes-no-idk" value="no-physics"></input> No, I would NOT study it.</label>
        <label for="idk-physics"><input id="idk-phyiscs" type="radio" name="yes-no-idk" value="idk-physics" class= "lastobject"></input> I do not know.</label>
      <legend>In which area of mathematics are you interested on?</legend>
 
  <label for="linear-algebra"><input id="linear-algebra" type="checkbox" name="mathematics" value="linear-algebra"></input> Linear Algebra</label>
        <label for="discrete-mathematics"><input id="discrete-mathematics" type="checkbox" name="mathematics" value="discrete-mathematics"></input> Discrete Mathematics</label>
        <label for="vector-calculus"><input id="vector-calculus" type="checkbox" name="mathematics" value="vector-calculus"></input> Vector Calculus</label>
        <label for="integral-calculus"><input id="integral-calculus" type="checkbox" name="mathematics" value="integral-calculus"></input> Integral Calculus</label>
        <label for="differential-calculus"><input class= "lastobject" id="differential-calculus" type="checkbox" name="mathematics" value="differential-calculus"></input> Differential Calculus</label>
        <label for="more-comments">Any comments about the survey?</label>
        <textarea id="more-comments" name="more-comments" placeholder="Write your comments here..." rows="4" cols="40"></textarea>


        <input id="submit" type="submit" value="SUBMIT HERE"></input>
      </form>
      </header>
    </div>
  );
}

export default App;
