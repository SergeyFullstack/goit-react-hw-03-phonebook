import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  width: 300px;

  margin-bottom: 10px;

  & button {
    border: none;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: #ff2c2c;
    color: #fff;
  }
`;
