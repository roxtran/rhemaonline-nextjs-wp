import { FunctionComponent, ReactNode } from 'react'
import { Container as StyledContainer } from '../../styles/GlobalStyle'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
