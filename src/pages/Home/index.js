import React, { useState } from 'react';
import axios from 'axios'
import * as S from './styled'

export default function App(props) {

    const [usuario, setUsuario] = useState('')

    const handlePesquisa = () => {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response))
    }

    return (
        <>
            <h1> {usuario}</h1>
            <S.Container>
                <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}></S.Input>
                <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>

            </S.Container>
        </>
    );
}

