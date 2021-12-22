import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';
import { useState } from 'react';

const GoalInput = (props) => {
  const [goal, setGoal] = useState('')

  const goalInputHandler = (text) => {
    setGoal(text)
  }

  const addGoalHandler = () => {
    if(goal !== ''){
      props.addGoal(goal)
      setGoal('')}
    else {
      alert("You should enter a goal")
    }
  }

  return(
    <Modal visible={props.visible} animationType='slide' >
      <View style={styles.inputContainer} >
        <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler}
          value={goal} />
        <View style={styles.buttonsWrapper}>
          <Button title="Cancel" color='red' onPress={props.onCancel} />
          <Button title="Add" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 10
  }
});

export default GoalInput
