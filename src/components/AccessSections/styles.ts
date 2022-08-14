import styled from "styled-components";

export const AccessSectionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  span {
    font-size: 1.25rem;
    font-weight: 700;
    background: -webkit-linear-gradient(-45deg, #1db954, #1ed760, #ee7752, #e73c7e, #23a6d5);
    -webkit-background-clip: text;
    background-size: 400% 400%;
    -webkit-text-fill-color: transparent;
    animation: gradient 15s ease infinite;
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


  
`