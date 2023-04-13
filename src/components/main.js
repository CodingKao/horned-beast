import { Component } from 'react';
import HornedBeast from './hornedbeast';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      hornOptions: [] 
    };
  }

  componentDidMount() {
    const hornValues = [...new Set(this.props.allBeasts.map(beast => beast.horns))];
    const hornOptions = [
      { value: 'all', label: 'All' },
      ...hornValues.map(value => ({ value: value.toString(), label: value.toString() }))
    ];
    this.setState({ hornOptions });
  }

  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value
    });
  }


  render() {
    const filterBeasts = this.state.filter === 'all'
      ? this.props.allBeasts
      : this.props.allBeasts.filter(beast => beast.horns === parseInt(this.state.filter));


    return (
      <>
        <Form>
          <Form.Group controlId="formHornFilter">
            <br></br>
            <Form.Label><h2>Filter By Number of Horns</h2></Form.Label>
            <Form.Control as="select" value={this.state.filter} onChange={this.handleFilterChange}>
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Row sm={1} md={3} lg={5}>
          {filterBeasts.map((beast, i) => (
            <HornedBeast
              key={i}
              index={i}
              imageSrc={beast.image_url}
              title={beast.title}
              description={beast.description}
              display={this.props.display}
            />
          ))}
        </Row>
      </>
    );
  }
}

export default Main;