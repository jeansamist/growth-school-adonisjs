import { FunctionComponent, ImgHTMLAttributes } from 'react'
import logo from '../assets/images/app-logo.svg'
export type AppLogoProps = ImgHTMLAttributes<HTMLImageElement>

export const AppLogo: FunctionComponent<AppLogoProps> = (props) => {
  return <img {...props} src={logo} alt="Growth School" />
}
