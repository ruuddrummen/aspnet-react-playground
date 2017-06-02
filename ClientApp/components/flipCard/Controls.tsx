import * as React from "react"
import styled from "styled-components"
import { Props } from "../common"

export const CardContainer = styled.div`
  display: inline-block;
  width: 320px;
  margin: 0 10px;
`

export const Perspective = styled.div`
  perspective: 1000px;
`

interface FlipperProps extends Props {
  flipped: boolean
}

const FlipperComponent: React.StatelessComponent<FlipperProps> = props => (
  <div className={props.className}>
    {props.children}
  </div>
)

export const Card = styled(FlipperComponent) `
  transition: 0.6s;
  transform-style: preserve-3d;

  position: relative;

  transform: ${props => props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`

const CardFace = styled.div`
  width: 100%;
  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;
`

export const CardFront = styled(CardFace) `
  z-index: 2;
  /* for firefox 31 */
  transform: rotateY(0deg);
`

export const CardBack = styled(CardFace) `
  transform: rotateY(180deg);
`