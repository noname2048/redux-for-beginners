import React from "react"
import { actionCreators } from "../store"
import { connect } from "react-redux";

function ToDo({text, onBtnClick}) {
    return <li>{text} <button onClick={onBtnClick}>DEL</button></li>;
}

function mapStateToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapStateToProps) (ToDo);
