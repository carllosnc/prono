import AudioToText from './components/audio-to-text/AudioToText'

function App() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center py-20">
      <h1 className="text-5xl font-extrabold text-white mb-12 tracking-tight">
        Voice to Text
      </h1>
      <AudioToText />
    </div>
  )
}

export default App
