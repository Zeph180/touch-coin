import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import '../styles/Details.css';

export default function DetailsScreen() {
  const { cryptoCoins } = useSelector((state) => state.cryptoCoins);
  const { id } = useParams();
  const cryptoCoin = cryptoCoins.find((item) => item.id === id);
  if (!cryptoCoin) {
    return <p>Please go back to the home page and choose coin</p>;
  }
  return (
    <section>
      <Link to="/">
        <Icon className="dt-link" icon="mdi:arrow-left-thin-circle-outline" />
      </Link>
      <article className="details-cont">
        <article className="dt-logo-cont">
          <div className="dt-logo">
            <img
              src={cryptoCoin.icon}
              alt={`${cryptoCoin.name}logo`}
              className="dt-icon"
            />
          </div>
        </article>
        <h2 className="dt-name">{cryptoCoin.name}</h2>
        <article className="desc">
          <h3 className="dt-name">Price Changes</h3>
          <p className="items">
            Price:
            <span className="item-dt">{cryptoCoin.price}</span>
          </p>
          <p className="items">
            High:
            <span className="item-dt">{cryptoCoin.priceChange1h}</span>
          </p>
          <p className="items">
            Diff:
            <span className="item-dt">{cryptoCoin.priceChange1d}</span>
          </p>
          <p className="items">
            Low:
            <span className="item-dt">{cryptoCoin.priceChange1d}</span>
          </p>
          <h3 className="dt-name">Market Info</h3>
          <p className="items">
            Total Supply:
            <span className="item-dt">{cryptoCoin.totalSupply}</span>
          </p>
          <p className="items">
            Available Supply:
            <span className="item-dt">{cryptoCoin.availableSupply}</span>
          </p>
          <p className="items">
            Market Cap:
            <span className="item-dt">{cryptoCoin.marketCap}</span>
          </p>
          <p className="items">
            Volume:
            <span className="item-dt">{cryptoCoin.volume}</span>
          </p>
        </article>
      </article>
    </section>
  );
}
