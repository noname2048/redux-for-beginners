import { MdDelete, MdDone } from "react-icons/md";
import styled, { css } from "styled-components";

import React from "react";
import { actionCreators } from "../../store";
import { connect } from "react-redux";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text, toggleTodo, removeTodo }) {
  return (
    <TodoItemBlock>
      <CheckCircle onClick={toggleTodo} done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete onClick={removeTodo} />
      </Remove>
    </TodoItemBlock>
  );
}

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    removeTodo: () => dispatch(actionCreators.deleteToDo({ id: parseInt(ownProps.id) })),
    toggleTodo: () => dispatch(actionCreators.toggleToDo({ id: parseInt(ownProps.id) })),
  };
};

export default connect(null, mapDispatchProps)(TodoItem);
