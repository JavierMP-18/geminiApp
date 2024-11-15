import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatBubble from './src/ChatBubble';
import ChatBot from './src/Chatbot';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatBot/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
