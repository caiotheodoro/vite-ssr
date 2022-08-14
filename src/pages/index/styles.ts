import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    img {
        width: 80%;
        height: auto;
    }
  
`

const Spashes = styled.img`
position: absolute;
width: 300px; 
height: auto;
`

export const Spashes1 = styled(Spashes)`
right: -130px;
bottom: -100px;
`

export const Spashes2 = styled(Spashes)`
left: -242px;
top: -6px;
`
