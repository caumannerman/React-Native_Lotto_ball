import * as React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from 'styled-components/native';
// 기능 
// 1부터 45의 숫자를 생성

let numbers = [];
_.times(45, n => numbers.push(n+1) );
// 섞는다
numbers = _.shuffle(numbers);



const Container = styled.SafeAreaView`
   flex: 1;
   paddingTop: ${Constants.statusBarHeight}px;
   justifyContent: center;
   align-items: center;
`;
const Row = styled.View`
    flex-direction: row;
    margin-bottom: 24px;
`;

const Ball =  styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    backgroundColor: ${props => {
      if( props.value < 11){
        return '#e5e251';
      }
      else if(props.value < 21){
        return '#517FE5'
      }
      else if(props.value < 31){
        return '#E54036';
      }
      else if(props.value < 41){
        return '#e500e5';
      }
      else{
        return '#43BF74';
      }

    }};
    justifyContent: center;
    align-items: center;
`;

const Label = styled.Text`
   fontSize: 20;
    color: #ffffff;
    fontWeight: bold;
`;

export default function App() {
  //상태변화 state
  const [ displayNumbers, setNumbers ] = React.useState(_.shuffle(numbers)); // Hook
  // displayNumbers - 상태 읽기 전용 값
  // setNumbers - 상태 변경 위한 업데이트 함수
  return (
    <>
  
      <Container>
            <Row>
              <Ball  value = {displayNumbers[0]}>
              <Label> {displayNumbers[0]}</Label>
              </Ball>

              <Ball value = {displayNumbers[1]}><Label> {displayNumbers[1]}</Label></Ball>
              <Ball value = {displayNumbers[2]}><Label> {displayNumbers[2]}</Label></Ball>
              <Ball value = {displayNumbers[3]}><Label> {displayNumbers[3]}</Label></Ball>
              <Ball value = {displayNumbers[4]}><Label> {displayNumbers[4]}</Label></Ball>
              <Ball value = {displayNumbers[5]}><Label> {displayNumbers[5]}</Label></Ball>
              <Ball value = {displayNumbers[6]}><Label> {displayNumbers[6]}</Label></Ball>
            </Row>
            <Button title="다시 뽑기" onPress={ () => setNumbers(_.shuffle(numbers))}/>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row:{
    flexDirection: 'row',
    marginBottom: 24,
  },
  ball:{
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#e5e5e5',
      justifyContent: 'center',
      alignItems: 'center',
  },
  text:{
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  }
});
