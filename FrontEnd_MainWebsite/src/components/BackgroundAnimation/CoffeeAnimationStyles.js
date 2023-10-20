import styled from "styled-components"
import { keyframes } from "styled-components"


export const breatheAnimation = keyframes`
    50% {  
        transform: translateY(var(--steam-height));
    }
`

export const CoffeeAnim = styled.div`
    --body-bg: rgba(0, 0, 0, 0.0);
    --steam-color: silver;
    --coffee-color: ${props => props.theme.colors.palette2};
    --steam-animation: ${breatheAnimation} 2500ms ease infinite;
    --steam-height: -10px;
    --steam-start-height: 8px;
    --steam1-delay: 100ms;
    --steam2-delay: 250ms;
    --steam3-delay: 50ms;

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--body-bg);
    height: 100vh ;
    box-sizing: border-box;

    width: 300px;
    height: 300px;
`

export const Steam1 = styled.path`
    overflow: hidden;
    fill: var(--steam-color);
    transform: translateY(var(--steam-start-height));
    animation: var(--steam-animation);
    animation-delay: var(--steam1-delay);
`

export const Steam2 = styled.path`
    overflow: hidden;
    fill: var(--steam-color);
    transform: translateY(var(--steam-start-height));
    animation: var(--steam-animation);
    animation-delay: var(--steam2-delay);
`

export const Steam3 = styled.path`
    overflow: hidden;
    fill: var(--steam-color);
    transform: translateY(var(--steam-start-height));
    animation: var(--steam-animation);
    animation-delay: var(--steam3-delay);
`

export const CoffeeCup = styled.path`
    overflow: hidden;
    fill: var(--coffee-color);
`