import * as React from "react"
import { DemoFlipCard } from "./DemoFlipCard"

export const DemoFlipCardPage: React.StatelessComponent<null> = props => {
    return (
        <div>
            <DemoFlipCard />
            <DemoFlipCard />
            <DemoFlipCard />
        </div>
    )
}