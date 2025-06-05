import styled from "styled-components";

export const Container =styled.div`
        width:100%;
        height:100vh;
        background-color: #D3D3D3;

        display: flex;
        align-items: center;
        justify-content: center;
`
export const historico = styled.div`
        background-color:rgb(231, 18, 18);
        width: 30%;
        min-height:350px;
        margin-left: 20px;
        padding: 10px;
        display:flex;
        flex-direction:column;
        overflow-y: auto;
`

export const Calculadora = styled.div`
        background-color: #FFFFFF;
        width: 18%;
        min-height:350px;
        display:flex;
        flex-direction:column;
`
export const Linha =styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-itens:center;
`

export const Coluna=styled.div`
        display:flex
        flex-direction:column;
        justify-content:space-between;
        align-itens:center;

`

export const Botao=styled.button`
        width:50px;
        height:50px;
        margin:5px;
        font-size:1.5rem;
        cursor:pointer;

`

