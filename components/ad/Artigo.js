import { Text, View, StyleSheet, Image } from 'react-native';

function Artigo({ style, textStyle, title = 'This title', description = 'This description', salary = 'This salary', contact = 'This contact' }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      <Text style={[styles.text, textStyle]}>Salário: {title}</Text>
      <Text style={[styles.text, textStyle]}>Descrição: {description}</Text>
      <Text style={[styles.text, textStyle]}>Contato: {contact}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    textAlign: 'center'
  }
});

export default Artigo;
