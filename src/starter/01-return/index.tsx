/** 3) children props --- */

import { type PropsWithChildren } from 'react'

type AnimalProps = PropsWithChildren<{
  name: string
  color: string
}>

export default function Animal(props: AnimalProps) {
  const { name, color, children } = props
  return (
    <main>
      <h2>Name of Animal: {name}</h2>
      <p>The animal has {color} color</p>
      <div>{children}</div>
    </main>
  )
}
