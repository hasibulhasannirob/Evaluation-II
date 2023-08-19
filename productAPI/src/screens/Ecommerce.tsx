import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Ecommerce = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
    <View>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 50, }}>Ecommerce</Text>
    </View>

    <View style={{ alignItems: "center", width: 300, height: 150, backgroundColor: "#bdfced", borderRadius: 5, flexDirection: "row", padding: 15, marginBottom: 10 }}>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
            <Image
               
                style={{ width: 100, height: 100, }}
            />
        </View>
        <View style={{ marginLeft: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tide Powder</Text>
            <Text>Washing Powder</Text>
            <Text style={{ marginBottom: 10, }}>800gm</Text>
            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ borderWidth: 2, borderColor: "#27f5c1", borderRadius: 4, padding: 4, fontWeight: "bold" }}>Add To Bag</Text>
            </TouchableOpacity>
        </View>
    </View>

    <View style={{ alignItems: "center", width: 300, height: 150, backgroundColor: "#bdfced", borderRadius: 5, flexDirection: "row", padding: 15, marginBottom: 10 }}>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
            <Image
                
                style={{ width: 100, height: 100, }}
            />
        </View>
        <View style={{ marginLeft: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Onion</Text>
            <Text>Daily Needs</Text>
            <Text style={{ marginBottom: 10, }}>1kg</Text>
            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ borderWidth: 2, borderColor: "#27f5c1", borderRadius: 4, padding: 4, fontWeight: "bold" }}>Add To Bag</Text>
            </TouchableOpacity>
        </View>
    </View>

</SafeAreaView>
  )
}

export default Ecommerce

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})