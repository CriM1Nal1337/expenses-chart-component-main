import React from "react";
import styled from "styled-components";
import Graph from "../Graph";

function Main() {
    return (
        <Mains>
            <H2>Spending - Last 7 days</H2>
            <div>
                <Graph />
            </div>
            <Line />
            <Div>
                <div>
                    <TextMounth>Total this month</TextMounth>
                    <ThisMounth>$478.33</ThisMounth>
                </div>
                <DivRight>
                    <LastMounth>+2.4%</LastMounth>
                    <TextMounth>from last month</TextMounth>
                </DivRight>
            </Div>
        </Mains>
    )
}

const breakpoints = {
    mobile: "440px",
  };

const Mains = styled.main`
    background-color: var(--Verypaleorange);
    border-radius: 2rem;
`

const H2 = styled.h2`
    font-size: 2.5rem;
    padding: 2.8rem 2rem 5.3rem 3.2rem;
    @media (max-width: ${breakpoints.mobile}) {
        padding: 2.5rem 2.2rem 5.2rem;
        font-size: 2.3rem;
    }
`

const Line = styled.hr`
    background-color: gray;
    margin: 2.4rem 3.6rem 1rem;
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
`
const ThisMounth = styled.span`
    font-size: 4rem;
    font-weight: 700;
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 3rem;
    }
`

const LastMounth = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
`

const TextMounth = styled.p`
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--Mediumbrown);
`

const DivRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default Main