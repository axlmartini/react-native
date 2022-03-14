import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Alert } from 'react-native';
import Event from './components/Event';

export default function App() {
  const [event, setEvent] = useState();
  const [eventItems, seteventItems] = useState([]);

  const handleAddEvent = () => {
    if (typeof(event) !== 'undefined' && event != null) {
      Keyboard.dismiss();
      seteventItems([...eventItems, {text: event, isComplete: false}]);
      setEvent(null);
    } else {
      Alert.alert("Error", "Invalid value");
    }
    
  }

  const deleteEvent = (index) => {
    let itemsCopy = [...eventItems];
    itemsCopy.splice(index, 1);
    seteventItems(itemsCopy)
  }

  const editEvent = (index) => {
    Alert.prompt("Edit Event", "Enter new value", text => {
      if (text.trim() !== '') {
        let itemsCopy = [...eventItems];
        itemsCopy[index] = {...itemsCopy[index], text: text};
        seteventItems(itemsCopy);
      } else {
        Alert.alert("Error", "Invalid value");
      }
    })
  }

  const completeEvent = (index) => {
    let itemsCopy = [...eventItems];
    itemsCopy[index] = {...itemsCopy[index], isComplete: !itemsCopy[index].isComplete};
    seteventItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Events</Text>
        <View style={styles.items}>
          {
            eventItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => Alert.alert("Actions", "Please select an action", [
                  {
                    text: "Delete",
                    onPress: () => deleteEvent(index)
                  },
                  {
                    text: "Edit",
                    onPress: () => editEvent(index)
                  },
                  {
                    text: (item.isComplete) ? "Mark as incomplete" : "Mark as complete",
                    onPress: () => completeEvent(index)
                  }
                ])}>
                  <Event item={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add an event'} value={event} onChangeText={text => setEvent(text)} />
        <TouchableOpacity onPress={() => handleAddEvent()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
