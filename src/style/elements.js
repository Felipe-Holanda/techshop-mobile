import styled from 'styled-components';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'

export const CardsContaier = styled(View)`
    background-color: #fff;
    border: 1px solid gray;
    margin: 5px;
    border-radius: 10px;
    padding: 5px;
`
export const Header = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    padding: 10px;
`
export const H1 = styled(Text)`
    margin-top: 10px;
    color: #000;
    font-size: 25px;
    font-wheight: bold;
`
export const ListContainer = styled(View)`
    background-color: #f2f2f2;
    padding: 5px;
`
export const ProdTitle = styled(Text)`
    font-size: 16px;
    font-weight: bolder;
    margin: 10px 0;
`
export const Btn = styled(TouchableOpacity)`
    background-color: #0d60a3;
    padding: 10px;
    margin: 5px;
    align-items: center;
    border-radius: 10px;
`
export const BtnText = styled(Text)`
    color: #fff;
`
export const Input = styled(TextInput).attrs({ placeholderTextColor: 'gray' })`
    border: 1px solid gray;
    height: 40px;
    width: 100%;
    text-align: center;
`
export const DivKey = styled(KeyboardAvoidingView)`
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    shadowColor: #000;
`
export const NoProd = styled(Text)`
    font-size: 18px;
    text-align: center;
`