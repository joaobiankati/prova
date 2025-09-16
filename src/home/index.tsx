import {useState } from "react";
import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export default function Home(){
    

    return (
        <View style={styles.container}>
                <Text style={styles.title}>Lista de Compras</Text>
                <Text style={styles.subtitle}>Adicione suas atividades a lista de tarefas</Text>

                <View style={styles.form}>
                    <TextInput 
                    style={styles.input}
                    placeholder= "Descrição da Tarefa"
                    placeholderTextColor={"#BDBABA"}
                    keyboardType="default"
                    
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>    
                </View> 
                
                <Text style={styles.listTitle}>Tarefas Pendentes</Text>
                
                <View style={styles.list}>
            
                
                </View>
        </View>

    )
}