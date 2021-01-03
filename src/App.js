import React from 'react';
import './App.css'
import styled from 'styled-components'
import Button from './Button';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const Heading=styled.h3`
margin:100px 0 30px 0;
width:93px;
height:36px;
font-family: 'Poppins', sans-serif;
font-size:24px;
line-height:36px;
`;

const Row=styled.div`
margin-left:10%;
`;

const Flex=styled.div`
display:flex;
`
const RightSpace = styled.div`
margin-right:50px;`

const Title=styled.p`
font-family: 'Ubuntu Mono', monospace;
font-size:12px;
line-height:12px;
`;

function App() {
  return (
    <div className="App">
      <Heading>Buttons</Heading>
      <Row>
          <Title>{'<Button />'}</Title>
           <Button variant="default">Default</Button>
      </Row>
      <br/>

      <Row>
          <Title>{'<Button variant=outline />'}</Title>
          <Button variant="outline">Default</Button>
      </Row>
      <br/>

      <Row>
          <Title>{'<Button variant=text />'}</Title>
          <Button variant='text'>Default</Button>
      </Row>
      <br/>

      <Row>
        <Title>{'<Button disableshadow />'}</Title>
        <Button variant="disableshadow">Default</Button>
      </Row>
      <br/>

      <Row>
        <Title>{'<Button disabled />'}</Title>
        <Button variant="disabled">Default</Button>
      </Row>
      <br/>

      <Row>
        <Flex>
          <RightSpace>
            <Title>{'<Button startIcon=local_grocery_store />'}</Title>
            <Button icon="start"><LocalGroceryStoreIcon id="m-icon" />Default</Button>
          </RightSpace>
          <RightSpace>
            <Title>{'<Button endIcon=local_grocery_store />'}</Title>
            <Button icon="end">Default <LocalGroceryStoreIcon id="m-icon" /></Button>
          </RightSpace>
        </Flex>
      </Row>
      <br/>

      <Row>
        <Flex>
          <RightSpace>
            <Title>{'<Button size=sm />'}</Title>
            <Button size="sm">Default</Button>
          </RightSpace>
          <RightSpace>
            <Title>{'<Button size=md />'}</Title>
            <Button size="md">Default</Button>
          </RightSpace>
          <RightSpace>
            <Title>{'<Button size=lg />'}</Title>
            <Button size="lg">Default</Button>
          </RightSpace>
        </Flex>
      </Row>
      <br/>

      <Row>
        <Flex>
          <RightSpace>
            <Title>{'<Button color=default />'}</Title>
            <Button color='default'>Default</Button>
          </RightSpace>
          <RightSpace>
            <Title>{'<Button color=primary />'}</Title>
            <Button color='primary'>Default</Button>
          </RightSpace>
          <RightSpace>
            <Title>{'<Button color=secondary />'}</Title>
            <Button color='secondary'>Default</Button>
          </RightSpace>
          <RightSpace>
            <Title>{'<Button color=danger />'}</Title>
            <Button color='danger'>Default</Button>
          </RightSpace>
        </Flex>
      </Row>
      <br/>

    </div>
  );
}

export default App;
