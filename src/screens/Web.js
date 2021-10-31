import { StatusBar } from 'expo-status-bar';
import React from 'react'
import PlanetHeader from '../components/planet-header'
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function Web({ route }) {
    const { url } = route.params; 
    return (
        <SafeAreaView style={{flex: 1}}>
            <PlanetHeader backButton={true}/>
           <WebView source={{ uri: url }}/>
           <StatusBar barStyle="dark-content"/>
        </SafeAreaView>
    )
}
