/* 1) ---
export default function Component(): null | JSX.Element {
  return null
  return <p>I am a component</p>
}
--- */
// Let's use type alias to save many many lines of code

type Person = {
  name: string
  id: number
}
/* ---
export default function Component({ name, id }: { name: string; id: number }) {
  console.log(name, id)
  return (
    <>
      <p>React with TypeScript is awesome!</p>
      <p>Just need to pay attention</p>
    </>
  )
}
--- */

// We can also use props directly
