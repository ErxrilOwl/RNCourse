import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView, 
  FlatList 
} from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    console.log('Add goal!', enteredGoalText);
    setCourseGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  }

  const deleteGoalHandler = (id) => {
    console.log(id);
    setCourseGoals(currentCourseGoals => {
      console.log(currentCourseGoals.filter(goal => {
        console.log(goal.id, id);
        return goal.id !== id;
      }))
      return currentCourseGoals.filter(goal => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}> 
        <FlatList 
          alwaysBounceVertical={false} 
          data={courseGoals} 
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} /> }
          />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 6,
  }
});
