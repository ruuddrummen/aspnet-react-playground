import * as React from "react"
import styled from "styled-components"

interface FlipCardProps {
    className: string
}

interface FlipCardState {
    flipped: boolean
}

const Center = styled.div`
    text-align: center;
`

class FlipCardComponent extends React.Component<FlipCardProps, FlipCardState> {
    constructor(props) {
        super(props)
        this.state = {
            flipped: false
        }
    }

    render() {
        return <div className={`${this.props.className} ${this.state.flipped ? "flip" : ""}`}>
            <div className="flipper">
                <div className="front">
                    <Center>
                        <h1>Front</h1>
                        <button onClick={() => this.setState({ flipped: true })}>Flip</button>
                    </Center>
                </div>
                <div className="back">
                    <Center>
                        <h1>Back</h1>
                        <button onClick={() => this.setState({ flipped: false })}>Flip</button>
                    </Center>
                </div>
            </div>
        </div>
    }
}

export const FlipCard = styled(FlipCardComponent) `
    perspective: 1000px;
    width: 320px;
    height: 480px;

    &.flip .flipper {
        transform: rotateY(180deg);
    }

    .front, .back {
        width: 320px;
        height: 480px;
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

    /* style front and back */
    .front {
        background-color: palevioletred;
    }

    .back {
        background-color: papayawhip;
    }
`