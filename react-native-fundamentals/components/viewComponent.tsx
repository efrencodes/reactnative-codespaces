import { Image, StyleSheet, View } from "react-native"
import ImageHero from "./imageHero"

const ViewComponent = () => {
    return (
        <View style={styles.container}>
            <ImageHero />
            <ImageHero />
            <ImageHero />
            <ImageHero />
            <ImageHero />
            <ImageHero />
            <ImageHero />
            <ImageHero />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 15,
        columnGap: 15
    }
})

export default ViewComponent
