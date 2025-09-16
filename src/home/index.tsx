import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { Product } from "../product/Product";

export default function Home() {
  const [products, setProducts] = useState<string[]>([]);
  const [product, setProduct] = useState("");

  function removeProduct(name: string) {

  }

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
          <Text style={styles.listEmptyText}>Nenhuma tarefa cadastrada.</Text>
        )}
      />
    </View>
  );
}
