import { StyleSheet, Text, View, Pressable } from 'react-native';

export const GoalItem = (props) => {
    return (
        <Pressable onPress={() => props.onDeleteItem(props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5E7AC4'
    },
    goalText: {
        color: 'white'
    }
})