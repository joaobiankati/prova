import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7A4A9E",
    padding: 24
  },
  title: {
    color: "#EFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28.8,
    marginTop: 48,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    marginBottom: 36,
    color: "#F2F2F2"
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    borderRadius: 6,
    marginRight: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    fontSize: 16,
    backgroundColor: "#ffffff",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 18,
    marginBottom: 36,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31C667",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    color: "#fff",
    fontSize: 24,
  },
  listEmptyText: {
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
    color: "#fff",
    marginTop: 20
  }
});
