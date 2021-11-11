import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address } from './styles';

const RestaurantCard = () =>
(
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <p>Avaliacao</p>
            <Address>Endereco</Address>
        </RestaurantInfo>
    </Restaurant>
)

export default RestaurantCard;