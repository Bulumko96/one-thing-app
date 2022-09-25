import { useState } from 'react'
import JSConfetti from 'js-confetti'
import CustomForm from './components/CustomForm'
import OneThing from './components/OneThing'

const jsConfetti = new JSConfetti()


function getSuccessMessage(){
  const messages = ["Congrats!", "Great job!", "Don’t ya feel great?!", "Up, up, and up!", "Um…okay", "Did you though?", "Don’t feel like you tried your best…", "Forget about it!"];
  return messages[Math.floor(Math.random() * messages.length)];
}
function App() {
  const [thing, setThing] = useState("")
  const [isCompleted, setIsCompleted] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false)
  }

  const handleInput = (e) => {
    setThing(e.target.value);
  }

  const handleCompletedThing = async (e) => {
    e.target.setAttribute('disabled', true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: ["🫡", "📈", "🚀"]
    })
    e.target.removeAttribute('disabled');
    setThing("");
    setIsCompleted(true);
  }


  return (
    <main className='grid place-items-center min-h-screen
    bg-red-600 text-white'>
      <div className="grid place-items-center gap-8 m-8">
        { isCompleted && <CustomForm
          thing={thing}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          /> }
        {
          !isCompleted && <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
        }
      </div>
      
    </main>
  )
}

export default App
