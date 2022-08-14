import React from 'react'
import { PageContextProvider } from './usePageContext'
import './PageShell.css'
import type { PageContext } from './types'
import { BackgroundAnimation } from '../Animations/Background'
import { DefaultLayout } from '../layouts'
export { PageShell }

function PageShell({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Content>
            <DefaultLayout>
              {children}
            </DefaultLayout>
          </Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      <BackgroundAnimation>
        <div className={'cover'} />
      </BackgroundAnimation>

      {children}
    </div>
  )
}


function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="page-content"
      style={{
        margin: '15px',
        paddingBottom: 50,
        minHeight: '100vh',
        position: `relative`,
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}

