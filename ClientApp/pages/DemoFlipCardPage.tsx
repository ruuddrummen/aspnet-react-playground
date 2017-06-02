import * as React from "react"
import { DemoFlipCard } from "../components/DemoFlipCard"

export const DemoFlipCardPage: React.StatelessComponent<null> = props => {
  return (
    <div>
      <DemoFlipCard />
      <DemoFlipCard />
      <DemoFlipCard />
    </div>
  )
}