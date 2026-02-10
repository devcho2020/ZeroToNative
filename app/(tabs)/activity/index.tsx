import NotFound from "@/app/+not-found";
import { globalStyles } from "@/styles/global";
import { usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();

  if (
    ![
      "/activity",
      "/activity/follows",
      "/activity/replies",
      "/activity/mentions",
      "/activity/quotes",
      "/activity/reposts",
      "/activity/verified",
    ].includes(pathname)
  ) {
    return <NotFound />;
  }
  return (
    <View style={globalStyles.container}>
      <View>
        {/* {username && username + "님 환영합니다"} */}
        <TouchableOpacity onPress={() => router.navigate(`/activity`)}>
          <Text style={{ color: pathname === "/activity" ? "red" : "black" }}>
            All
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.navigate(`/activity/follows`)}>
          <Text
            style={{
              color: pathname === "/activity/follows" ? "red" : "black",
            }}
          >
            Follows
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.navigate(`/activity/replies`)}>
          <Text
            style={{
              color: pathname === "/activity/replies" ? "red" : "black",
            }}
          >
            Replies
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.navigate(`/activity/mentions`)}>
          <Text
            style={{
              color: pathname === "/activity/mentions" ? "red" : "black",
            }}
          >
            Mentions
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.navigate(`/activity/quotes`)}>
          <Text
            style={{
              color: pathname === "/activity/quotes" ? "red" : "black",
            }}
          >
            Quotes
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.navigate(`/activity/reposts`)}>
          <Text
            style={{
              color: pathname === "/activity/reposts" ? "red" : "black",
            }}
          >
            Reposts
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.navigate(`/activity/verified`)}>
          <Text
            style={{
              color: pathname === "/activity/verified" ? "red" : "black",
            }}
          >
            Verified
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
