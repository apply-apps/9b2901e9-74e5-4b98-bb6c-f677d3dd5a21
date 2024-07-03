// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerPress = (answer) => {
        if (answer === quizData[currentQuestionIndex].correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < quizData.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Your score: {score} / {quizData.length}</Text>
                <TouchableOpacity onPress={() => {
                    setCurrentQuestionIndex(0);
                    setScore(0);
                    setShowResult(false);
                }}>
                    <Text style={styles.restartButton}>Restart Quiz</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const currentQuestion = quizData[currentQuestionIndex];

    return (
        <View style={styles.quizContainer}>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
            {currentQuestion.answers.map((answer, index) => (
                <TouchableOpacity key={index} style={styles.answerButton} onPress={() => handleAnswerPress(answer)}>
                    <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

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
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    resultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
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
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    restartButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0066cc',
    },
});

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Electronics Basics Quiz</Text>
            <Quiz />
        </SafeAreaView>
    );
}