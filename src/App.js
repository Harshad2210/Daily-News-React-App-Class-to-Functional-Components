import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {

  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'white';
    }
    else {
      document.body.style.backgroundColor = 'grey';
    }
    // eslint-disable-next-line
  }, [])



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  const handleProgress = (prog) => {
    setProgress(prog);
  }

  return (

    <div className={`App `} >
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Switch>
          <Route exact path="/"> <News handleProgress={handleProgress} mode={mode} country='in' category='general' pageSize={6} /> </Route>
          <Route exact path="/business" > <News handleProgress={handleProgress} mode={mode} key='business' country='in' category='business' pageSize={6} /> </Route>
          <Route exact path="/entertainment"> <News handleProgress={handleProgress} mode={mode} key='entertainment' country='in' category='entertainment' pageSize={6} /> </Route>
          <Route exact path="/general"> <News handleProgress={handleProgress} mode={mode} key='general' country='in' category='general' pageSize={6} /> </Route>
          <Route exact path="/health"> <News handleProgress={handleProgress} mode={mode} key='health' country='in' category='health' pageSize={6} /> </Route>
          <Route exact path="/science"> <News handleProgress={handleProgress} mode={mode} key='science' country='in' category='science' pageSize={6} /> </Route>
          <Route exact path="/sports"> <News handleProgress={handleProgress} mode={mode} key='sports' country='in' category='sports' pageSize={6} /> </Route>
          <Route exact path="/technology"> <News handleProgress={handleProgress} mode={mode} key='technology' country='in' category='technology' pageSize={6} /> </Route>
        </Switch>
      </Router>

    </div>

  );

}

export default App;
