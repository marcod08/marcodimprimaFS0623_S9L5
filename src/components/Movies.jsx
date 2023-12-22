import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const API_KEY = '2c385d51';
const BASE_URL = 'http://www.omdbapi.com/';

class TrendingNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}?apikey=${API_KEY}&s=harry%20potter`)
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

    return (
      <div className='bg-dark'>
      
          <Row>
            <Col md={2} className='text-white my-2'>
              <h2>Trending Now</h2>
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

export default TrendingNow;
