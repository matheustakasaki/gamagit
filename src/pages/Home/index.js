import React, { useState } from 'react';
import axios from 'axios'
import * as S from './styled'
import { useHistory } from 'react-router-dom';
export default function App(props) {

    const history = useHistory();
    const [ usuario, setUsuario] = useState('');
    const [ erro,  setErro] = useState(false);


    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            const repositories = response.data;
            const repositoriesName = [];

            repositories.map((repository) => {
                repositoriesName.push(repository.name)
            });
            setErro(false)
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
            history.push('/repositories')
        })
        .catch( err => {
            setErro(true);
        })
    }

    return (
        <>
            <h1> {usuario}</h1>
            <S.Container>
                <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}></S.Input>
                <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>

                { erro ? <S.ErrorMessage>Erro parça</S.ErrorMessage> : ''}
                
            </S.Container>
        </>
    );
}

