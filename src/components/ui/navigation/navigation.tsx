import { Container, NavigationItem, NavigationText } from './styled'

export const Navigation = () => {
    return(
        <Container>
            <NavigationItem active={true}>1</NavigationItem>
            <NavigationItem big={true}>2</NavigationItem>
            <NavigationItem>3</NavigationItem>
            <NavigationText>...</NavigationText>
            <NavigationText>Próximo</NavigationText>
        </Container>
    )
}