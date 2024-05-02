import React, { useState, useEffect, useContext } from 'react';
import botAvatar from '../Asserts/boticon.png';
import userAvatar from '../Asserts/usericon.png';
import stringSimilarity from 'string-similarity';
import botDataObj from '../Services/Bot.json';
import '../Styles/ChatBotStyles.css';
import userData from '../Services/UserData.json';
import Cli from '../Services/Cli.json';
import CC from '../Services/CC.json';
import Hotels from '../Services/Hotels.json';
import Stations from '../Services/Stations.json';
// import KeyboardContext from './KeyboardContext';

const botData = botDataObj.bot;

const ChatWindow = ({ handleCloseBot }) => {
    const [messages, setMessages] = useState([{ type: 'bot', content: 'Hello! How can I help you today?' }]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const [botCurrentMessage, setBotCurrentMessage] = useState('');
    // const { setKeyboardVisible } = useContext(KeyboardContext);

    const getBotResponse = (userInput) => {
        let maxSimilarity = 0;
        let mostSimilarAnswer = "I'm sorry, I don't understand that.";

        botData.forEach(data => {
            const similarity = stringSimilarity.compareTwoStrings(userInput, data.qus);
            if (similarity > maxSimilarity) {
                maxSimilarity = similarity;
                mostSimilarAnswer = data.answer;
            }
        });

        if (maxSimilarity < 0.3) {
            return "I'm sorry, I don't answer for that!.";
        }

        return mostSimilarAnswer;
    };

    useEffect(() => {
        let botMessageIndex = 0;
        if (typing && botCurrentMessage) {
            const typingInterval = setInterval(() => {
                if (botMessageIndex < botCurrentMessage.length) {
                    setMessages(prevMessages => {
                        // Copy the previous messages to not mutate the original array
                        const newMessages = [...prevMessages];

                        // Modify the last message's content
                        newMessages[newMessages.length - 1].content = botCurrentMessage.substring(0, botMessageIndex + 1);

                        return newMessages;
                    });
                    botMessageIndex++;
                } else {
                    clearInterval(typingInterval);
                    setTyping(false);
                }
            }, 100);
            return () => clearInterval(typingInterval);
        }
    }, [typing, botCurrentMessage]);


    const handleSend = () => {
        const inputTrimmed = input.trim();

        if (inputTrimmed) {
            // Add the user message
            setMessages(prevMessages => [...prevMessages, { type: 'user', content: inputTrimmed }]);
            setInput('');

            const regex = /\d{10}/;
            const match = inputTrimmed.match(regex);

            // Check if the input is a 10-digit number
            if (match) {
                // Process for 10-digit number
                const normalizedInput = inputTrimmed.replace(/\D/g, ''); // Remove non-digit characters

                const datasets = [userData.users, Cli.cli, CC.cc, Hotels.hotels, Stations.stations];
                const match = datasets
                    .flat()
                    .find(user => {
                        // Normalize the phone number in each dataset
                        const normalizedNumber = String(user.mobile_number).replace(/\D/g, '');
                        return normalizedNumber === normalizedInput;
                    });

                if (match) {
                    // If a match is found, set the bot response with match details
                    const botResponse = (match);
                    setBotCurrentMessage(botResponse);
                    setMessages(prevMessages => [...prevMessages, { type: 'bot', content: botResponse, isContactCard: true  }]);

                } else {
                    // Handle no match found
                    const botResponse = "No details found for this number.";
                    setBotCurrentMessage(botResponse);
                    setMessages(prevMessages => [...prevMessages, { type: 'bot', content: botResponse }]);
                }
            } else {
                // Process for regular input

                const botResponse = getBotResponse(inputTrimmed.toLowerCase());
                setBotCurrentMessage(botResponse);
                setMessages(prevMessages => [...prevMessages, { type: 'bot', content: '' }]);
            }
            setTyping(true);
        }
    };

    console.log(messages);
    return (
        <div id='overlay'>
            <div style={{ display: "flex", justifyContent: 'center', position: 'absolute', top: '50px', left: '20px', zIndex: '10' }}>
                <div className="chat-window">
                    <div className="chat-header" style={{ background: 'rgb(224, 244, 255)', display: 'flex', justifyContent: 'space-between' }}><div className='FontFamliy' style={{ color: 'red' }}>ECoRSU Chatbot</div><div><button onClick={handleCloseBot} style={{ background: 'none', border: 'none' }} className='FontFamliy'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="rgb(11, 36, 71)" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button></div></div>
                    <div style={{ height: '400px', overflowY: 'scroll', background: 'white' }}>
                        <div className="chat-messages">
                            {messages.map((message, index) => (
                                <div key={index} className={`message-container ${message.type}-message-container FontFamliy`}>
                                    <img className="avatar" src={message.type === 'bot' ? botAvatar : userAvatar} alt={`${message.type} avatar`} />
                                    <div className={`message ${message.type}-message FontFamliy`}>
                                        {message.isContactCard ? (
                                            <div>
                                                {/* Dynamically render the properties of the message.content object */}
                                                {Object.keys(message.content).map((key, index) => (
                                                    <p key={index} style={{ margin: '2px' }}>
                                                        <strong>{key}:</strong> {message.content[key]}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : (
                                            <p style={{ margin: "0px" }}>{message.content}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {typing && (
                                <div className="message-container bot-message-container" style={{ display: 'none' }}>
                                    <img className="avatar" src={botAvatar} alt="bot avatar" />
                                    <div className="message bot-message">...</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="chat-input FontFamliy">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        // onFocus={() => setKeyboardVisible(true)} 
                        // onBlur={() => setKeyboardVisible(false)} 
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
