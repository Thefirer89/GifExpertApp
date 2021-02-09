import {useState,useEffect} from 'react';
import GetGif from '../helpers/GetGif';

const useFetchGifs = (category) =>{
    //Custom hook
    const [state,setState] = useState({
        images:[],
        loading:true
    });

    useEffect(()=>{//Hook que enlista funciones para que no vuelva a ejecutarlas cuando haya cambio de evento solo se va a ejecutar una unica vez.
        GetGif(category).then( data => {
            setState({
                images:data,
                loading:false
            });
        });
    },[category]);//La lista se define las variables que podrian cambiar, cuando las variables cambien se ejecutara este hook

    return state;
}

export default useFetchGifs;