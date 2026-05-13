import { StyleSheet, Text, View, Pressable } from 'react-native';

export const GoalItem = (props) => {
    return (
        
            <View style={styles.goalItem}>
                <Pressable 
                    android_ripple={{ color: '#546eb5' }} 
                    onPress={() => props.onDeleteItem(props.id)}
                    style={({ pressed }) => pressed && styles.pressedItem}
                >
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
                </Pressable>
            </View>
        
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5E7AC4'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        padding: 8,
        color: 'white'
    }
})