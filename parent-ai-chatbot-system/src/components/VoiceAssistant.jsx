import { useState, useCallback } from 'react';

export const useVoiceAssistant = (onResult) => {
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState(null);

  const startListening = useCallback(() => {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setError("Voice recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; // Indian English, config can handle others later
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsRecording(true);
      setError(null);
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      if (onResult) onResult(speechResult);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setError("Failed to recognize speech. Please try again.");
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  }, [onResult]);

  const speak = useCallback((text) => {
    if (!window.speechSynthesis) return;
    
    // Stop any current speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN';
    utterance.rate = 1; // Normal speed
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }, []);

  return { isRecording, startListening, speak, error };
};
