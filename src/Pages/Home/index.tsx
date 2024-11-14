import { Container } from "../../components/mainComponents";
import { ChooseItem } from "../../components/ui/choose-item/choose-item";
import { Item } from "../../components/ui/Item/item";
import { Navigation } from "../../components/ui/navigation/navigation";
import { ProductsLength } from "../../components/ui/products-length/products-length";
import { Title } from "../../components/ui/title/title";
import { ChooseData } from "../../data/chooseData";
import { wineData } from "../../data/wineData";
import { WineList, ContainerHome, Left, Right, ChooseArea } from "./styled";

const Home = () => {
    return(
        <Container>
            <ContainerHome>

                <Left>
                    <Title label="Refine sua busca" />

                    <ChooseArea>
                        {ChooseData.map((item, key) => <ChooseItem key={key} label={item.label}/>)}
                    </ChooseArea>
                </Left>

                <Right>
                    <ProductsLength length={wineData.length}/>

                    <WineList>
                        {wineData.map((item, key) => <Item data={item} key={key}/>)}
                    </WineList>

                    <Navigation />
                </Right>

            </ContainerHome>
        </Container>
    )
}

export default Home;