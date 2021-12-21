import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

const GoalInput = (props) => {
  const [goal, setGoal] = useState('')

  const goalInputHandler = (text) => {
    setGoal(text)
  }

  return(
    <View style={styles.inputContainer} >
      <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler}
        value={goal} />
      <Button title="Click Me" onPress={() => props.addGoal(goal)} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10
  },
});

export default GoalInput
