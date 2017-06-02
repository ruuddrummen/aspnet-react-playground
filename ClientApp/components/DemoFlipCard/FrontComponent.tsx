import * as React from "react"
import styled from "styled-components"
import { flipCard, CardFaceProps } from "../flipCard"
import { Header, Body, Footer, FlipButton } from "./Controls"

export interface FrontProps extends CardFaceProps {
  value: string
}

const FrontComponent: React.StatelessComponent<FrontProps> = props => {
  const flip = (event: React.MouseEvent<HTMLButtonElement>) => props.flip()

  return (
    <div className={props.className}>
      <Header>
        <h1>Front</h1>
      </Header>
      <Body>
        <p>Flip and enter some text!</p>
        <h3>{props.value}</h3>
      </Body>
      <Footer>
        <FlipButton onClick={flip}>Flip</FlipButton>
      </Footer>
    </div>
  )
}

export const FrontFace = styled(FrontComponent) `
    background-color: palevioletred;
`