// client/src/components/Chatbot.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../store/actions/chatActions';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const messages = useSelector(state => state.chat.messages);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendMessage(input));
        setInput('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;