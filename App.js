import { StatusBar } from 'expo-status-bar';
import React from "react"
import { ScrollView, View, Text, Image, StyleSheet } from "react-native"

const estilo = StyleSheet.create({
  tela: {
    backgroundColor: "#fff"
  },

  topo: {
    alignItems: "center",
    backgroundColor: "#f54748",
    padding: 32
  },

  topoImagem: {
    height: 64,
    width: 64
  },

  topoTexto: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center"
  },

  receita: {
    marginVertical: 16,
    marginHorizontal: 32
  },

  receitaImagem: {
    height: 200,
    width: "auto", 
    borderRadius: 20
  },

  receitaTitulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center" 
  },

  receitaSubtitulo: {
    fontSize: 24,
    marginVertical: 16,
  }
})

export default function App() {
  return <ScrollView>
    <StatusBar backgroundColor="#f54748" barStyle="light-content" />
    <View style={estilo.topo}>
      <Image style={estilo.topoImagem} source={require("./assets/icon.png")} />
      <Text style={estilo.topoTexto}> MELOGRANO {"\n"} Cozinhando com APPs </Text>
    </View>
    <View style={estilo.receita}>
      <Text style={estilo.receitaTitulo}> BOLO SIMPLES </Text>
      <Image style={estilo.receitaImagem} source={require("./assets/foto-bolo.jpg")} />
      <Text style={estilo.receitaSubtitulo}> INGREDIENTES </Text>
      <Text>
        2 xícaras (chá) de açúcar
        {"\n"}3 xícaras (chá) de farinha de trigo
        {"\n"}4 colheres (sopa) de margarina
        {"\n"}3 ovos
        {"\n"}1 e 1/2 xícara (chá) de leite
        {"\n"}1 colher (sopa) bem cheia de fermento em pó
      </Text>
      <Text style={estilo.receitaSubtitulo}> MODO DE PREPARO </Text>
      <Text>
        Bata as claras em neve e reserve.
        {"\n"}{"\n"}Misture as gemas, a margarina e o açúcar até obter uma massa homogênea.
        
        {"\n"}{"\n"}Acrescente o leite e a farinha de trigo aos poucos, sem parar de bater.
        {"\n"}{"\n"}Por último, adicione as claras em neve e o fermento.
        {"\n"}{"\n"}Despeje a massa em uma forma grande de furo central untada e enfarinhada.
        {"\n"}{"\n"}Asse em forno médio 180 °C, preaquecido, por aproximadamente 40 minutos ou ao furar o bolo com um garfo, este saia limpo.
      </Text>
    </View>
    <View style={estilo.receita}>
      <Text style={estilo.receitaTitulo}> PUDIM DE LEITE CONDENSADO </Text>
      <Image style={estilo.receitaImagem} source={require("./assets/foto-pudim.jpg")} />
      <Text style={estilo.receitaSubtitulo}> INGREDIENTES </Text>
      <Text>
        Pudim: {"\n"}
        1 lata de leite condensado
        {"\n"}1 lata de leite (medida da lata de leite condensado)
        {"\n"}3 ovos inteiros

        {"\n"}{"\n"}Calda: {"\n"}
        1 xícara (chá) de açúcar
        {"\n"}1/2 xícara de água
      </Text>
      <Text style={estilo.receitaSubtitulo}> MODO DE PREPARO </Text>
      <Text>
        Pudim: {"\n"}
        {"\n"}Primeiro, bata bem os ovos no liquidificador.
        {"\n"}Acrescente o leite condensado e o leite, e bata novamente.

        {"\n"}{"\n"}Calda: {"\n"}
        Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.
        {"\n"}{"\n"}Coloque em uma forma redonda e despeje a massa do pudim por cima.
        {"\n"}{"\n"}Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.
        {"\n"}{"\n"}Espete um garfo para ver se está bem ass
        {"\n"}{"\n"}Deixe esfriar e desenforme.
      </Text>
    </View>
  </ScrollView>
}

