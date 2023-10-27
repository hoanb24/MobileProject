import React from "react";
import {StyleSheet, ScrollView,View, FlatList} from 'react-native';
import ViewItem from "./ViewItem";
import ViewNeares from "./ViewNeares";
import Header from "./Header";
export default function AllView(){
    return(
        <View>
            <ScrollView>
                <ViewItem/>
                <ViewNeares/>
            </ScrollView>
        </View>
       
    )
}
const styles=StyleSheet.create({
})