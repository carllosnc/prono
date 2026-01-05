import AudioToText from './components/audio-to-text/AudioToText'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center py-20">
      <div className='flex flex-col items-center gap-[10px]'>
        <h1 className="text-4xl font-extrabold text-neutral-200 tracking-tight">
          PRONO
        </h1>
        <span className='text-neutral-600'> A easy way to test your english pronouciation </span>
      </div>

      <AudioToText />
    </div>
  )
}

export default App
