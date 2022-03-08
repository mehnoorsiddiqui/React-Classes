import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { orange } from '@material-ui/core/colors';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: orange[500],
    }
  }
})
function App() {
  const [movieName, setName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieReviewList] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
   getMovieReviewList();
  });

  const getMovieReviewList = ()=>{
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieReviewList(response.data);
    });
  }
  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName,
      movieReview: review
    })

    setMovieReviewList([...movieReviewList, { movieName: movieName, movieReview: review }])
    setName('')
    setReview('')
  }
  const deleteReview = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`)
    setMovieReviewList([...movieReviewList])

  }

  const updateReview = (id,movie) => {
    Axios.put("http://localhost:3001/api/update", {
      id: id,
      movieName:movie,
      movieReview: newReview
    })
    setMovieReviewList([...movieReviewList])
    console.log(movieReviewList)
       setNewReview("")
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <h1>CRUD APPLICATION</h1>
        <div className='inputtext'>
          <TextField   variant='outlined' value={movieName}   label="Movie name" type="text" placeholder='Harry potter' name='movieName' onChange={(e) => { setName(e.target.value) }} required/>
          <br />
          <TextField variant='outlined' label="Review"  value={review}  type="text" placeholder='Cool movie' name='review' onChange={(e) => { setReview(e.target.value) }} />
          <br />
          <Button variant='contained' color="secondary" onClick={submitReview}>Submit</Button>
        </div>
        <ul>
          {
            movieReviewList.map((value) => {
              return (
                <div  key={value.id*5}>
                  <div  > Movie name : {value.movieName}  Review : {value.movieReview}</div>
                  <Button
                    size='small'
                    variant='contained'
                    color="primary"
                    onClick={() => {
                      updateReview(value.id,value.movieName)
                    }}>
                    UPDATE
                  </Button>

                  <TextField
                    variant='outlined'
                    type="text"
                    onChange={(e) => {
                      setNewReview(e.target.value)
                    }} />

                  <IconButton aria-label="delete" onClick={() => { deleteReview(value.id) }}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              )
            })
          }
        </ul>
      </div>
    </ThemeProvider>
  );
}

export default App;
