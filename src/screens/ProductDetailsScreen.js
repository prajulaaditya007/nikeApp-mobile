import {StyleSheet, View, Image, FlatList, useWindowDimensions, Text, ScrollView, Pressable} from "react-native";
import products from "../data/products";
import {isHoverEnabled} from "react-native/Libraries/Pressability/HoverState";

const ProductDetailsScreen = () => {
    const product = products[0];

    const windowWidth = useWindowDimensions().width;

    const addToCart = () => {
        console.warn('Added to cart');
    }
    return (
        <View>
            {/* Image Carousel */}
            <ScrollView>
                <FlatList
                    data={product.images}
                    renderItem={({item}) =>
                        <Image source={{uri: item}} style={
                            {width: windowWidth, aspectRatio: 1}
                        }/>
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                />

                <View style={{padding: 20}}>
                    {/* Title */}
                    <Text style={styles.title}>{product.name}</Text>

                    {/* Price */}
                    <Text style={styles.price}>₹{product.price}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Add to cart button */}
            <Pressable style={styles.button} onPress={addToCart}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>

            {/* Navigation icon */}


        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        fontWeight: "500",
        fontSize: 16,
        letterSpacing: 1.2,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
    },
    button: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 25,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});

export default ProductDetailsScreen;
