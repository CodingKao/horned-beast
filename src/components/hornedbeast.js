import { Component } from 'react';
 import { Card } from 'react-bootstrap';
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
     this.props.display (this.props.title)
   }
   render() {
     return (
        <Card onClick = {this.addClick}>
        <h2>{this.props.title}</h2>
         <Card.Img src={this.props.imageSrc} />
         <p>&hearts; {this.state.likes} </p>
         </Card>
     )
   }
 }
 export default HornedBeast;