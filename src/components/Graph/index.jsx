import React from "react";
import styled from "styled-components";
import data from '../../../data.json';

const Graph = () => {
  // Obtém o dia atual da semana (0 para domingo, 1 para segunda-feira, etc.)
  const currentDay = new Date().getDay();

  return (
    <Div>
      {data.map((item, index) => (
        <Day key={index}>
          <GraphBar height={item.amount} isCurrentDay={currentDay === index} />
          <DayList textContent={item.day} />
        </Day>
      ))}
    </Div>
  );
}

const Div = styled.div`
    display: flex;
    gap: 1.55rem;
    justify-content: center;
    align-items: baseline;
`
const Day = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.3rem;
`

const GraphBar = styled.div`
    height: ${props => props.height * 2.3}px;
    width: 4rem;
    background-color: ${props => props.isCurrentDay ? 'var(--Cyan)' : 'var(--Softred)'};
    border-radius: 0.5rem;
    margin-bottom: 0.8rem;
`

const DayList = ({ textContent }) => {
  return <div>{textContent}</div>;
}

export default Graph;
