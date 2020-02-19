import React from 'react';

const CoinData = props =>{
    return(
        <div className="flexData">
            <h6>{props.lable}</h6>
            <p>{props.data}</p>
        </div> 
    );
};

export default CoinData;