import { Component } from 'react';
import HornedBeast from './hornedbeast';
import list from './image_url.json';
import Results from './results';

 class Main extends Component{
   constructor () {
     super();
     this.state = {
       currentBeast: {image_url: null},
       HornedBeast: list,
     }
   }
   selectCurrentBeast = (beast) => {
     this.setState({ currentBeast: beast});
   }
     render() {
       return (
         <>
         <Results currentBeast={this.state.currentBeast}/>
         {this.state.HornedBeast.map((beast,i)=><HornedBeast key={i} beast={beast} />)}
         </>
         )
       }
   }
   export default Main