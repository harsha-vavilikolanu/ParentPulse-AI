import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles, Loader2, RefreshCw, BotMessageSquare } from 'lucide-react';
import { useStore } from '../store/useStore';
import { mockStudentData } from '../data/mockData';

const initialMessages = [
  { id: 1, type: 'bot', text: `Hello! I'm your Vignan University AI Assistant. I have secure access to Aditya Sharma's academic records. How can I help you today?` },
];

const suggestedPrompts = [
  "What is my child's attendance?",
  "Show CGPA and latest marks",
  "Does my child have any backlogs?",
  "When are the next exams?",
  "Fee pending status"
];

const ChatbotPage = () => {
  const { user } = useStore();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('attendance')) {
      return `Aditya's overall attendance is currently at **${mockStudentData.attendance.overall}%**. \n\nHe has a low attendance warning in **Cloud Computing (${mockStudentData.attendance.subjects.find(s=>s.warning).percentage}%)**. I recommend discussing this with him to improve it before exams.`;
    }
    else if (q.includes('cgpa') || q.includes('marks') || q.includes('performance')) {
      return `His current CGPA is **${mockStudentData.performance.currentCgpa}**. \nIn recent midterms, he scored ${mockStudentData.performance.recentMarks[0].total}/${mockStudentData.performance.recentMarks[0].max} in Machine Learning and ${mockStudentData.performance.recentMarks[1].total}/${mockStudentData.performance.recentMarks[1].max} in Web Technologies.`;
    }
    else if (q.includes('backlog') || q.includes('fail')) {
      const active = mockStudentData.academicStatus.backlogs.active;
      if (active > 0) {
        return `Yes, Aditya currently has **${active} active backlog** in ${mockStudentData.academicStatus.activeBacklogDetails[0].name} (${mockStudentData.academicStatus.activeBacklogDetails[0].code}) from Semester 3.`;
      }
      return "No, Aditya has no active backlogs. He has cleared all subjects to date.";
    }
    else if (q.includes('exam') || q.includes('timetable') || q.includes('next')) {
       return `According to recent notifications, the **Mid Term 2 Examinations** will commence from **25th March 2026**. I suggest reminding him to prepare.`;
    }
    else if (q.includes('fee') || q.includes('pay') || q.includes('pending')) {
      return `The total pending tuition fee for the current semester is **₹${mockStudentData.finance.pending.toLocaleString('en-IN')}**. The due date is **${mockStudentData.finance.dueDate}**.`;
    }
    else {
      return "I'm sorry, I don't have specific data on that request right now. I can answer questions about attendance, academic performance, backlogs, fee status, and recent notifications.";
    }
  };

  const handleSend = (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateResponse(userMsg.text);
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (prompt) => {
    setInput(prompt);
    setTimeout(() => {
      document.getElementById('chat-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 50);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] max-w-5xl mx-auto pb-4">
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
          <BotMessageSquare className="w-7 h-7 text-accent" />
          AI Chat Assistant
        </h1>
        <p className="text-slate-500 mt-1">Ask questions about your child's data in natural language.</p>
      </div>

      <div className="flex-1 overflow-hidden bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200/60 flex flex-col relative w-full h-full">
        
        {/* Chat Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between shadow-md z-10 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">Vignan AI</h2>
              <span className="text-emerald-300 text-xs font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Secure Session Active
              </span>
            </div>
          </div>
          <button 
             onClick={() => setMessages(initialMessages)}
             className="text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
             title="Reset Conversation"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto w-full p-4 md:p-6 space-y-6 flex flex-col items-center">
            <div className="w-full max-w-5xl space-y-6 pb-20">
              {messages.map((message) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={message.id} 
                  className={`flex gap-4 max-w-[85%] ${message.type === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    message.type === 'user' ? 'bg-slate-200' : 'bg-primary/10'
                  }`}>
                    {message.type === 'user' ? <User className="w-5 h-5 text-slate-600" /> : <Bot className="w-6 h-6 text-primary" />}
                  </div>
                  
                  <div className={`p-4 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-primary text-white rounded-tr-none shadow-md' 
                      : 'bg-white border text-slate-700 border-slate-200 rounded-tl-none shadow-sm'
                  }`}>
                    {/* Parse basic markdown bolding for the bot response */}
                    {message.type === 'bot' ? (
                       <div dangerouslySetInnerHTML={{ __html: message.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
                    ) : (
                      <div>{message.text}</div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex gap-4 max-w-[85%]"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 rounded-tl-none flex items-center gap-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-primary/80 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-slate-200 bg-slate-50 p-4 w-full">
          {/* Suggested Prompts */}
          {messages.length === 1 && !isTyping && (
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(prompt)}
                  className="bg-white border border-slate-200 hover:border-primary/40 hover:bg-primary/5 text-slate-600 text-xs md:text-sm px-3 py-1.5 rounded-full transition-colors font-medium whitespace-nowrap flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form id="chat-form" onSubmit={handleSend} className="relative max-w-4xl mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message Vignan AI Assistant..."
              className="w-full bg-white border border-slate-300 rounded-2xl pl-5 pr-14 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 shadow-sm text-slate-700"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </form>
          <div className="text-center mt-3">
             <span className="text-xs text-slate-400">AI can make mistakes. Always verify critical information from the detailed modules.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatbotPage;
