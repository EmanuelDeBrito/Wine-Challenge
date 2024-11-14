import { ProductLengthArea } from './styled'

type Props = {
    length: number
}

export const ProductsLength = ({ length }: Props) => {
    return(
        <ProductLengthArea>
            <span>{length} </span>produtos encontrados
        </ProductLengthArea>
    )
}