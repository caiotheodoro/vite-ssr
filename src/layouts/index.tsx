import React from 'react'
import { AccessSections } from '../components/AccessSections'
import { Logo, Navbar } from './styles'

interface ILayoutProps {
    children: React.ReactNode
}

export function DefaultLayout({ children }: ILayoutProps) {
    return (
        <Navbar>
            <nav  >
                <Logo>
                    DB<span>Fy</span>
                </Logo>
                <div>
                    <AccessSections />
                </div>
            </nav>
            <main>
                {children}
            </main>
        </Navbar>
    )
}
