import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome do participante" placeholderTextColor="#6b6b6b" />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant />
      <Participant />
    </View>
  );
}
