import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "react-native-vector-icons";

// Importa tus imágenes
import UserIcon from '../assets/user-icon.png';
import AiIcon from '../assets/ai-icon.png';

const ChatBubble = ({ role, text, onSpeech }) => {
    return (
        <Animatable.View
            animation="fadeInUp"
            duration={500}
            style={[
                styles.chatItemContainer,
                role === "user" ? styles.userChatItemContainer : styles.modelChatItemContainer,
            ]}
        >
            <Image source={role === "user" ? UserIcon : AiIcon} style={styles.icon} />
            <View style={styles.chatItem}>
                <Text style={styles.chatText}>{text}</Text>
                {role === "model" && (
                    <TouchableOpacity onPress={onSpeech} style={styles.speakerIcon}>
                        <Ionicons name="volume-high-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                )}
            </View>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
    chatItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userChatItemContainer: {
        alignSelf: 'flex-end',
    },
    modelChatItemContainer: {
        alignSelf: 'flex-start',
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 8,
    },
    chatItem: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#007AFF',
        maxWidth: '70%',
        position: 'relative',
    },
    userChatItem: {
        backgroundColor: '#007AFF',
    },
    modelChatItem: {
        backgroundColor: '#000',
    },
    chatText: {
        fontSize: 16,
        color: "#fff",
        fontFamily: 'Roboto-Bold',
    },
    speakerIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
});

export default ChatBubble;
