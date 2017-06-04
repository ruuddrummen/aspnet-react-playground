import * as React from "react"
import styled from "styled-components"
import { CardFaceProps } from "../flipCard"
import { Header, Body, Footer, FlipButton } from "./Controls"

export interface BackProps extends CardFaceProps {
  value: string
  updateValue: (value: string) => void
}

const BackComponent: React.StatelessComponent<BackProps> = props => {
  const flip = (event: React.MouseEvent<HTMLButtonElement>) => props.flip()
  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.updateValue(event.currentTarget.value)

  return (
    <div className={props.className}>
      <Header>
        Back
      </Header>
      <Body>
        <p>Type some text and flip!</p>
        <input value={props.value} onChange={updateValue} />
      </Body>
      <Footer>
        <FlipButton onClick={flip}>Flip</FlipButton>
      </Footer>
    </div>
  )
}

export const BackFace = styled(BackComponent)`
  overflow: auto;
  background-color: papayawhip;
`
