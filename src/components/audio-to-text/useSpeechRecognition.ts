import { useState, useEffect, useRef, useCallback } from 'react';

// Type definitions for the Web Speech API
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  0: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionConstructor;
    webkitSpeechRecognition: SpeechRecognitionConstructor;
  }
}

export const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [sentences, setSentences] = useState<string[]>([]);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const isListeningRef = useRef(false);

  useEffect(() => {
    // Check browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setError("Your browser doesn't support the Web Speech API.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalChunk = '';
      let interimChunk = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalChunk += result[0].transcript;
        } else {
          interimChunk += result[0].transcript;
        }
      }

      if (finalChunk.trim()) {
        setSentences(prev => [finalChunk.trim(), ...prev]);
      }
      setInterimTranscript(interimChunk);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error', event.error);
      
      // 'no-speech' is common and usually followed by onend, we want to allow restart
      if (event.error === 'no-speech') return;
      
      // For other errors (network, not-allowed, etc.), stop trying to restart
      isListeningRef.current = false;
      setIsListening(false);
      
      if (event.error === 'not-allowed') {
        setError('Microphone access denied.');
      } else {
        setError(`Error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      // If we are supposed to be listening, restart the recognition
      // This is a workaround for mobile browsers that stop recognition after a few seconds
      if (isListeningRef.current) {
        try {
          recognition.start();
        } catch (err) {
          console.error('Error restarting speech recognition:', err);
          setIsListening(false);
          isListeningRef.current = false;
        }
      } else {
        setIsListening(false);
        setInterimTranscript('');
      }
    };

    recognitionRef.current = recognition;

    return () => {
      isListeningRef.current = false;
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const toggleListening = useCallback(() => {
    if (isListening) {
      isListeningRef.current = false;
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setError(null);
      isListeningRef.current = true;
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (err) {
        console.error('Error starting speech recognition:', err);
        setError('Could not start microphone');
        isListeningRef.current = false;
        setIsListening(false);
      }
    }
  }, [isListening]);

  const clearSentences = useCallback(() => {
    setSentences([]);
  }, []);

  return {
    isListening,
    sentences,
    interimTranscript,
    error,
    toggleListening,
    clearSentences
  };
};
