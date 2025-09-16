import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../home/styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Product({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
