import { Container, Input, Label } from './styled'

type Props = {
    label: string
}

export const ChooseItem = ({ label }: Props) => {
    return(
        <Container>
            <Input type='radio'/>
            <Label>{label}</Label>
        </Container>
    )
}