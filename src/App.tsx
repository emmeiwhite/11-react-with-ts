import Component from './starter/01-return'

function App() {
  return (
    <main>
      <Component
        name="John"
        id={123}
      />

      <Component>
        <h4>This goes in the children prop</h4>
      </Component>
    </main>
  )
}

export default App
