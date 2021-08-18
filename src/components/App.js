import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f1f1f1;
  margin: 0;
  min-height: 100vh;
`;

const Paper = styled.div`
  width: 480px !important;
  background-color: white;
`;

class App extends Component {
  render() {
    return (
      <Container className="row flex-center flex-middle">
        <Paper className="border border-primary padding-large margin-large no-responsive">
          <h3 className="margin-small">TodoX</h3>
          <AddTodo />
          <TodoList />
        </Paper>
      </Container>
    );
  }
}

export default App;
