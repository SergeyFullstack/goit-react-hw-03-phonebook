import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 20px 30px;
  margin-bottom: 30px;
  border: solid 2px grey;

  & label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  & button {
    border: none;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: #86b6ff;
  }
`;
