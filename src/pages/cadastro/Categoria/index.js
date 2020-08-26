import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function Categoria(props) {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form>
                
            </form>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default Categoria;