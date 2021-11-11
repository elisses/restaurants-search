import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from "react-slick";

import logo from '../../assets/teste.svg';
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard } from '../../components';

import { Container, Search, Logo, Wrapper, Map, Carousel, CarouselTitle } from './styles';

const Home = () => {

    const [inputValue, setInputValue] = useState('');

    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt='Logo do restaurante' />
                    <TextField
                        label='Pesquisar Restaurantes'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
        </Wrapper>

    )
}


export default Home;
