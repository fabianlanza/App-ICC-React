import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Switch } from 'react-native';
import { courses } from './courses';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);


  const themeStyles = isDarkTheme ? darkThemeStyles : lightThemeStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <StatusBar style={isDarkTheme ? "light" : "dark"} />
      <Image
        source={require("./assets/unicahLogo.jpeg")}
        style={{
          width: 150,
          height: 150,
          alignSelf: "center",
          marginBottom: 20,
          marginTop: 30
        }}
      />

      <View style={styles.header}>
        <Text style={[styles.title, themeStyles.text]}>
          Carrera de Ingeniería en Ciencias de la Computación
        </Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={[styles.courseItem, themeStyles.courseItem]}>
            <Text style={[styles.courseName, themeStyles.text]}>{item.name}</Text>
            <Text style={[styles.courseDescription, themeStyles.text]}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const lightThemeStyles = StyleSheet.create({
  container: { backgroundColor: '#FFF' },
  text: { color: '#000' },
  courseItem: { backgroundColor: '#FFFFFF' },
  
});

const darkThemeStyles = StyleSheet.create({
  container: { backgroundColor: '#333' },
  text: { color: '#FFF' },
  courseItem: { backgroundColor: '#444' },
});

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', flex: 1, textAlign: 'center' },
  courseItem: { padding: 20, borderBottomWidth: 2, borderBottomColor: '#E0E0E0' },
  courseName: { fontSize: 18, fontWeight: 'bold' },
  courseDescription: { fontSize: 14 },
});

export default App;