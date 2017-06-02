import * as React from "react"
import styled from "styled-components"
import { Props } from "../common"
import { CardContainer, Perspective, Flipper, Front, Back } from "./Controls"

interface FlipCardProps<TFront, TBack> extends Props {
  frontProps: TFront
  backProps: TBack
}

interface FlipCardState {
  flipped: boolean
  value: string
}

export interface CardFaceProps extends Props {
  flip?: () => void
}

export function flipCard<PFront extends CardFaceProps, PBack extends CardFaceProps>(
  FrontComponent: new () => React.Component<PFront, any>,
  BackComponent: new () => React.Component<PBack, any>
): React.ComponentClass<FlipCardProps<PFront, PBack>> {
  return class FlipCardComponent extends React.Component<FlipCardProps<PFront, PBack>, FlipCardState> {
    constructor(props: FlipCardProps<PFront, PBack>) {
      super(props)
      this.state = {
        flipped: false,
        value: ""
      }
    }

    flip = () => {
      this.setState({
        flipped: !this.state.flipped
      })
    }

    render() {
      return (
        <CardContainer>
          <Perspective>
            <Flipper flipped={this.state.flipped}>
              <Front>
                <FrontComponent {...this.props.frontProps as any} flip={this.flip} />
              </Front>
              <Back>
                <BackComponent {...this.props.backProps as any} flip={this.flip} />
              </Back>
            </Flipper>
          </Perspective>
        </CardContainer>
      )
    }
  }
}