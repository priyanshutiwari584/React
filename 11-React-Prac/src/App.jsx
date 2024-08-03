import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [pass, setPass] = useState('')
  const [type, setType] = useState('password');

  function convert() {
    console.log("click");
    if (text.length > 0) {
      document.getElementById('res').textContent = text.toUpperCase();
    }
  }

  function clear1() {
    if (text.length > 0) {
      setText('');
    }
  }

  const show = () => {
    setType((type == 'password') ? 'text' : 'password')
  }

  return (
    <>
      <label htmlFor="Name">Name:</label>
      <input type="text" className='border-2 border-red-500 outline-none ml-2 rounded-md'
        value={text}
        onChange={(e) => setText(e.target.value)} />
      <button className='border-2 border-red-500 ml-2 px-2 text-center rounded-md' onClick={e => convert()}>convert</button>
      <button className='border-2 border-red-500 ml-2 px-2 text-center rounded-md' onClick={e => clear1()}>clear</button>
      <br />
      <span>Result:
        <span className='ml-2'>{text.toUpperCase()}</span>
      </span>
      <br />
      <span>Result at convert:
        <span className='ml-2' id='res'></span>
      </span>

      <label htmlFor="Password">Password:</label>
      <input type={type} className='border-2 border-black ml-2 rounded-md' id='pass'
        onChange={e => setPass(e.target.value)} />
      <button className='border-2 border-black bg-green-400 px-2 ml-2 rounded-md'
        onClick={e => show()
        }>{type === 'password' ? 'Hide' : 'Show'}</button>
    </>
  )
}

export default App
