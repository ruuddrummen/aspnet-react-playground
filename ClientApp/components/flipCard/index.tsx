import * as React from "react"
import styled from "styled-components"
import { Props } from "../common"

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
  Front: new () => React.Component<PFront, any>,
  Back: new () => React.Component<PBack, any>
): React.ComponentClass<FlipCardProps<PFront, PBack>> {
  class FlipCardComponent extends React.Component<FlipCardProps<PFront, PBack>, FlipCardState> {
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
        <div className={this.props.className}>
          <div className={`${this.props.className} ${this.state.flipped ? "flip" : ""}`}>
            <div className="flipper">
              <div className="front">
                <Front {...this.props.frontProps as any} flip={this.flip} />
              </div>
              <div className="back">
                <Back {...this.props.backProps as any} flip={this.flip} />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return styled(FlipCardComponent) `
        display: inline-block;
        perspective: 1000px;
        width: 320px;
        margin: 0 10px;

        &.flip .flipper {
            transform: rotateY(180deg);
        }

        .front, .back {
            width: 100%;
        }

        /* flip speed goes here */
        .flipper {
            transition: 0.6s;
            transform-style: preserve-3d;

            position: relative;
        }

        /* hide back of pane during swap */
        .front, .back {
            backface-visibility: hidden;

            position: absolute;
            top: 0;
            left: 0;
        }

        /* front pane, placed above back */
        .front {
            z-index: 2;
            /* for firefox 31 */
            transform: rotateY(0deg);
        }

        /* back, initially hidden pane */
        .back {
            transform: rotateY(180deg);
        }
    `
}