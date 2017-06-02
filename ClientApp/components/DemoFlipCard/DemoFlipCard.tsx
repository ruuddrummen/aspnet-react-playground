import * as React from "react"
import styled from "styled-components"
import { Props } from "../common"
import { flipCard } from "../flipCard"
import { FrontFace, FrontFaceProps } from "./FrontFace"
import { BackFace, BackFaceProps } from "./BackFace"

interface DemoFlipCardState {
    value: string
    flipped: boolean
}

const DemoFlipCardComponent = flipCard(FrontFace, BackFace)

export class DemoFlipCard extends React.Component<null, DemoFlipCardState> {
    constructor() {
        super()
        this.state = {
            value: "",
            flipped: false
        }
    }

    updateValue = (value: string) => {
        this.setState({
            value: value
        })
    }

    render() {
        const frontProps: FrontFaceProps = { value: this.state.value }
        const backProps: BackFaceProps = { value: this.state.value, updateValue: this.updateValue }

        return (
            <DemoFlipCardComponent frontProps={frontProps} backProps={backProps} />
        )
    }
}