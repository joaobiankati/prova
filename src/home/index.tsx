import {useState } from "react";
import {FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export default function Home(){

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <Text style={styles.subtitle}>Adicione suas atividades a lista de tarefas</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Descrição da tarefa"
          placeholderTextColor="#BDBABA"
          value={product}
          onChangeText={setProduct}
        />

        <TouchableOpacity style={styles.button} onPress={addProduct}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listTitle}>Tarefas Pendentes</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Product name={item} onRemove={() => removeProduct(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Realizou todas as Tarefas? Adicione tarefas a sua lista de pendências</Text>
        )}
      />
    </View>
  );
}