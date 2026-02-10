import { globalStyles } from "@/styles/global";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Modal() {
  const router = useRouter();
  return (
    <View style={globalStyles.container}>
      <Text>Modal</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Close</Text>
      </Pressable>
    </View>
  );
}
