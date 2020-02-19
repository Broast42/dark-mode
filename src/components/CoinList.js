import React from 'react';
import CoinCard from  './CoinCard';

const CoinList = props =>{
    return(
        <div className="coinListFlex">
            {props.coinData.map((x,i)=>(
                <CoinCard key={i} coinData={x} />
            ))}
        </div>
    );
};

export default CoinList;