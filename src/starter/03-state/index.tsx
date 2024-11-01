// useState is a Generic in TypeScript, however for the primitive types, TS infers the type

import { useState } from 'react'

// import { type PropsWithChildren } from 'react'

type Item = {
  id: number
  name: string
  price: number
  inStock: boolean
}

const items = [
  {
    id: 1,
    name: 'Apple',
    price: 0.5,
    inStock: true
  },
  {
    id: 2,
    name: 'Banana',
    price: 0.3,
    inStock: true
  },
  {
    id: 3,
    name: 'Orange',
    price: 0.7,
    inStock: false
  }
]

// type LifeChoresProps = PropsWithChildren<{}>

function LifeChores() {
  const [completed, setCompleted] = useState(false)
  const [totalKgs, setTotalKgs] = useState(3.5)
  const [list, setList] = useState<Item[]>(items)

  function handleSetters() {
    setCompleted(true)
    setTotalKgs(7)
  }
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>State</h2>

      {completed && <p>Course is Completed!</p>}

      <p>Total weight of rice is : {totalKgs} kgs</p>
      {list.map(item => (
        <p key={item.id}>
          {item.name} for {item.price} $
        </p>
      ))}

      <button
        className="btn btn-center"
        onClick={() => {
          setList([
            ...list,
            {
              id: 34,
              name: 'Mango',
              price: 0.8,
              inStock: true
            }
          ])
        }}
      >
        Explore
      </button>

      <button
        className="btn btn-center"
        onClick={handleSetters}
      ></button>
    </div>
  )
}
export default LifeChores
