import { View, Text, Alert } from "react-native"
import { api } from "@/services/api"
export default function Home(){
    async function fetchCategories(){
        try{

        }catch(error){
            console.log(error)
            Alert.alert("Categoria", "Não foi possivel carregar as categorias")
        }
    }
    return (
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <Text>Home</Text>
        </View>
    )
}