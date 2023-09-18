import React from "react";
import styled from 'styled-components'
function Header(){
    return (
        <Headers>
            <Div>
                <H1>My balance</H1>
                <Span>$921.48 </Span>
            </Div>
            <Img src="src/assets/images/logo.svg" alt="Logo" />
        </Headers>
    )
}

const Headers = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    background-color: var(--Softred);
    margin-top: 33.2%;
    width: 43.8rem;
    border-radius: 1.8rem;
    padding: 1rem 3.2rem 0 1rem;
`
const Div = styled.div`
    padding: 1.6rem;
    color: var(--Verypaleorange);
`
const H1 = styled.h1`
    font-size: 1.4rem;
    margin-bottom: 0.9rem;
`

const Span = styled.span`
    font-size: 2.5rem;
    font-weight: 800;
`

const Img = styled.img`
    width: 14.5%;
    
`

export default Header