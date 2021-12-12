import styled from 'styled-components'

export const Wrapper = styled.div<{invisible: boolean, rotate: boolean}>`
    visibility: ${props => props.invisible ? 'hidden' : 'initial'};
    transform: ${props => (props.rotate ? `rotateY(180deg)` : `rotateY(180deg)`)};
    
    @media(max-width: 780px) {
        width: 3rem;
        height: 5rem;
        margin: .4rem
    }
    `