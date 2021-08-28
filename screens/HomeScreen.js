import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ImageBackground, Platform, StatusBar, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}>
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>
                                STELLAR APP
                            </Text>
                        </View>

                        <View style={styles.titleBar}>
                            <Image
                                source={require('../assets/main-icon.png')}
                                style={{height:300, width:300, margin:90,}}
                            />
                        </View>

                            <TouchableOpacity onPress={
                                ()=>{
                                    this.props.navigation.navigate("Space Craft")
                                }}
                                    style={styles.routeCard}>
                                <Text style={styles.routeText}>
                                    Space Craft
                                </Text>
                                <Text style={styles.knowMore}>{"know more --->"}</Text>
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/space_crafts.png')}
                                style={{height:100, width:100}}
                            />


                            <TouchableOpacity onPress={
                                ()=>{
                                    this.props.navigation.navigate("Daily Pic")
                                }}
                                    style={styles.routeCard}>
                                <Text style={styles.routeText}>
                                    Daily Pics
                                </Text>
                                <Text style={styles.knowMore}>{"know more --->"}</Text>
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/daily_pictures.png')}
                                style={{height:100, width:100}}
                            />


                            <TouchableOpacity onPress={
                                ()=>{
                                    this.props.navigation.navigate("Star Map")
                                }}
                                    style={styles.routeCard}>
                                <Text style={styles.routeText}>
                                    Star Map here
                                </Text>
                                <Text style={styles.knowMore}>{"know more --->"}</Text>
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/star_map.png')}
                                style={{height:100, width:100}}
                            />

                    </ImageBackground>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
   },
    droidSafeArea:{
        marginTop:Platform.OS==="android"? StatusBar.currentHeight:0,
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center',
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white',
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30,
    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15,
    },
    iconImage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80,
    }
})