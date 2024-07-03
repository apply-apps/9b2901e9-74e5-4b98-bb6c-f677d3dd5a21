// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';

const quizData = [
    {
        question: 'What is the SI unit of electric current?',
        answers: ['Ohm', 'Ampere', 'Volt', 'Watt'],
        correctAnswer: 'Ampere',
    },
    {
        question: 'Which component is used to store electrical energy?',
        answers: ['Resistor', 'Capacitor', 'Inductor', 'Transistor'],
        correctAnswer: 'Capacitor',
    },
    {
        question: 'What does LED stand for?',
        answers: ['Light Emitting Diode', 'Liquid Emitting Diode', 'Light Energy Device', 'Laser Emitting Diode'],
        correctAnswer: 'Light Emitting Diode',
    },
];

const Quiz = () => {
    const renderItem = ({ item }) => (
        <View style={styles.questionBox}>
            <Text style={styles.questionText}>{item.question}</Text>
            {item.answers.map((answer, index) => (
                <TouchableOpacity key={index} style={styles.answerButton}>
                    <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <FlatList
            data={quizData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.quizContainer}
        />
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Electronics Basics Quiz</Text>
            <Quiz />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    quizContainer: {
        paddingBottom: 20,
    },
    questionBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    answerButton: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    answerText: {
        fontSize: 16,
    },
});