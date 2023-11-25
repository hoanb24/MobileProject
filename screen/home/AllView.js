import React from "react";
import {StyleSheet, ScrollView,View, FlatList} from 'react-native';
import ViewItem from "./ViewItem";
import ViewNeares from "./ViewNeares";
import Header from "./Header";
export default function AllView(){
    return(
            <ScrollView>
                <ViewItem/>
                <ViewNeares/>
            </ScrollView>       
    )
}
const styles=StyleSheet.create({
})