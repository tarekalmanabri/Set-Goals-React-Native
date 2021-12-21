import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
   /* TouchableOpacity a component that will change the opacity of the item clicked, it takes functions */
    <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem:{
    backgroundColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    overflow: 'hidden'
  }
});

export default GoalItem

