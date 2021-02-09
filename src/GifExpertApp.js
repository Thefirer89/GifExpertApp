import React,{useState} from 'react';
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GifExpertApp = ()=>{

    const [categories,setCategories] = useState(['Ghost 221']);

    /*const HandleAdd = () =>{
        setCategories([...categories,'Makarov']);
    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <CategoryAdd setCategories={setCategories} />
            <ol>
            {
                categories.map( category =>
                    <GifGrid key={category} category={category} />
                )
            }
            </ol>
        </>
    );
}

export default GifExpertApp;