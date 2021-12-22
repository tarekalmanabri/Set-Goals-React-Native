import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [addMode, setAddMode] = useState(false)

  const goalHandler = (goalTitle) => {
    /* the item becomes an object that contains a random id and value of the entered item  */
    setCourseGoals(currentGoals => [...courseGoals, {id: Math.random().toString(), value: goalTitle}])
    setAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((item) => item.id !== goalId)
    } )
  }

  const addNewGoal = () => {
    setAddMode(true)
  }

  const cancelGoalHandler = () => {
    setAddMode(false)
  }

  return (
    /*FlatList is better for the performance, scrollable list that will scroll through the items on the page,
     if we use the ScrollView component, it will scroll through all the items even the not rendered ones */
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={addNewGoal} />
      <GoalInput visible={addMode} addGoal={goalHandler} onCancel={cancelGoalHandler} />
      <FlatList
        keyExtractor={(item)=> item.id}
        data={courseGoals}
        style={{paddingRight: 20}}
        renderItem={itemData => (
          <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
  padding: 50
  }
});
