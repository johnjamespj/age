import { useState, useEffect } from 'react';
import './App.css';
import { Container } from './Container'
import { AskDOB } from './Prompt'

function App() {
  const [shouldAsk, setShouldAsk] = useState(null)
  const [dob, setDob] = useState(new Date())

  useEffect(() => {
    if (window.localStorage) {
      let _dob = localStorage.getItem('dob')

      if (_dob !== null) {
        setDob(new Date(Date.parse(_dob.replace("-", "/"))))
        setShouldAsk(false)
      } else {
        setShouldAsk(true)
      }

    } else {
      alert("Grow up! use a better browser!")
    }

    // eslint-disable-next-line
  }, [dob, shouldAsk])


  return (
    <div className="App">
      {shouldAsk === null ? "" : shouldAsk ?
        <AskDOB onReturn={() => setShouldAsk(false)} /> :
        <Container dob={dob} averageAge={75} />}
    </div>
  );
}

export default App;
