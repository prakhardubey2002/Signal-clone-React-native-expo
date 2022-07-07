import React,{useLayoutEffect} from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, ScrollView, Text, } from 'react-native';
import CustomListitem from '../components/CustomListitem';

const HomeScreen = ({navigation}) => {
    useLayoutEffect(() => {
      navigation.setOptions({
        title:"Signal",
      });
    }, [])
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListitem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({});