import './App.css';
import Navbar from './components/header'
import React, { useState } from 'react'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// import Settings from './components/settings';

const App = () => {

const [progress, setProgress] = useState(10);

const setProgressfunction=(progress)=>{
  setProgress(progress);
}
  // constructor() {
  //   super();
  //   this.state = {
  //     country : 'in'
  //   };
  // }
  // countrysetin = () =>{
  //   this.setState({country : 'in'});
  //   console.log(country); 
  //   // console.log('in') 

  // } 
  // countrysetus = () =>{
  //   this.setState({country : 'us'});
  //   console.log(country);
  //   // console.log('us') 
  // }
  let items = 20;
  let apikey = process.env.REACT_APP_NEWS_API;
  let country = 'in';

    return (
      <>
      <Router>
      <LoadingBar
      loaderSpeed={1200}
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Navbar/> 
     {/* <Navbar countrysetin={this.countrysetin} countrysetus={this.countrysetus}/>  */}
     <Switch>
                <Route exact path="/"><News setProgress={setProgressfunction} api={apikey} items={items} country={country} category="general" key="/general" /></Route>
                <Route exact path="/entertainment"><News setProgress={setProgressfunction}  api={apikey} items={items} country={country} category="entertainment" key="/entertainment" /></Route>
                <Route exact path="/health"><News setProgress={setProgressfunction}  api={apikey} items={items} country={country} category="health" key="/health" /></Route>
                <Route exact path="/science"><News setProgress={setProgressfunction}  api={apikey} items={items} country={country} category="science" key="/science" /></Route>
                <Route exact path="/sports"><News setProgress={setProgressfunction}  api={apikey} items={items} country={country} category="sports" key="/sports" /></Route>
                <Route exact path="/technology"><News setProgress={setProgressfunction}  api={apikey} items={items} country={country} category="technology" key="/technology" /></Route>
                <Route exact path="/business"><News setProgress={setProgressfunction}  api={apikey} items={items} country={country} category="business" key="/business" /></Route>
      </Switch>
     </Router>
     </>
    )
  }

export default App