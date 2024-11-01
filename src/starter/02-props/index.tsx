import { type PropsWithChildren } from 'react'

type HouseProps = PropsWithChildren<{
  houseType: string
  housePrice: number
  houseAddress: string
}>

function House(props: HouseProps) {
  const { houseType, housePrice, houseAddress, children } = props
  return (
    <div className="align-center">
      <h1>House details</h1>
      <div>
        <p>Type of House: {houseType}</p>
        <p>Price of House: {housePrice}</p>
        <p>Address: {houseAddress}</p>
        {children}
      </div>
    </div>
  )
}
export default House
