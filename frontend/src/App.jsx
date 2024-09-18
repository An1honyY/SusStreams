import './App.css'

function App() {

  return (
    <>
      <h1>SusStreams</h1>


      <div className="video" style={{height: "58vh", width: "100%"}}> {/* 2) change height to fit player*/}
        <iframe src="https://cricfree.live/live/embed/bt-sport-1" // 1) Replace this src link
          width='100%' height='100%' scrolling='no' frameborder='0' allowtransparency="true" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" referrerpolicy='unsafe-url'></iframe>
      </div>
    </>
  )
}

export default App
