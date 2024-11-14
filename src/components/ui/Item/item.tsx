import { itemType } from "../../../types/itemType"
import { Button } from "../button/button"
import { Container, WineArea, WineImage, WineSeal, WineTitle, WinePriceArea, WinePrice, WineDescountArea, WinePartner, WineNotPartner } from "./styled"

type Props = {
    data: itemType
}

export const Item = ({ data }: Props) => {
    return(
        <Container>

            <WineArea>

                <WineImage src={data.image}/>

                <WineSeal src={data.seal} />

                <WineTitle>{data.title}</WineTitle>

                <WinePriceArea>
                    <WinePrice style={{textDecoration: data.descount === true ? 'line-through' : ''}}>R$ {data.price}</WinePrice>

                    {data.descount === true &&
                        <WineDescountArea>
                            60% OFF
                        </WineDescountArea>
                    }
                </WinePriceArea>

                <WinePartner>
                    Sócio Wine <span>R$ {data.clubPrice}</span>
                </WinePartner>

                <WineNotPartner>
                    Não sócio R$ 37,40
                </WineNotPartner>
            </WineArea>
            
            <Button label="Adicionar"/>
        </Container>
    )
}