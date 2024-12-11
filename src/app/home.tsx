import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { api } from "@/services/api";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";


export default function Home() {
  type MarketsProps = PlaceProps & {};
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setcategory] = useState("");
  const [markets, setmarkets] = useState<MarketsProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setcategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possivel carregar as categorias");
    }
  }
  async function fatchMarkets() {
    try {
      if (!category) {
        return;
      }
      const { data } = await api.get("/markets/category/" + category);
      setmarkets(data)
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possivel carregar os locais");
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    fatchMarkets();
  }, [category]);


  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        onSelected={setcategory}
        selected={category}
      />
      <Places data={markets}/>
    </View>
  );
}
