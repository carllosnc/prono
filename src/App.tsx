import AudioToText from './components/audio-to-text/AudioToText'

function App() {
  return (
    <div className="w-full m-auto flex flex-col items-center gap-[40px]">
      <section className="w-full min-h-dvh max-w-[700px] pt-[40px] justify-start flex flex-col gap-[20px] px-[20px]">

        <div className="text-center flex flex-col items-center gap-[20px]">
          <h1 className="text-[30px] font-bold">PRONO</h1>
          <span className="text-neutral-400 block w-full max-w-[300px]">
            An easy and fast way to check your english pronounciation.
          </span>
        </div>

        <AudioToText />
      </section>
    </div>
  )
}

export default App
