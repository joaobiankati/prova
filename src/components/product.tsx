import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { StyleSheet } from "react-native";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Product({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image>
          source={require(../../delete.png)}
        </Image>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 8,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    flex: 1
  },
  button: {
    width: 32,
    height: 32,
    backgroundColor: "#E23C44",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  }
});
