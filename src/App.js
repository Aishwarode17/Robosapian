import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Imagelink from './components/Imagelink';
import Rank from './components/Rank';
import Predictions from './components/Predictions';
import Loading from './components/Loading';
import Errorboundary from './components/Errorboundary';
import Partistl from './components/Partistl';

require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/mobilenet');


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      url:"https://media.istockphoto.com/photos/robot-with-education-hud-picture-id966248982?k=20&m=966248982&s=612x612&w=0&h=gq35V9G0kfjKu0ttr90c8p0VraNtqPDkTvqWQ8oXzCk=",
      tmp:"",
      pred:[{className:"first"},{className:"second"},{className:"third"}],
      load: false,
      haserror:false
    }
  }

  typeChange = (event)=>{
    this.setState({tmp:event.target.value});
  }

  press =()=>{
    this.setState({url:this.state.tmp,load:"loading"});
                  if(this.state.haserror === false){
                        (async () => {
                          const img = document.getElementById('dt');
                          const model = await cocoSsd.load();
                          this.setState({load:true})
                          const predictions = await model.classify(img);                        
                          this.setState({pred: predictions});
                        })();
                      }      
  }

  therr = ()=>{
    // throw console.error("this can't be loaded");;
    this.setState({haserror:true});
  }


  render() {
    return (
      <div>
        <Partistl/>
        <Navbar></Navbar>
        <Logo></Logo>
        <Rank></Rank>
        <Imagelink typechange={this.typeChange} press={this.press}></Imagelink>
        <Errorboundary haserror={this.state.haserror}>
        <img crossOrigin="anonymous" onError={this.therr} id="dt" src={this.state.url}  alt="dtection" className="center imdt mt4"  />
        <Loading make={this.state.load}>
        <Predictions pred={this.state.pred}></Predictions>
        </Loading>
        </Errorboundary>
      </div>
    )
  }
}
