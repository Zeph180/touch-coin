import { Route, Routes } from 'react-router-dom';
import DetailsScreen from '../pages/DetailsScreen';
import Home from '../pages/Home';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<DetailsScreen />} />
    </Routes>
  );
}
