import { globalStyles } from "@/styles/global";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { username } = useLocalSearchParams();
  return (
    <View style={globalStyles.container}>
      <View>
        {/* {username && username + "님 환영합니다"} */}
        <TouchableOpacity onPress={() => router.push(`/${username}`)}>
          <Text>Threads</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/${username}/replies`)}>
          <Text>replies</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/${username}/reports`)}>
          <Text>reports</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
