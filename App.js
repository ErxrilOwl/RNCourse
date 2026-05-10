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
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}> 
        <FlatList 
          alwaysBounceVertical={false} 
          data={courseGoals} 
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} /> }/>
        
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
