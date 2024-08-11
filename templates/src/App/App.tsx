import { Fragment, useState } from 'react';
import styled from 'styled-components';

import { Head } from '@/components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Head />
      <Container>
        <UpperContainer>1233</UpperContainer>
        <h1>Create Joonho App</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
      </Container>
    </Fragment>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background-color: #000000;

  color: white;
`;

const UpperContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
