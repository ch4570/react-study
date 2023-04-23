import React from 'react';
import './App.css';

function App3() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };
  return (
    <div className="react">
      {/* 주석은 이렇게 작성 JSX */}
      {name}
    </div>
  );
}

export default App3;
