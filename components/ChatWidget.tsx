
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGroq } from '../services/geminiService';
import { ChatMessage } from '../types';
import { PERSONAL_INFO } from '../constants';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Initial welcome message
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Hi! I am an AI assistant. Ask me anything about ${PERSONAL_INFO.name}'s experience or skills.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setIsLoading(true);

    // Create temporary history including the new user message
    const newUserMessage: ChatMessage = { role: 'user', text: userText };
    const newHistory = [...messages, newUserMessage];
    
    // Update UI immediately with user message
    setMessages(newHistory);

    // Send full history to API
    const responseText = await sendMessageToGroq(newHistory);

    // Update UI with model response
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 animate-fadeInUp">
          {/* Header */}
          <div className="bg-primary-600 dark:bg-blue-700 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-white font-medium">Portfolio Assistant</h3>
            </div>
            <button onClick={toggleChat} className="text-blue-100 hover:text-white focus:outline-none">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary-600 text-white rounded-br-none'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg rounded-bl-none border border-gray-200 dark:border-gray-600 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my skills..."
                className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 text-sm text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${isOpen ? 'hidden' : 'flex'} items-center justify-center w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110 focus:outline-none`}
      >
         <i className="fas fa-robot text-2xl"></i>
      </button>
    </div>
  );
};

export default ChatWidget;
