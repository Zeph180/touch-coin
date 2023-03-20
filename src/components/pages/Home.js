import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptoCoinsAsync } from '../redux/crypto/cryptoCoinSlice';

export default function Home() {
  const dispatch = useDispatch();
  const cryptoCoins = useSelector((state) => state.cryptoCoins);
  console.log('Home:', cryptoCoins);
  useEffect(() => {
    dispatch(getCryptoCoinsAsync());
  }, [dispatch]);

  return (
    <p>Home</p>
  );
}
