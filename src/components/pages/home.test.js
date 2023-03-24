import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/app/Store';
import Home from './Home';

describe('Home component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
