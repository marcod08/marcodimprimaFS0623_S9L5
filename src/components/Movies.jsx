import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const apiKEY = '2c385d51';
const apiURL = 'http://www.omdbapi.com/';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  
  componentDidMount() {
    const { ricerca } = this.props
    
    fetch(`${apiURL}?apikey=${apiKEY}&s=${ricerca}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          this.setState({ movies: data.Search });
        } else {
          console.error('Errore nella risposta API:', data.Error);
        }
      })
      .catch(error => console.error('Errore nella fetch:', error));
  }

  render() {
    const { movies } = this.state;
    const { titolo } = this.props;

    return (
      <div className='bg-dark'>
      
          <Row>
            <Col md={2} className='text-white my-2'>
              <h2>{titolo}</h2>
            </Col>
          </Row>
          <Row className='mx-2'>
            {movies.map(movie => (
              <Col key={movie.imdbID} md={2} className="my-2">
                <Card>
                  <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
                </Card>
              </Col>
            ))}
          </Row>
      </div>
    );
  }
}

export default Movies;