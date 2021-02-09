import React from 'react';

const GifGridItem = ({title,url})=>{
    return(
        <div className="card animate__animated animate__pulse">
            <ol>
                <li>
                    <h3>{title}</h3>
                    <img src={url} alt={title}/>
                </li>
            </ol>
        </div>
    );
}

export default GifGridItem;