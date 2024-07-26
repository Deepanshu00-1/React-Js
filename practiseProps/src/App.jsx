
import './App.css'

function Car(){
    return <h2 contenteditable="true" style={{fontSize:'10vh'}}>I am a Car!</h2>;
}

function App() {
  return(
    <>
    <h1>Who lives in my Garage?</h1>
    <Car />
    </>
  )
}
export default App
