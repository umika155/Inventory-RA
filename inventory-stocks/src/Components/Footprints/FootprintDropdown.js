// import React, { Component } from "react";
// import firebase from '../../config/firebaseConfig'
// import { Picker } from 'picker'

// export default class FootprintDropdown extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             dataSource: []
//         };
//     }
//     async get_firebase_list(){
//         return firebase.database().ref('footprints/').once('name').then(function(snapshot) {
//             var items = [];
//             snapshot.forEach(function(childSnapshot) {
//               var childKey = childSnapshot.key;
//               var childData = childSnapshot.val();
//               items.push(childData);
//             }); 
//             console.log("items_load: " + items)
//             return items;
//         });
//     }

//     async componentWillMount(){
//         this.setState({
//             dataSource: await this.get_firebase_list()
//         });
//         console.log("items: " + this.state.dataSource);
//     }

//     render() {
//         return (
//             <Picker
//                 onValueChange={(itemValue, itemIndex) => this.setState({footprints: itemValue})}>
//                 {this.state.dataSource.map((item, index) => {
//                     return (<Picker.Item label={item} value={index} key={index}/>) 
//                 })}
//             </Picker>
//         );
//     }
// }