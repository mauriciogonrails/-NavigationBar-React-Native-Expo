import React, { useState } from 'react';
import { FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity , Image, Linking} from 'react-native';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image 
        source={{uri:'https://avatars.githubusercontent.com/u/141933693?v=4'}}
        style ={styles.image}
      />
      <Text style={styles.name}>Mauricio Gomes</Text>
      <Text style={styles.description}>
        Hey! 👋 My name is Mauricio and I'm a back end developer and aspiring content creator, trying to build my own version of the digital world step by step. 
        All coding projects are developed from the ground up, from planning and design to solving real-world problems with code.
      </Text>
      <Text style ={styles.description}>📫 Contato: mauriciolxrdev@gmail.com</Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
    <Text style={styles.titulo2}>🧰 Linguagens e Ferramentas</Text>
    <View style={styles.iconContainer}>
      <View style={styles.iconItem}>
        <FontAwesome5 name="html5" size={40} color="#e34f26" style={styles.icon} />
        <Text style={styles.iconLabel}>HTML5</Text>
      </View>
      <View style={styles.iconItem}>
        <FontAwesome5 name="css3" size={40} color="#1572b6" style={styles.icon} />
        <Text style={styles.iconLabel}>CSS3</Text>
      </View>
      <View style={styles.iconItem}>
        <FontAwesome5 name="js" size={40} color="#f7df1e" style={styles.icon} />
        <Text style={styles.iconLabel}>JavaScript</Text>
      </View>
      <View style={styles.iconItem}>
        <MaterialCommunityIcons name="react" size={40} color="#61dafb" style={styles.icon} />
        <Text style={styles.iconLabel}>React</Text>
      </View>
      <View style={styles.iconItem}>
        <FontAwesome5 name="node" size={40} color="#68a063" style={styles.icon} />
        <Text style={styles.iconLabel}>Node.js</Text>
      </View>
      <View style={styles.iconItem}>
        <FontAwesome5 name="python" size={40} color="#3776AB" style={styles.icon} />
        <Text style={styles.iconLabel}>Python</Text>
      </View>
      <View style={styles.iconItem}>
          <FontAwesome5 name="bootstrap" size={40} color="#563d7c" style={styles.icon} />
          <Text style={styles.iconLabel}>Bootstrap</Text>
        </View>
        <View style={styles.iconItem}>
          <FontAwesome5 name="github" size={40} color="#181717" style={styles.icon} />
          <Text style={styles.iconLabel}>GitHub</Text>
        </View>
        <View style={styles.iconItem}>
          <MaterialCommunityIcons name="database" size={40} color="#4479A1" style={styles.icon} />
          <Text style={styles.iconLabel}>MySQL</Text>
        </View>
    </View>

    {/* Adicione mais conteúdo aqui */}
    <View style={styles.additionalContent}>

      <Text style={styles.titulo}>Projetos</Text>

      <Text style={styles.link} onPress={()=> Linking.openURL('https://github.com/mauriciogonrails/simple-backend-crud-app')}>API de Produtos - Operações CRUD:</Text>
      <Text style={styles.projectDescription}>
        Este projeto é uma API desenvolvida em Node.js com o framework Express e MongoDB, que permite realizar operações CRUD em uma entidade de produtos. Com esta API,
         você pode criar, ler, atualizar e deletar produtos.</Text>

         <Text style={styles.link} onPress={()=> Linking.openURL('https://github.com/mauriciogonrails/CardPurchaseExemple')}>CardPurchaseExemple</Text>
        <Text style={styles.projectDescription}>Este projeto representa o exemplo de uma operação com cartão de credito em Ruby.</Text>

    </View>
  </View>
);
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Image source={require('./assets/Capturar.png')}
        style={styles.image2}
      ></Image>
    </View>
  );
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Conteúdo da Página 3</Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu App</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Linguagens e Ferramentas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Currículo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Página 3</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#333333',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  menuItemText: {
    fontSize: 16,
    color: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPagina: {
    fontSize: 18,
    color: '#fff'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: -150,
  },
  image2:{
    width: 400,
    height:600,
    marginTop:50,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
  description: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 20, 
    marginTop: 10, 
    textAlign: 'center',
    marginTop: 30,
  },
  titulo2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconItem: {
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    marginBottom: 5,
  },
  iconLabel: {
    color: '#fff',
    fontSize: 14,
  },
  additionalContent: {
    marginTop: 30,
    alignItems: 'center',
  },
  projectDescription: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  link:{
    color: '#61dafb',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine:'underline'
  }
});

export default App;
