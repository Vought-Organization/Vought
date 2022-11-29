import styled from"styled-components";

export const Caixa = styled.div `
  display: flex;
  background-color: rgba(242, 242, 242, 0.826);;
  width: 100%;
  height: 500px;
  overflow: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxFormulario = styled.div `
  width: 100%;
  max-width: 1000px;
  height: 80%;
  background-color: #FFFFFF;
  margin-top: 20px;
  padding: 20px 30px;
  gap: 10px;
`;

export const InputData = styled.input `
  width: 100%;
  height: 20px;
  border: 1px solid rgb(197, 197, 197);;
  outline: 0;
  height: 50px;
  border-radius: 3px;
  padding: 2px 12px;
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
