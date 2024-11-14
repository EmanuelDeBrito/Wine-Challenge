import { Container, Icon, Label } from './styled'

type Props = {
    label: string,
    icon: string
}

export const Back = ({ label, icon }: Props) => {
    return(
        <Container>
            <Icon src={icon}/>
            <Label>{label}</Label>
        </Container>
    )
}