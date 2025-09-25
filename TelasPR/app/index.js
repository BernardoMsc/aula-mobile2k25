import { Link } from "expo-router";
import {View, Text, Button} from "react-native";


export default function Index() {
    return (
        <View>
            <Link href="/batata" asChild>
            <Button title="batata"/>
            </Link>
        </View>
    )
}