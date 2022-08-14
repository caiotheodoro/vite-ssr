import styled from 'styled-components'

export const Navbar = styled.header`
    width: 100%;
    margin: auto;
    padding: 400px auto;
    position: absolute;
    nav {
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding: 4;
    }
  
`


export const Logo = styled.div`
    font-weight: bold;
    font-size: 1.875rem;
    color: #fff;
    border-radius: 50%;
    margin-bottom: -1px;
    padding: 0.5rem;
    border-bottom: 2px solid #fff;

    span {
        color: ${({ theme }) => theme['green']};
    }
`