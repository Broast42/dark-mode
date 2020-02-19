import React from 'react';
import CoinData from './CoinData';

const CoinCard = props => {
    return(
        <div className="coinCard">
            <div className="center">
                <h2>{props.coinData.name}</h2>
                <img src={props.coinData.image} alt={props.coinData.id} />
                <h4>{props.coinData.symbol}</h4>
            </div>
            <CoinData lable="Market Cap Rank:" data={props.coinData.market_cap_rank} />
            <CoinData lable="Market Cap:" data={props.coinData.market_cap} />
            <CoinData lable="Total Volume:" data={props.coinData.total_volume} /> 
            <CoinData lable="24 Hour High:" data={props.coinData.high_24h} />
            <CoinData lable="24 Hour Low" data={props.coinData.low_24h} />
            <CoinData lable="Circulating:" data={props.coinData.circulating_supply} />
            <CoinData lable="Total Supply" data={props.coinData.total_supply} />
  
        </div>
    );
};

export default CoinCard;