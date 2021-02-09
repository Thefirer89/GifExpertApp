import React,{useState} from "react";
import PropTypes from 'prop-types';

const CategoryAdd = ({setCategories}) =>{
    const [inputValue,setInputValue] = useState('');

    const HandleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const HandleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cat => [inputValue,...cat]);
            setInputValue('');
        }
    }

    return(
        <form onSubmit={HandleSubmit}>
            <input value={inputValue} onChange={HandleInputChange} />
        </form>
    );
}

CategoryAdd.propTypes={
    setCategories:PropTypes.func.isRequired
}

export default CategoryAdd;