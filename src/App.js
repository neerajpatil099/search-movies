import React,{useState, useEffect} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import search from './search.svg'
import { nanoid } from 'nanoid';

const api_url = ' http://www.omdbapi.com/?i=tt3896198&apikey=6389e769';

// const movie1={
//   Title: 'Batman Begins', Year: '2005', imdbID: 'tt0372784', Type: 'movie', Poster: 'NA'
// }

function App() {

  const [movies, setMovies] = useState([]);
  const [text, setText] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
    console.log(data.Search)
  }

  const handleOnChange = (e)=>{
    setText(e.target.value)
  }

  const handleONsearch = () =>{
    searchMovies(text)
  }

  useEffect(() => {
    searchMovies('batman')
  }, [])
  

  return (
    <div className='app'>
    <h1>Movies Awesomee</h1>
    <div className='search'>
<input placeholder='search for movies' value={text} onChange={handleOnChange}></input>
<img src={search} alt='' onClick={handleONsearch} ></img>
    </div>
    <div className='container'>
     {movies.map((element)=>{
    return <MovieCard key={nanoid()} movie={element}/>
     })}
    </div>
    </div>
  );
}

export default App;
