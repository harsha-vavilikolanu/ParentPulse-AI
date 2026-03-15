import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Mic, Bot } from 'lucide-react';
import { chatbotService } from '../services/chatbotService';
import { useVoiceAssistant } from './VoiceAssistant';

const ChatbotWidget = ({ regNo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am your Vignan AI Parent Assistant. How can I help you today?", isBot: true, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleVoiceResult = (text) => {
    setInput(text);
    // Optionally auto-send: handleSend(text);
  };

  const { isRecording, startListening, speak, error } = useVoiceAssistant(handleVoiceResult);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async (textOverride) => {
    const textToSend = typeof textOverride === 'string' ? textOverride : input;
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      text: textToSend,
      isBot: false,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await chatbotService.processQuery(textToSend, regNo);
      
      const botMsg = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
      
      setMessages(prev => [...prev, botMsg]);
      speak(response); // Auto-speak the response
    } catch (err) {
      const errorMsg = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble connecting to the university systems right now.",
        isBot: true,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chatbot-widget-container">
      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">
              <span style={{ fontWeight: 'bold' }}>AI</span>
            </div>
            <div className="chat-title-wrapper">
              <h3>Vignan Assistant</h3>
              <div className="chat-status">
                <span className="status-dot"></span>
                Online
              </div>
            </div>
          </div>
          <button className="close-btn" onClick={toggleChat} aria-label="Close Chat">
            <X size={20} />
          </button>
        </div>
        
        <div className="chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.isBot ? 'message-bot' : 'message-user'}`}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flexDirection: msg.isBot ? 'row' : 'row-reverse' }}>
                {msg.isBot ? <Bot size={16} style={{ marginTop: '2px', opacity: 0.7 }} /> : null}
                <div style={{ flex: 1 }}>{msg.text}</div>
              </div>
              <span className="message-time">{msg.time}</span>
            </div>
          ))}
          {isTyping && (
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          )}
          {error && (
            <div style={{ fontSize: '0.8rem', color: 'var(--danger-red)', textAlign: 'center' }}>
              {error}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <button 
            className={`chat-voice-btn ${isRecording ? 'recording' : ''}`}
            onClick={startListening}
            aria-label="Use Microphone"
            title="Use Voice"
          >
            <Mic size={20} />
          </button>
          
          <input 
            type="text" 
            className="chat-input" 
            placeholder="Ask about attendance, grades..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          
          <button 
            className="chat-send-btn" 
            onClick={handleSend}
            disabled={isTyping}
            aria-label="Send Message"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        className="chatbot-toggle-btn" 
        onClick={toggleChat}
        aria-label="Open Chat Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatbotWidget;
