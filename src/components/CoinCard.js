import React from 'react';

const CoinCard = props => {
    return(
        <div className="coinCard">
            <div className="center">
                <h2>{props.coinData.name}</h2>
                <img src={props.coinData.image} alt={props.coinData.id} />
                <h4>{props.coinData.symbol}</h4>
            </div>
            <div className="flexData">
                <h6>Market Cap Rank:</h6>
                <p>{props.coinData.market_cap_rank}</p>
            </div> 
            <div className="flexData">
                <h6>Market Cap:</h6>
                <p>{props.coinData.market_cap}</p>
            </div> 
            <div className="flexData">
                <h6>Total Volume:</h6>
                <p>{props.coinData.total_volume}</p>
            </div> 
            <div className="flexData">
                <h6>24 Hour High:</h6>
                <p>{props.coinData.high_24h}</p>
            </div>
            <div className="flexData">
                <h6>24 Hour Low</h6>
                <p>{props.coinData.low_24h}</p>
            </div>
            <div className="flexData">
                <h6>Circulating Supply:</h6>
                <p>{props.coinData.circulating_supply}</p>
            </div>
            <div className="flexData">
                <h6>Total Supply</h6>
                <p>{props.coinData.total_supply}</p>
            </div>    
        </div>
    );
};

export default CoinCard;