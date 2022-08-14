import React from 'react'
import { BannerContainer, Spashes1, Spashes2 } from './styles'


export function Banner() {
    return (
        <BannerContainer>
            <Spashes1 src='splash2.png' />
            <Spashes2 src='splash1.png' />
            <img src="banner.gif" alt="google" />
        </BannerContainer>
    )
}
