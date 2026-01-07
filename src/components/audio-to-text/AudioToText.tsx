import { useSpeechRecognition } from './useSpeechRecognition';
import { FiMic, FiSquare, FiCopy } from 'react-icons/fi';

export default function AudioToText() {
  const {
    isListening,
    sentences,
    interimTranscript,
    error,
    toggleListening,
    clearSentences
  } = useSpeechRecognition();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sentences.join('\n'));
  };

  if (error && error.includes("browser doesn't support")) {
    return (
      <div className="p-4 bg-red-50 text-red-500 rounded-lg border border-red-200">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full  py-[20px] flex flex-col gap-[20px]">
      <div className="flex flex-col items-center justify-center space-y-4">
        <button
          onClick={toggleListening}
          className={`relative group p-6 rounded-full transition-all duration-300 border ${
            isListening
              ? 'bg-yellow-300 text-black border-yellow'
              : 'bg-neutral-700 text-white border-neutral-700 hover:bg-neutral-700'
          }`}
        >
          {isListening && (
            <span className="absolute -inset-1 rounded-full bg-neutral-500 opacity-30 animate-ping"></span>
          )}

          <div className="relative z-10 w-8 h-8 flex items-center justify-center">
            {isListening ? (
              <FiSquare className="w-6 h-6 fill-current" />
            ) : (
              <FiMic className="w-8 h-8" />
            )}
          </div>
        </button>

        <p className="text-sm font-medium text-neutral-400">
          {isListening ? 'Listening...' : 'Click to start recording'}
        </p>

        {error && (
          <p className="text-sm text-red-400 bg-red-900/10 px-3 py-1 rounded-full">
            {error}
          </p>
        )}
      </div>

      {/* Controls */}
      {sentences.length > 0 && (
        <div className="flex justify-center space-x-2">
           <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors border border-neutral-800"
          >
            <FiCopy className="w-3 h-3" />
            Copy All
          </button>
          <button
            onClick={clearSentences}
            className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-red-400 bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors border border-neutral-800"
          >
            Clear
          </button>
        </div>
      )}

      <div className="space-y-3">
        {interimTranscript && (
          <div className="p-4 bg-neutral-800/30 rounded-lg border border-neutral-800 border-dashed animate-pulse">
            <p className="text-neutral-400 italic">
              {interimTranscript} ...
            </p>
          </div>
        )}

        {sentences.map((sentence, index) => (
          <div
            key={index}
            className="py-[10px] px-[20px] bg-neutral-900 rounded-lg border border-neutral-900 hover:border-neutral-800 transition-colors"
          >
            <p className="text-neutral-300 leading-relaxed">
              {sentence}
            </p>
          </div>
        ))}

        {sentences.length === 0 && !interimTranscript && (
           <p className="text-white w-full max-w-[300px] mx-auto italic text-center mt-12">
             No sentences yet. Start speaking to add to the list.
           </p>
        )}
      </div>
    </div>
  );
}
