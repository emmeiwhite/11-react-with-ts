import Component from './starter/02-props'

function App() {
  return (
    <main>
      <Component
        houseAddress="123, Thanisansdra main road 5th cross"
        housePrice={67676768}
        houseType="Banglow"
      >
        <button className="btn btn-center py-2 px-3">Explore</button>
      </Component>
    </main>
  )
}

export default App
