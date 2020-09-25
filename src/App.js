import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <div class="container-narrow">

    <div class="masthead">
      <h1 class="muted">The Coaching Arena</h1>
    </div>


    <div id="qualities">
      <h4>Qualities of Being <button class="btn btn-warning btn-small" id="clear_qualities">Reset</button></h4>
      <ul>
        <li><button class="btn" data-toggle="button" data-quality="alert">Alert</button></li>
        <li><button class="btn" data-toggle="button" data-quality="appreciative">Appreciative</button></li>
        <li><button class="btn" data-toggle="button" data-quality="attentive">Attentive</button></li>
        <li><button class="btn" data-toggle="button" data-quality="clear">Clear</button></li>
        <li><button class="btn" data-toggle="button" data-quality="compassionate">Compassionate</button></li>
        <li><button class="btn" data-toggle="button" data-quality="courageous">Courageous</button></li>
        <li><button class="btn" data-toggle="button" data-quality="creative">Creative</button></li>
        <li><button class="btn" data-toggle="button" data-quality="empowering">Empowering</button></li>
        <li><button class="btn" data-toggle="button" data-quality="enthusiastic">Enthusiastic</button></li>
        <li><button class="btn" data-toggle="button" data-quality="flexible">Flexible</button></li>
        <li><button class="btn" data-toggle="button" data-quality="focused">Focused</button></li>
        <li><button class="btn" data-toggle="button" data-quality="generous">Generous</button></li>
      </ul>
      <ul>
        <li><button class="btn" data-toggle="button" data-quality="gentle">Gentle</button></li>
        <li><button class="btn" data-toggle="button" data-quality="grateful">Grateful</button></li>
        <li><button class="btn" data-toggle="button" data-quality="joyous">Joyous</button></li>
        <li><button class="btn" data-toggle="button" data-quality="kind">Kind</button></li>
        <li><button class="btn" data-toggle="button" data-quality="loving">Loving</button></li>
        <li><button class="btn" data-toggle="button" data-quality="open">Open</button></li>
        <li><button class="btn" data-toggle="button" data-quality="present">Present</button></li>
        <li><button class="btn" data-toggle="button" data-quality="receptive">Receptive</button></li>
        <li><button class="btn" data-toggle="button" data-quality="supportive">Supportive</button></li>
        <li><button class="btn" data-toggle="button" data-quality="truthful">Truthful</button></li>
        <li><button class="btn" data-toggle="button" data-quality="vulnerable">Vulnerable</button></li>
      </ul>
    </div>


    <div id="questions" class="clear">
      <h4>Arena Questions</h4>
      <ol>
        <li>Who am I willing to be in order to produce an extraordinary result out of this interaction? <em>(I am
            willing to be: <span id="qualities_selected"><strong>Choose 5 from above</strong></span>)</em></li>
        <li>Am I willing to systematically dismantle my structure of knowing? <em>(Choose 'Yes' or 'No')</em></li>
        <li>Am I willing to be a demand for coaching? <em>(Choose 'Yes' or 'No')</em></li>
        <li>Am I willing to guarantee that whoever coaches me will be successful? <em>(Choose 'Yes' or 'No')</em></li>
      </ol>
    </div>

    <hr>
    <p><a href="http://www.SetTheArena.com">www.SetTheArena.com</a></p>

    <div class="footer">
      <p>Copyright &copy; 1997-
        <script>document.write(new Date().getFullYear());</script> <a href="https://acecoachtraining.com/">The Academy
          for Coaching Excellence</a></p>
    </div>

  </div>
    </div>
  );
}

export default App;
