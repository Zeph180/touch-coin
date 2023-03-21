/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { getCryptoCoinsAsync } from '../redux/crypto/cryptoCoinSlice';
import '../styles/Home.css';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoCoinsAsync());
  }, [dispatch]);

  const { cryptoCoins } = useSelector((state) => state.cryptoCoins);

  if (!cryptoCoins) {
    return <p>Noo coins loaded</p>;
  }

  return (
    <>
      <div className="nav">
        <h1>Touch coin</h1>
        <div className="icons-cont">
          <Icon icon="mdi:microphone" />
          <Icon icon="material-symbols:settings" />
        </div>
      </div>
      <section className="home-cont">
        {cryptoCoins.map((cryptoCoin) => (
          <article className="coin" key={cryptoCoin.id}>
            <Link to={`touch-coin/details/${cryptoCoin.id}`}>
              <Icon className="link" icon="mdi:arrow-right-thin-circle-outline" />
            </Link>
            <article className="logo-cont">
              <div className="logo">
                <img
                  src={cryptoCoin.icon}
                  alt={`${cryptoCoin.name}logo`}
                  className="icon"
                />
              </div>
            </article>
            <article className="brief">
              <h2 className="heading">{cryptoCoin.name}</h2>
              <p>{cryptoCoin.totalSupply}</p>
            </article>
          </article>
        ))}
      </section>
    </>
  );
}
