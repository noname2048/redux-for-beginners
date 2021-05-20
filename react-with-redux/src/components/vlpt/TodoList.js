import React from 'react';
import TodoItem from './TodoItem';
import { connect } from "react-redux";
import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList({ toDos }) {
  console.log(toDos)
  return (
    <TodoListBlock>
      { toDos.map((toDo, idx) => <TodoItem key={toDo.id} text={toDo.text} done={true}/>) }
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
}

const mapStateToProps = (state) => {
  return { toDos: state }
}

export default connect (mapStateToProps, null)(TodoList);
