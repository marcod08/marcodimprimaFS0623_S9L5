import React, { Component } from 'react';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap';

class ModalComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
    };
  }

  componentDidMount() {
    const { selectedMovie } = this.props;
    if (selectedMovie) {
      this.fetchComments(selectedMovie.imdbID);
    }
  }

  fetchComments = async (imdbID) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1OGM0OGI5ODkwODAwMTg0ODg3NGMiLCJpYXQiOjE3MDMyNTEwMTYsImV4cCI6MTcwNDQ2MDYxNn0.TB-26CMc7CFro3b2ohQR8fQE9FP9nAXd-5zof_thZdI";

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${imdbID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      } else {
        console.error('Errore nel fetch dei commenti:', response.statusText);
      }
    } catch (error) {
      console.error('Errore nel fetch dei commenti:', error);
    }
  };

  postComment = async () => {
    const { selectedMovie } = this.props;
    const { newComment } = this.state;

    if (selectedMovie) {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1OGM0OGI5ODkwODAwMTg0ODg3NGMiLCJpYXQiOjE3MDMyNTEwMTYsImV4cCI6MTcwNDQ2MDYxNn0.TB-26CMc7CFro3b2ohQR8fQE9FP9nAXd-5zof_thZdI";

      try {
        // ho rimosso l'id
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ comment: newComment })
        });

        if (response.ok) {
          this.fetchComments(selectedMovie.imdbID);
          this.setState({ newComment: '' });
        } else {
          console.error('Errore nell\'invio del commento:', response.statusText);
        }
      } catch (error) {
        console.error('Errore nell\'invio del commento:', error);
      }
    }
  };

  render() {
    const { show, onHide, selectedMovie } = this.props;
    const { comments, newComment } = this.state;

    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie && selectedMovie.Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="formComment">
            <Form.Label>Commento:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo commento"
              value={newComment}
              onChange={(e) => this.setState({ newComment: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.postComment}>
            Invia Commento
          </Button>

          <ListGroup className="mt-3">
            {comments.map((comment, index) => (
              <ListGroup.Item key={index}>{comment.comment}</ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComp;