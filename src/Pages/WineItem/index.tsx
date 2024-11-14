import { Container } from "../../components/mainComponents"
import { Back } from "../../components/ui/back/back"
import { ContainerWineItem } from "./styled"

const Page = () => {
    return(
        <Container>
            <ContainerWineItem>
                <Back icon="/left.png" label="Voltar"/>
            </ContainerWineItem>
        </Container>
    )
}

export default Page