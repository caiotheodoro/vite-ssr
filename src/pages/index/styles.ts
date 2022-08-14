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


export const MainPanel = styled.div`
    width: 100%;
    display: flex;
    margin: 100px auto;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-card']};

    span {
        display: contents;
        flex-direction: row;

    }

`

export const MainPanelDescription = styled.div`
    width: 100%;
    display: flex;
    margin: 50px auto;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 1.25rem;
    gap: 2rem;
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
        button {
            display: flex;
            gap: 0.5rem;
            justify-content: center;
            align-items: center;
            padding:0.5rem  2rem;
            transition: all 0.3s ease-in-out;
            height: 50px;
            border-radius: 10px;
            border: none;
            background: linear-gradient(-45deg, #0D0A0B, #4b2995, #4b2995);
            animation: gradient 15s ease infinite;
            background-size: 400% 400%;

            
        }

        button:hover {
            border: 2px solid ${({ theme }) => theme['base-card']};
            transform: scale(1.1);
        }

        button + button {
            background: linear-gradient(to right, #1db954, #4b2995);
        }

       

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
}

    }

`