import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

import Data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    beasts: Data,
    selectedBeast: {},
    display: false
  }
};

display = (name) => {
  const selected = Data.find(beast => beast.title === name);
  console.log('selected', selected);
  this.setState({ selectedBeast: selected, display:true });
};
onHide = () => {
  this.setState({ display: false })
  console.log('onHide called');
}

render() {
  return (
    <div>
      <Header title="Horned Beast" />
      <Main allBeasts={this.state.beasts} display={this.display} />
      <SelectedBeast
        beast={this.state.selectedBeast}
        display={this.state.display}
        onHide={this.onHide}
      />
      <Footer kao="Kao Saelor" />
    </div>
  )
}
};


export default App;