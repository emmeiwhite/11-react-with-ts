/* --- A) De-structuring props and annotating as object
function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Id: {id}</h1>
    </div>
  )
}
export default Component
--- */

/* --- B) Using type
type ComponentProps = { name: string; id: number }

function Component({ name, id }: ComponentProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Id: {id}</h1>
    </div>
  )
}
export default Component
--- */

/* --- C) children prop
type ComponentProps = {
  name: string
  id: number
  children?: React.ReactNode
}

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Id: {id}</h1>
      {children}
    </div>
  )
}
export default Component

--- */

import { type PropsWithChildren } from 'react'

type ComponentProps = PropsWithChildren<{
  name: string
  id: number
}>

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Id: {id}</h1>
      {children}
    </div>
  )
}
export default Component
