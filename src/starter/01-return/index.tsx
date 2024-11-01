/* 1) ---
export default function Component(): null | JSX.Element {
  return null
  return <p>I am a component</p>
}
--- */

export default function Component({ name, id }: { name: string; id: number }) {
  console.log(name, id)
  return (
    <>
      <p>React with TypeScript is awesome!</p>
      <p>Just need to pay attention</p>
    </>
  )
}
