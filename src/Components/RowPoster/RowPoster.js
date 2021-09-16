import {React,useState,useEffect} from 'react'
import './RowPoster.css'
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube';

function RowPoster(props) {
    const [movies, setMovie] = useState([])
    const [urlId,setUrlId] = useState('');

    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovie(response.data.results)
        }).catch(err=>{
            alert('Network error')
        })
    });
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results);
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('array empty');
            }
          })
      }
    return (
        <div className='row'>
           <h2>{props.title}</h2> 
           <div className="posters">
           {movies.map((obj)=>

            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

           )}
                

           </div>
             {urlId && <Youtube  opts={opts} videoId={urlId.key} /> }
        </div>
    )
}

export default RowPoster
