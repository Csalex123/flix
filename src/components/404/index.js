import React from 'react';
import { Link } from 'react-router-dom';

function index(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>ERROR 404 - Página não encontrada</h1>
            <Link to="/">
                <button>Voltar para home</button>
            </Link>
        </div>
    );
}

export default index;