import '@fontsource/archivo'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import GlobalStyles from '../components/GlobalStyles'

function TemplateApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <GlobalStyles />
    </RecoilRoot>
  )
}

export default TemplateApp
