import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView, 
  FlatList 
} from 'react-native';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    console.log('Add goal!', enteredGoalText);
    setCourseGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal!' 
          value={enteredGoalText}
          onChangeText={goalInputHandler} />
        <Button 
          title='Add Goal' 
          onPress={addGoalHandler} />
      </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 6,
  }
});
