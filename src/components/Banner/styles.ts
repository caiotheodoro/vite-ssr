import styled from 'styled-components'

export const BannerContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    img {
        width: 80%;
        height: auto;
        border-radius: 10px;

    }
  
`

const Spashes = styled.img`
position: absolute;
width: 300px; 
height: auto;

`

export const Spashes1 = styled(Spashes)`
right: -120px;
bottom: -100px;

@media (max-width: 1015px) {
    display: none;
}

`

export const Spashes2 = styled(Spashes)`
left: -200px;
top: -5px;

@media (max-width: 1015px) {
    display: none;
}

`
