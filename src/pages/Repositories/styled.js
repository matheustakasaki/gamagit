import styled from 'styled-components';
import {Link} from 'react-router-dom' 
export const Title = styled.h1`
    text-align: center;
    font-family: sans-serif;
    font-size: 2rem;
    color: #2e6fa9;
`

export const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;
font-family: sans-serif;
`

export const ListItem = styled.li`
margin: .5rem 0;
background-color: #000;
color: #fff;
padding: .5rem;
`

export const LinkHome = styled( Link)`
    width: 4rem;
    text-decoration: none;
    text-align: center;
`