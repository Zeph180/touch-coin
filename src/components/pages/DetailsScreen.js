import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export default function DetailsScreen() {
  const { cryptoCoins } = useSelector((state) => state.cryptoCoins);
  const { id } = useParams();
  const cryptoCoin = cryptoCoins.find((item) => item.id === id);
  return (
    <section>
      <Link to="/">To home</Link>
      <article>
        <img
          src={cryptoCoin.icon}
          alt={`${cryptoCoin.name}logo`}
        />
        <p>
          Name:
          {' '}
          {cryptoCoin.name}
        </p>
        <p>
          Price:
          {' '}
          {cryptoCoin.price}
        </p>
        <article>
          <h4>Price Changes</h4>
          <p>
            High:
            {' '}
            {cryptoCoin.priceChange1h}
          </p>
          <p>
            Diff:
            {' '}
            {cryptoCoin.priceChange1h}
          </p>
          <p>
            Low:
            {' '}
            {cryptoCoin.priceChange1h}
          </p>
        </article>
        <article>
          <h4>Market Info</h4>
          <p>
            Total Supply:
            {' '}
            {cryptoCoin.totalSupply}
          </p>
          <p>
            Availble Supply:
            {' '}
            {cryptoCoin.availableSupply}
          </p>
          <p>
            Market Cap:
            {' '}
            {cryptoCoin.marketCap}
          </p>
          <p>
            Volume:
            {' '}
            {cryptoCoin.volume}
          </p>
        </article>
      </article>
    </section>
  );
}
