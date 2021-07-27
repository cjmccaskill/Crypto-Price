import React from "react";

const Price = (props) => {
  const apiKey = "95EA365A-EC88-4549-A019-12F939DBF578"; // Our api key from coinapi.io
  const symbol = props.match.params.symbol; // Grabbing the Currency symbol from the URL Param
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`; // Using the other two variables to create our URL

  const [coin, setCoin] = React.useState(null);

  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
  };
  // useEffect to run getCoin when component mounts
  React.useEffect(() => {
    getCoin();
  }, []);
  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };
  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  // if coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
};

export default Price;
