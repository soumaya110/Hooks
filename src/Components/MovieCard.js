import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <Link to = {`/trailler/${movie.id}`}>
        <Button variant="primary">Go to Trailler</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
} 

export default MovieCard
