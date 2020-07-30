import React from 'react';
import Menu from '../Menu/';
import Footer from '../Footer/';

import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--whit);
    flex: 1;
    color: var(--white);
    padding: 50px 5% 0 5%; 

`;

function PageDefault({ children }) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;