import { View } from "react-native/types";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTextStyle}>Informações do aparelho</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: "#606",
        paddingBottom: 5,
        paddingHorizontal: 5,
    },
    headerTextStyle: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
});