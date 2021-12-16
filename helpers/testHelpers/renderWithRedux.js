import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../redux/reducers/counter';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';

export function renderWithRedux(renderedComponent){
    const store = configureStore({
        reducer: {
          counter: counterReducer,
        },
      });

    return render(<Provider store={store}>{renderedComponent}</Provider>)
}
