import { CardsContaier, ProdTitle, Btn, BtnText } from '../../style/elements'
import { Text, Image } from 'react-native'


export default function Card({ props }) {
    return (
        <CardsContaier>
            <Image source={{ uri: props.img }} style={{ width: 120, height: 120, alignSelf: 'center' }} />
            <ProdTitle>{props.title}</ProdTitle>
            <Text>R$ {props.price.toFixed(2).split('.').join(',')}</Text>
            <Btn><BtnText>Comprar</BtnText></Btn>
        </CardsContaier>
    )
}