import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Island from "./components/Island";
import { useFonts } from 'expo-font';
import {Poppins_400Regular, Poppins_700Bold,} from '@expo-google-fonts/poppins';



export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (


      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Islands of Singapore</Text>
          <Island
              name  = "Pulau Ubin"
              description = "A rustic island in northeastern Singapore known for its traditional village atmosphere, cycling trails, forests, and Chek Jawa wetlands. It is a great place to experience Singapore's natural environment."
              picture={require('./img/pulau_ubin.jpg')}/>

          <Island
              name  = "St John's Island"
              description = "A peaceful island south of mainland Singapore with scenic coastal views, walking paths, and open green spaces. Visitors can enjoy a quiet escape from the city."
              picture={require('./img/st_john_island.jpg')}/>

          <Island
              name  = "Lazarus Island"
              description = "Known for its crescent-shaped sandy beach and clear waters, Lazarus Island is popular for relaxing by the sea, picnics, and enjoying coastal scenery."
              picture={require('./img/lazarus_island.jpg')}/>

          <Island
              name  = "Kusu Island"
              description = "A small island known for its Chinese temple, Malay shrines, tortoise sanctuary, and peaceful surroundings. It is also associated with annual pilgrimage traditions."
              picture={require('./img/kusu_island.jpg')}/>

          <Island
              name  = "Sisters' Islands"
              description = "A pair of southern islands known for marine biodiversity, coral reefs, and coastal habitats. The surrounding waters are part of Singapore's marine conservation efforts."
              picture={require('./img/sisters_island.jpg')}/>

          <Island
              name  = "Sentosa"
              description = "A popular resort island featuring beaches, attractions, hotels, and recreational activities. It is one of Singapore's best-known destinations for entertainment and leisure."
              picture={require('./img/sentosa.jpg')}/>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6F6',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 28,
    color: '#164E63',
    marginBottom: 20,
  },
});
