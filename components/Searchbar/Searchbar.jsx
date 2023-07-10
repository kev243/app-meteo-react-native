import { TextInput } from "react-native";
import { s } from "./Searchbar.style";

export function Searchbar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={onSubmit}
      style={s.input}
      placeholder="Cherche une ville ... Ex: Paris"
    />
  );
}
