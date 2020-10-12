import React from 'react';

class AddTodo extends React.component {
  handleContentsChange = (e) => {
    this.newContents = e.target.value;
  }

  handleAddBtnClicked = () => {
    this.props.onTodoAdd(this.newContents);
    this.input.current.value = '';
  }

  render() {
    return (
      <>
        <div className="add-todo">
          <button onClick={this.handleAddBtnClicked}>+</button>
          <input ref={this.input} onChange={this.handleContentsChange} type="text" placeholder="할 일 추가"/>
        </div>
      </>
    )
  }
}

// 다음에 주석으로 만든 것들과 같다
const mapDispatchToProps = {
  onTodoAdd: addTodo
}

// const mapDispatchToProps = (dispatch) => ({
//   onTodoAdd:(contents) => dispatch(addTodo(contentds));
// })

// bindActionCreators를 사용하면 onTodoAdd로 부를 수 있고 dispatch(addTodo)와 동일
// onTodoAdd에 전달한 인자가 addTodo로 전달된다
// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   onTodoAdd:addTodo
// }, dispatch);

// mapStateToProps로 필요한 state가 없으면 null만 넘겨도 된다
// export default connect(null, mapDispatchToProps)(AddTodo);
export default connect(null, {
  onTodoAdd:addTodo
})(AddTodo);
