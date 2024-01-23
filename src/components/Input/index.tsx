import styled from "styled-components";
import Subtitle from "../Subtitle";
import TextError from "../TextError";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
  padding-bottom: 1rem;
`;

const InputStyled = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  text-align: center;
  font-size: 14px;
`;

interface InputNumberProps {
  label: string;
  value: string;
  placeholder: string;
  minValue?: number;
  maxValue?: number;
}

export default function InputNumber(props: InputNumberProps) {
  console.log(props);
  return (
    <>
      <Container>
        <Subtitle>{props.label}</Subtitle>
        <InputStyled placeholder={props.placeholder} value={props.value} />
      </Container>
      <TextError>Error input message</TextError>
    </>
  );
}
