import './App.css';
import Navbar from './components/header'
import React, { Component } from 'react'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// import Settings from './components/settings';

export default class App extends Component {

  state = {
    progress : 10
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
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

  render() {
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
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Navbar/> 
     {/* <Navbar countrysetin={this.countrysetin} countrysetus={this.countrysetus}/>  */}
     <Switch>
                <Route exact path="/"><News setProgress={this.setProgress} api={apikey} items={items} country={country} category="general" key="/general" /></Route>
                <Route exact path="/entertainment"><News setProgress={this.setProgress}  api={apikey} items={items} country={country} category="entertainment" key="/entertainment" /></Route>
                <Route exact path="/health"><News setProgress={this.setProgress}  api={apikey} items={items} country={country} category="health" key="/health" /></Route>
                <Route exact path="/science"><News setProgress={this.setProgress}  api={apikey} items={items} country={country} category="science" key="/science" /></Route>
                <Route exact path="/sports"><News setProgress={this.setProgress}  api={apikey} items={items} country={country} category="sports" key="/sports" /></Route>
                <Route exact path="/technology"><News setProgress={this.setProgress}  api={apikey} items={items} country={country} category="technology" key="/technology" /></Route>
                <Route exact path="/business"><News setProgress={this.setProgress}  api={apikey} items={items} country={country} category="business" key="/business" /></Route>
      </Switch>
     </Router>
     </>
    )
  }
}
