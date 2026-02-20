import { globalStyles } from "@/styles/global";
import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const pathname = usePathname();
  const router = useRouter();
  const isLoggedIn = false;

  console.log("assd" + pathname);

  return (
    <SafeAreaView style={globalStyles.container}>
      <BlurView style={styleSheet.header} intensity={10}>
        <Image
          style={styleSheet.headerLogo}
          source={require("@/assets/images/react-logo.png")}
        />
        {!isLoggedIn && (
          <TouchableOpacity
            style={styleSheet.loginButton}
            onPress={() => router.navigate("/login")}
          >
            <Text style={styleSheet.loginButtonColor}>로그인</Text>
          </TouchableOpacity>
        )}
      </BlurView>

      {isLoggedIn && (
        <View style={styleSheet.tabContainer}>
          <View style={styleSheet.tab}>
            <TouchableOpacity onPress={() => router.navigate(`/`)}>
              <Text style={{ color: pathname === "/" ? "red" : "black" }}>
                For you
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => router.navigate(`/following`)}>
              <Text
                style={{ color: pathname === "/following" ? "red" : "black" }}
              >
                Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

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
    </SafeAreaView>
  );
}

export const styleSheet = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
  },
  header: {
    alignItems: "center",
  },
  headerLogo: {
    width: 42,
    height: 42,
  },
  loginButton: {
    position: "absolute",
    right: 10,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  loginButtonColor: {
    color: "white",
  },
});
