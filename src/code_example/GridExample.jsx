import React from 'react';
import { GridContainer, InputBox, Button } from '../components/commons';

const GridExample = () => (
  <GridContainer alignContent="space-around">
    <div style={{ gridColumnStart: '3', gridColumnEnd: '11' }}>
      <h1 style={{ textAlign: 'center' }}>
        This is a really really really long test text
      </h1>
    </div>
    <div
      style={{
        gridColumnStart: '5',
        gridColumnEnd: '9',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <InputBox placeholderText="Placeholder" width="300px" />
    </div>
    <Button
      text="SUBMIT"
      style={{ gridColumnStart: '5', gridColumnEnd: '9' }}
    />
  </GridContainer>
);

export default GridExample;
