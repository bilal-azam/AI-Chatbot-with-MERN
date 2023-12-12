// client/src/components/Chatbot.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from './Chatbot';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/reducers';

const store = createStore(rootReducer);

test('renders Chatbot component', () => {
    render(
        <Provider store={store}>
            <Chatbot />
        </Provider>
    );
    expect(screen.getByText(/send/i)).toBeInTheDocument();
});

test('input changes value on typing', () => {
    render(
        <Provider store={store}>
            <Chatbot />
        </Provider>
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input.value).toBe('Hello');
});