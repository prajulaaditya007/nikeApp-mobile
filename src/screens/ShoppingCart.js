import {FlatList, View, Text, StyleSheet} from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

const ShoppingCart = () => {
    return (
        <View>
            <FlatList
                data={cart}
                renderItem={({item}) => <CartListItem cartItem={item}/>}
                ListFooterComponent={() => (
                    <View style={styles.totalsContainer}>
                        <View style={styles.row}>
                            <Text style={styles.text}>Subtotal</Text>
                            <Text style={styles.text}>₹96,000</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Delivery</Text>
                            <Text style={styles.text}>₹999</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.textBold}>Total</Text>
                            <Text style={styles.textBold}>₹96,999</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: "gainsboro",
        borderTopWidth: 1,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: "gray",
    },
    textBold: {
        fontSize: 16,
        fontWeight: "500",
    },
});

export default ShoppingCart;
