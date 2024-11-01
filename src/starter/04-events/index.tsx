import { useState } from 'react'

function Component() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        className="form-input mb-1"
      />

      <input
        type="email"
        value={email}
        onChange={handleEmail}
        className="form-input mb-1"
      />

      <button
        type="submit"
        className="btn btn-block"
      ></button>
    </form>
  )
}
export default Component
