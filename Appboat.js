import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Boat from "./components/Boat";
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
                <Text style={styles.title}>GetABoat - For Sale</Text>
                <Boat
                    name  = "Sea Ray 500 Sundancer"
                    description = "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    picture={require('./boatimg/sea_ray.jpg')}/>

                <Boat
                    name  = "Four Winns Horizon 180"
                    description = "A sporty look and refined details truly set the Horizon 180 above all others."
                    picture={require('./boatimg/four_winns.jpg')}/>

                <Boat
                    name  = "Flipper 640 ST"
                    description = "A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    picture={require('./boatimg/flipper.jpg')}/>

                <Boat
                    name  = "Princess V48"
                    description = "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                    picture={require('./boatimg/princess.jpg')}/>

                <Boat
                    name  = "Bayliner 175 Bowrider"
                    description = "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    picture={require('./boatimg/bayliner.jpg')}/>

                <Boat
                    name  = "Fairline Targa 47"
                    description = "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    picture={require('./boatimg/fairline.jpg')}/>
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
