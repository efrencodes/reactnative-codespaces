import { Image, StyleSheet } from "react-native"

const ImageHero = () => {
    return (
        <Image
            style={styles.container}
            source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
    }
});

export default ImageHero

