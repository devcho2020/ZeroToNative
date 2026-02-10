import { globalStyles } from "@/styles/global";
import { usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const pathname = usePathname();
  const router = useRouter();

  console.log("assd" + pathname);

  return (
    <View style={globalStyles.container}>
      <View>
        <TouchableOpacity onPress={() => router.navigate(`/`)}>
          <Text style={{ color: pathname === "/" ? "red" : "black" }}>
            For you
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.navigate(`/following`)}>
          <Text style={{ color: pathname === "/following" ? "red" : "black" }}>
            Following
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@cho/post/1`)}>
          <Text>게시글1</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@cho/post/2`)}>
          <Text>게시글2</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@cho/post/3`)}>
          <Text>게시글3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
