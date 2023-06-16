import React, { useState } from 'react'

const HomePage = () => {
  const person = {
    name: 'john',
    age: 90

  };
  const showAlert = () => {
    alert('hello child');
  }
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add </button>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>minus  </button>

      </div>
      <section> data={person.name} show={showAlert}</section>


    </div>
  )
}

export default HomePage
