import styled from 'styled-components'
import Stol from '../../img/drevo.jpg'

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    background:  url(${Stol});
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    
    
    .table {
        flex-wrap: wrap;
        width: 50rem;
        display: flex;
        
    }
`