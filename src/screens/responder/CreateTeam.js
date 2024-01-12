import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const CreateTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');
  const [memberName, setMemberName] = useState('');
  const [location, setLocation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [members, setMembers] = useState([]);

  const addMember = () => {
    if (memberName.trim() !== '') {
      setMembers([...members, memberName]);
      setMemberName('');
    }
  };

  const createTeam = () => {
    // Implement logic to create the team
    console.log('Creating Team...', { teamName, teamDescription, location, specialization, members });
    // Additional logic, e.g., API calls, can be added here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Team</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Team Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter team name"
          value={teamName}
          onChangeText={(text) => setTeamName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Team Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter team description"
          value={teamDescription}
          onChangeText={(text) => setTeamDescription(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter team location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Specialization</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter team specialization"
          value={specialization}
          onChangeText={(text) => setSpecialization(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Team Members</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter member's name"
          value={memberName}
          onChangeText={(text) => setMemberName(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addMember}>
          <Text style={styles.addButtonText}>Add Member</Text>
        </TouchableOpacity>
        <Text style={styles.membersLabel}>Members:</Text>
        {members.map((member, index) => (
          <Text key={index} style={styles.memberText}>
            {member}
          </Text>
        ))}
      </View>

      <TouchableOpacity style={styles.createButton} onPress={createTeam}>
        <Text style={styles.createButtonText}>Create Team</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  membersLabel: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  memberText: {
    fontSize: 16,
  },
  createButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateTeam;









// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// const CreateTeam = () => {
//   const [teamName, setTeamName] = useState('');
//   const [teamDescription, setTeamDescription] = useState('');
//   const [memberName, setMemberName] = useState('');
//   const [members, setMembers] = useState([]);

//   const addMember = () => {
//     if (memberName.trim() !== '') {
//       setMembers([...members, memberName]);
//       setMemberName('');
//     }
//   };

//   const createTeam = () => {
//     // Implement logic to create the team
//     console.log('Creating Team...', { teamName, teamDescription, members });
//     // Additional logic, e.g., API calls, can be added here
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Create Team</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Team Name</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter team name"
//           value={teamName}
//           onChangeText={(text) => setTeamName(text)}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Team Description</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter team description"
//           value={teamDescription}
//           onChangeText={(text) => setTeamDescription(text)}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Team Members</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter member's name"
//           value={memberName}
//           onChangeText={(text) => setMemberName(text)}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={addMember}>
//           <Text style={styles.addButtonText}>Add Member</Text>
//         </TouchableOpacity>
//         <Text style={styles.membersLabel}>Members:</Text>
//         {members.map((member, index) => (
//           <Text key={index} style={styles.memberText}>
//             {member}
//           </Text>
//         ))}
//       </View>

//       <TouchableOpacity style={styles.createButton} onPress={createTeam}>
//         <Text style={styles.createButtonText}>Create Team</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#333',
//   },
//   input: {
//     height: 40,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     fontSize: 16,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   membersLabel: {
//     fontSize: 16,
//     marginTop: 10,
//     marginBottom: 5,
//     color: '#333',
//   },
//   memberText: {
//     fontSize: 16,
//   },
//   createButton: {
//     backgroundColor: '#FF6347',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   createButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CreateTeam;
