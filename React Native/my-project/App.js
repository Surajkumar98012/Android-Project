import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TextInput,ScrollView, FlatList,TouchableOpacity} from 'react-native';

export default function App() {
  const[name,setName]=useState('suraj');
  const[person,setPerson]=useState({name:'sivam',age:20});
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  const clickHandler=()=>{
    setName('sivansh');
    setPerson({name:'neha',age:'18'});
  };

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id  != id);
    });
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text>My first react native app</Text>
       </View>
       <View style={styles.body}>
         <Text>my name is {name}</Text>
         <Text>my name is summit</Text>
         <Text>His name is {person.name} and he is {person.age} year old</Text>
         <Text>Enter Name:</Text>
         <TextInput 
         multiline
         keyboardType='default'
         style={styles.input}
         placeholder='e.g. John Doe'
         onChangeText={(val)=>setName(val)}
         />
       </View>

       {/* <ScrollView>
        {people.map((item)=>{
          return(
            <View key={item.}>
            <Text style={styles.item}> {item.name}</Text>
            </View>
          )
        })}
       </ScrollView> */}



       <View style={styles.container2}>

       <FlatList 
         numColumns={2}
         keyExtractor={(item) => item.id} 
         data={people} 
         renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
         )}
       />
 
     </View>

       <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler} />
       </View>


    <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  },
  buttonContainer:{
    backgroundColor:'green',
    margin:20,
  },
  input:{
    borderWidth:1,
    borderColor:'grey',
    padding:8,
    width:200,
    margin:10,
  },
  container2: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
  item1: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
