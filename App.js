import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Artigo from './components/ad/Artigo'

export default function App() {

  const artigos = [
  {
    title: 'Desenvolvedor React Native',
    salary: 'R$ 6.000',
    description: 'Desenvolvimento de apps mobile com React Native.',
    contact: '(11) 99999-9999'
  },
  {
    title: 'Designer UI/UX',
    salary: 'R$ 4.500',
    description: 'Criação de interfaces e experiências de usuário.',
    contact: '(21) 98888-8888'
  },
  {
    title: 'Analista de Dados',
    salary: 'R$ 7.200',
    description: 'Trabalho com bancos de dados e análise preditiva.',
    contact: '(31) 97777-7777'
  },
  {
    title: 'Suporte Técnico',
    salary: 'R$ 2.500',
    description: 'Atendimento ao cliente e resolução de problemas técnicos.',
    contact: '(51) 96666-6666'
  },
  {
    title: 'Gerente de Projetos',
    salary: 'R$ 10.000',
    description: 'Gestão de equipes e cronogramas de entrega.',
    contact: '(61) 95555-5555'
  },
  {
    title: 'Engenheiro de Software',
    salary: 'R$ 9.500',
    description: 'Desenvolvimento de soluções robustas para sistemas web.',
    contact: '(85) 94444-4444'
  },
  {
    title: 'Estagiário de TI',
    salary: 'R$ 1.200',
    description: 'Auxílio em tarefas de manutenção e suporte técnico.',
    contact: '(41) 93333-3333'
  }
];


  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
        Anúncios
      </Text>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          alignItems: 'center'
        }}
      >
        {artigos.map((item, index) => (
          <Artigo
            key={index}
            style={{ backgroundColor: 'black', marginRight: 10, padding: 15, width: 250, marginBottom: 20 }}
            textStyle={{ fontSize: 16 }}
            {...item}
          />
        ))}
      </ScrollView>
    </View>
  );
}
