import * as React from "react"
import { flipCard } from "../flipCard"
import { FrontFace, FrontProps } from "./FrontComponent"
import { BackFace, BackProps } from "./BackComponent"

interface DemoFlipCardState {
  value: string
}

const DemoFlipCardComponent = flipCard(FrontFace, BackFace)

export class DemoFlipCard extends React.Component<null, DemoFlipCardState> {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }

  updateValue = (value: string) => {
    this.setState({
      value: value
    })
  }

  render() {
    const frontProps: FrontProps = { value: this.state.value }
    const backProps: BackProps = {
      value: this.state.value,
      updateValue: this.updateValue
    }

    return (
      <DemoFlipCardComponent frontProps={frontProps} backProps={backProps} />
    )
  }
}
