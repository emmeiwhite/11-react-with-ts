/* ---
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
