import * as React from "react"
import styled from "styled-components"
import { flipCard, CardFaceProps } from "../flipCard"
import { Header, Body, Footer, Button } from "./Controls"

export interface FrontFaceProps extends CardFaceProps {
    value: string
}

const FrontFaceComponent: React.StatelessComponent<FrontFaceProps> = props => {
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
                <Button onClick={flip}>Flip</Button>
            </Footer>
        </div>
    )
}

export const FrontFace = styled(FrontFaceComponent) `
    background-color: palevioletred;
`