import { View } from "react-native/types";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#888',
        paddingHorizontal: 25,
        padding: 20,
    }
});