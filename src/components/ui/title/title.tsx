import { TitleText } from "./styled"

type Props = {
    label: string
}

export const Title = ({ label }: Props) => {
    return(
        <TitleText>
            {label}
        </TitleText>
    )
}