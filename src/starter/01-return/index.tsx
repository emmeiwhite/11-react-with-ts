// Revisit: Revisions are important for brain and good sleep as well

//1. Props

interface Kitaab {
  price: number
  title: string
}

export default function Book({ price, title }: Kitaab) {
  return (
    <div>
      <h3>Book Title: {title}</h3>
      <h3>Book Price:{price}</h3>
    </div>
  )
}
