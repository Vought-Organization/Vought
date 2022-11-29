import styled from "styled-components";

export const Box = styled.div `
  display: flex;
  background-color: rgba(242, 242, 242, 0.826);;
  width: 100%;
  height: 1080px;
  overflow: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxFormulario = styled.div `
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 90%;
  background-color: #FFFFFF;
  margin-top: 20px;
  padding: 20px 30px;
  gap: 10px;
`;

export const TituloBoxFormulario = styled.h1 `
  color: #530A4C;
  font-size: 20px;
`;

export const BoxLadoEsquerdo = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding: 20px 1px;
  gap: 30px;
`;

export const FormCEP = styled.form `
`;

export const InputCEP = styled.input `
  width: 100%;
  height: 20px;
  border: 1px solid rgb(197, 197, 197);;
  outline: 0;
  height: 50px;
  border-radius: 3px;
  padding: 2px 12px;
`;

export const InputEndereco = styled.input `
  width: 100%;
  height: 20px;
  border: 1px solid rgb(197, 197, 197);;
  outline: 0;
  height: 50px;
  border-radius: 3px;
  padding: 2px 12px;
  cursor: not-allowed;
`;

export const InputEndereco2 = styled.input `
  width: 100%;
  height: 20px;
  border: 1px solid rgb(197, 197, 197);;
  outline: 0;
  height: 50px;
  border-radius: 3px;
  padding: 2px 12px;
  cursor: not-allowed;

`;

export const BoxLadoDireito = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding: 20px 1px;
  gap: 30px;
`;

export const BotaoPublicar = styled.button `
  width: 100%;
  height: 40px;
  outline: 0;
  border: none;
  background-color: #530A4C;
  color: #FFFFFF;
  border-radius: 3px
`

export const InputData = styled.input `
  width: 100%;
  height: 20px;
  border: 1px solid rgb(197, 197, 197);;
  outline: 0;
  height: 50px;
  border-radius: 3px;
  padding: 2px 12px;
`;



