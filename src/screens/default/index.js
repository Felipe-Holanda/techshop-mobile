import Card from "../../components/cards"
import { Header, H1, Input, DivKey, NoProd } from '../../style/elements'
import produtos from "../../services/products"
import { useState, useEffect } from "react"
import { FlatList, Keyboard, View } from "react-native"

export default function Home() {

    const [input, setInput] = useState('')
    const [data, setData] = useState(produtos)

    useEffect(() => {
        setData(produtos)

        if (input.length > 0) {
            const result = produtos.filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))
            setData(result)
        }
    }, [input])

    return (
        <>
            <View style={{
                shadowColor: 'black',
                shadowOpacity: 0.7,
                shadowOffset: { width: 1, height: 2 },
                shadowRadius: 10,
                elevation: 20,
                backgroundColor: 'white'
            }}>
                <Header>
                    <H1>Tech Shop</H1>
                </Header>
            </View>

            {
                data.length > 0 ? (
                    <FlatList
                        data={data}
                        keyExtractor={item => item.title}
                        renderItem={({ item }) => <Card props={item} />}
                        vertical
                    />
                ) : (
                    <NoProd>Nenhum produto encontrado</NoProd>
                )
            }

            <DivKey
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <Input placeholder="Buscar produto" value={input} onChangeText={(event) => setInput(event)} />
            </DivKey>
        </>
    )
}
