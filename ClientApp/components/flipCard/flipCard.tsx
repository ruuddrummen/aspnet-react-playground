import * as React from "react"
import { Props } from "../common"
import {
  CardContainer,
  Perspective,
  Card,
  CardFront,
  CardBack
} from "./Controls"

interface FlipCardProps<TFront, TBack> extends Props {
  frontProps: TFront
  backProps: TBack
}

interface FlipCardState {
  flipped: boolean
}

export interface CardFaceProps extends Props {
  flip?: () => void
}

export function flipCard<
  PFront extends CardFaceProps,
  PBack extends CardFaceProps
>(
  FrontComponent: new () => React.Component<PFront, any>,
  BackComponent: new () => React.Component<PBack, any>
) {
  return class FlipCardComponent extends React.Component<
    FlipCardProps<PFront, PBack>,
    FlipCardState
  > {
    constructor(props: FlipCardProps<PFront, PBack>) {
      super(props)
      this.state = {
        flipped: false
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
            <Card flipped={this.state.flipped}>
              <CardFront>
                <FrontComponent
                  {...this.props.frontProps as any}
                  flip={this.flip}
                />
              </CardFront>
              <CardBack>
                <BackComponent
                  {...this.props.backProps as any}
                  flip={this.flip}
                />
              </CardBack>
            </Card>
          </Perspective>
        </CardContainer>
      )
    }
  }
}
