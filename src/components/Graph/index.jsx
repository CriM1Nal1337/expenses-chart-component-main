import React from "react";
import styled from "styled-components";
import data from '../../../data.json';

const Graph = () => {
  const currentDay = new Date().getDay();

  return (
    <Div>
      {data.map((item, index) => (
        <Day key={index}>
          <GraphBar height={item.amount} iscurrentday={currentDay === index ? "true" : "false"} >
            <Hover>${item.amount}</Hover>
          </GraphBar>
          <DayList textContent={item.day} />
        </Day>
      ))}
    </Div>
  );
}

const breakpoints = {
  mobile: "440px",
};

const Div = styled.div`
  display: flex;
  gap: 1.55rem;
  justify-content: center;
  align-items: baseline;
  @media (max-width: ${breakpoints.mobile}) {
    gap: 1.1rem;
  }
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.3rem;
`;

const GraphBar = styled.div`
  position: relative;
  height: ${props => props.height * 2.3}px;
  width: 4rem;
  background-color: ${props => props.iscurrentday ? 'var(--Cyan)' : 'var(--Softred)'};
  border-radius: 0.5rem;
  margin-bottom: 0.8rem;
  transition: background-color 0.3s;
  @media (max-width: ${breakpoints.mobile}) {
    height: ${props => props.height * 2.9}px;
    width: 3.4rem;
  }
`;

const Hover = styled.div`
  position: absolute;
  top: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 1);
  color: white;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  opacity: 0;
  transition: opacity 0.3s;

  ${GraphBar}:hover & {
    opacity: 1;
  }
`;

const DayList = ({ textContent }) => {
  return <div>{textContent}</div>;
}

export default Graph;
