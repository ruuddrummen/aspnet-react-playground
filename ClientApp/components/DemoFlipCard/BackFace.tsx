import * as React from "react"
import styled from "styled-components"
import { flipCard, CardFaceProps } from "../flipCard"
import { Header, Body, Footer, Button } from "./Controls"

export interface BackFaceProps extends CardFaceProps {
    value: string
    updateValue: (value: string) => void
}

const BackFaceComponent: React.StatelessComponent<BackFaceProps> = props => {
    const flip = (event: React.MouseEvent<HTMLButtonElement>) => (props.flip())
    const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => (props.updateValue(event.currentTarget.value))

    return (
        <div className={props.className}>
            <Header>
                <h1>Back</h1>
            </Header>
            <Body>
                <p>Type some text and flip!</p>
                <input value={props.value} onChange={updateValue} />
            </Body>
            <Footer>
                <Button onClick={flip}>Flip</Button>
            </Footer>
        </div>
    )
}

export const BackFace = styled(BackFaceComponent) `
    background-color: papayawhip;
`