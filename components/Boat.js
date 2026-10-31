import {Image, Text, View} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({ name, description, picture }) => {
    return (
        <View style={{ marginBottom: 10 }}>


            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10
            }}>
                <Text style={{
                    fontFamily: "Poppins_700Bold",
                    fontSize: 22,
                    color: "black",
                    marginTop:8
                }}>
                    {name}
                </Text>

                <FontAwesome6
                    name="sailboat"
                    size={22}
                    color="grey"
                    style={{ marginLeft: 8,
                        marginTop: 2 }}
                />
            </View>

            <Text style={{
                fontFamily: 'Poppins_400Regular',
                fontSize: 14,
                lineHeight: 22,
                color: "grey"
            }}>
                {description}
            </Text>

            <Image
                source={picture}
                style={{ width: 400, height: 300 }}
            />

        </View>
    );
};

export default Boat;