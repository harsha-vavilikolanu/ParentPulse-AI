import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, Loader2, RefreshCw, Mic } from 'lucide-react';
import { useStore } from '../store/useStore';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const initialMessages = [
{
id: 1,
type: 'bot',
text: `Hello! I'm your Vignan University AI Assistant. I can help you understand your child's academic data. What would you like to know?`
}
];

const suggestedPrompts = [
"What is my child's attendance?",
"Show CGPA and latest marks",
"Does my child have any backlogs?",
"When are the next exams?",
"Fee pending status"
];

const ChatbotPage = () => {

const { user, studentData } = useStore();

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

/* ===============================
   TEXT TO SPEECH FUNCTION
================================ */

const speakText = (text) => {

if (!window.speechSynthesis) {
alert("Speech not supported in this browser");
return;
}

if (window.speechSynthesis.speaking) {
window.speechSynthesis.cancel();
return;
}

const speech = new SpeechSynthesisUtterance(text);

speech.lang = "en-US";
speech.rate = 1;
speech.pitch = 1;

window.speechSynthesis.speak(speech);

};

/* ===============================
   GEMINI RESPONSE
================================ */

const generateResponse = async (query) => {

const student = studentData;

if (!student) {
return "Student data is not loaded. Please login again.";
}

const prompt = `
You are an AI assistant for the Vignan University Parent Portal.

Answer ONLY using the student data below.

Student Data:

Name: ${student.name}
Branch: ${student.branch}
Year: ${student.year}

CGPA: ${student.performance.cgpa}

Attendance Overall: ${student.attendance.overall}%

Subjects Attendance:
${student.attendance.subjects.map(s => `${s.name} - ${s.percentage}%`).join("\n")}

Backlogs: ${student.performance.backlogs}

Backlog Subjects: ${student.performance.backlogSubjects.join(", ")}

Fees:
Total: ${student.fees.total}
Paid: ${student.fees.paid}
Due: ${student.fees.due}

Notifications:
${student.notifications.map(n => n.text).join("\n")}

Parent Question:
${query}

Answer clearly for the parent.
Use simple language.
`;

try {

const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyAo4_WwhvbfPGv2_IYw_VqBOEOUFjaT-gU`,
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
contents: [
{
parts: [{ text: prompt }]
}
]
})
}
);

const data = await response.json();

console.log("Gemini Response:", data);

if (data.candidates && data.candidates.length > 0) {
return data.candidates[0].content.parts[0].text;
}

return "AI could not generate a response.";

} catch (error) {

console.error("Gemini API Error:", error);

return "AI service is temporarily unavailable.";

}

};

/* ===============================
   SEND MESSAGE
================================ */

const handleSend = async (e) => {

if (e) e.preventDefault();

if (!input.trim() || isTyping) return;

const userMsg = {
id: Date.now(),
type: 'user',
text: input
};

setMessages(prev => [...prev, userMsg]);

setInput('');

setIsTyping(true);

const botText = await generateResponse(userMsg.text);

setMessages(prev => [
...prev,
{
id: Date.now() + 1,
type: 'bot',
text: botText
}
]);

setIsTyping(false);

};

/* ===============================
   SUGGESTION CLICK
================================ */

const handleSuggestionClick = (prompt) => {

setInput(prompt);

setTimeout(() => {
document.getElementById('chat-form')
.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
}, 50);

};

return (

<div className="flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] max-w-5xl mx-auto pb-4">

{/* Title */}

<div className="mb-4">

<h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">

<Bot className="w-7 h-7 text-accent" />

AI Chat Assistant

</h1>

<p className="text-slate-500 mt-1">

Ask questions about your child's academic data.

</p>

</div>

{/* Chat container */}

<div className="flex-1 overflow-hidden bg-white rounded-2xl shadow-lg border flex flex-col">

{/* Header */}

<div className="bg-primary px-6 py-4 flex items-center justify-between">

<div className="flex items-center gap-3">

<Bot className="w-6 h-6 text-white"/>

<h2 className="text-white font-bold">Vignan AI</h2>

</div>

<button
onClick={() => setMessages(initialMessages)}
className="text-white/70 hover:text-white"
>

<RefreshCw/>

</button>

</div>

{/* ===============================
   MESSAGES
================================ */}

<div className="flex-1 overflow-y-auto p-6 space-y-6">

{messages.map((message) => (

<motion.div
key={message.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
className={`flex gap-3 ${message.type === "user" ? "justify-end" : ""}`}
>

<div
className={`p-4 rounded-xl max-w-[80%] flex items-start gap-2 ${
message.type === "user"
? "bg-primary text-white"
: "bg-gray-100"
}`}
>

<span className="flex-1">{message.text}</span>

{/* MIC BUTTON ONLY FOR BOT */}

{message.type === "bot" && (

<button
onClick={() => speakText(message.text)}
className="ml-2 text-slate-500 hover:text-primary"
title="Listen"
>

<Mic size={18} />

</button>

)}

</div>

</motion.div>

))}

{isTyping && (

<div className="flex items-center gap-2">

<Loader2 className="animate-spin"/>

AI thinking...

</div>

)}

<div ref={messagesEndRef} />

</div>

{/* ===============================
   SUGGESTIONS
================================ */}

{messages.length === 1 && (

<div className="px-4 pb-2 flex flex-wrap gap-2 justify-center">

{suggestedPrompts.map((prompt, idx) => (

<button
key={idx}
onClick={() => handleSuggestionClick(prompt)}
className="bg-gray-100 px-3 py-1 rounded-full text-sm"
>

{prompt}

</button>

))}

</div>

)}

{/* ===============================
   INPUT
================================ */}

<form
id="chat-form"
onSubmit={handleSend}
className="border-t p-4 flex gap-2"
>

<input
type="text"
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Ask something..."
className="flex-1 border rounded-xl px-4 py-3"
/>

<button
type="submit"
className="bg-primary text-white px-4 rounded-xl"
>

<Send/>

</button>

</form>

</div>

</div>

);

};

export default ChatbotPage;