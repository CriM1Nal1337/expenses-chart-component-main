import React from "react";
import styled from "styled-components";
import Graph from "../Graph";

function Main() {
    return (
        <Mains>
            <h2>Spending - Last 7 days</h2>
            <div>
                <Graph />
            </div>

            <div>
                <div>
                    <h3>Total this month</h3>
                    <span>$478.33</span>
                </div>
                <div>
                    <span>+2.4%</span>
                    <h3>from last month</h3>
                </div>
            </div>
        </Mains>
    )
}

const Mains = styled.main`
    background-color: var(--Verypaleorange);
    border-radius: 2rem;
`
export default Main