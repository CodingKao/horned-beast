import { Component } from 'react';
import Image from 'react-bootstrap/Image';
 
 class HornedBeast extends Component {
   constructor(props) {
     super(props);
     this.state = {
       likes: 0
     }
   }
   addClick = () => {
     this.setState({
       likes: this.state.likes + 1
     })
   }
   render() {
     return (

       <div>
        <h2>{this.props.beast.title}</h2>
        <Image width="300px" src={this.props.beast.image_url} onClick={this.addClick} />
        <p>{this.props.beast.description}</p>
        <h3>&hearts; {this.state.likes} </h3>
       </div>
     )
   }
 }
 export default HornedBeast;