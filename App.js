import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";

export default function App() {
  const height = 180;
  const width = 180;

  return (
    <View // ----VIEW CONTAINER ------
      style={{
        flex: 1,
        marginTop: 30,
        padding: 10,
        backgroundColor: "whitesmoke",
        gap: 10
      }}
    >
      <View //----Text header -----
      >
        <Text style={{ fontWeight: 500, fontSize: 25, color: "black" }}>
          Categories
        </Text>
      </View>

      <View //----- ROW VIEW 1 ------
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          // top: 20,
          gap: 20
        }}
      >
        <View // Nested in Row View 1
          style={{
            backgroundColor: "white",
            height: height,
            width: width,
            borderRadius: 20
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: "grey",
                opacity: 0.1,
                height: 20,
                width: 20,
                marginRight: "auto",
                marginLeft: "auto",
                // position: "relative",
                top: 30,
                padding: 60,
                borderRadius: 20
              }}
            />
            <Image
              source={require("./assets/mock_images/music _icon.png")}
              style={{
                // position: "relative",
                bottom: 50,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              // position: "relative",
              bottom: 20,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Musics
          </Text>
        </View>

        <View // Nested in  Row View 1
          style={{
            backgroundColor: "white",
            height: height,
            width: width,
            borderRadius: 20
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: "grey",
                opacity: 0.1,
                height: 20,
                width: 20,
                marginRight: "auto",
                marginLeft: "auto",
                // position: "relative",
                top: 30,
                padding: 60,
                borderRadius: 20
              }}
            />
            <Image
              source={require("./assets/mock_images/Electronics.png")}
              style={{
                // position: "relative",
                bottom: 50,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              position: "relative",
              bottom: 20,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Electronics
          </Text>
        </View>
      </View>

      <View //----- ROW VIEW 2 ------
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          // top: 20,
          gap: 20
        }}
      >
        <View // Nested in Row View 2
          style={{
            backgroundColor: "white",
            height: height,
            width: width,
            borderRadius: 20
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: "grey",
                opacity: 0.1,
                height: 20,
                width: 20,
                marginRight: "auto",
                marginLeft: "auto",
                // position: "relative",
                top: 30,
                padding: 60,
                borderRadius: 20
              }}
            />
            <Image
              source={require("./assets/mock_images/Fashion_icon.png")}
              style={{
                // position: "relative",
                bottom: 50,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              // position: "relative",
              bottom: 20,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Fashion
          </Text>
        </View>

        <View // Nested in Row View 2
          style={{
            backgroundColor: "white",
            height: height,
            width: width,
            borderRadius: 20
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: "grey",
                opacity: 0.1,
                height: 20,
                width: 20,
                marginRight: "auto",
                marginLeft: "auto",
                // position: "relative",
                top: 30,
                padding: 60,
                borderRadius: 20
              }}
            />
            <Image
              source={require("./assets/mock_images/agriculture_icon.png")}
              style={{
                // position: "relative",
                bottom: 50,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              // position: "relative",
              bottom: 20,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Agriculture
          </Text>
        </View>
      </View>

      <View //----- ROW VIEW 3 ------
        style={{
          display: "flex",
          flexDirection: "row",
          // position: "relative",
          // top: 20,
          gap: 20
        }}
      >
        <View // Nested in Row View 3
          style={{
            backgroundColor: "white",
            height: 180,
            width: 180,
            borderRadius: 20
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: "grey",
                opacity: 0.1,
                height: 20,
                width: 20,
                marginRight: "auto",
                marginLeft: "auto",
                // position: "relative",
                top: 30,
                padding: 60,
                borderRadius: 20
              }}
            />
            <Image
              source={require("./assets/mock_images/web_design_icon.png")}
              style={{
                position: "relative",
                bottom: 50,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              // position: "relative",
              bottom: 20,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Web Design
          </Text>
        </View>

        <View // Nested in Row View 3
          style={{
            backgroundColor: "white",
            height: height,
            width: width,
            borderRadius: 20
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: "grey",
                opacity: 0.1,
                height: 20,
                width: 20,
                marginRight: "auto",
                marginLeft: "auto",
                // position: "relative",
                top: 30,
                padding: 60,
                borderRadius: 20
              }}
            ></View>
            <Image
              source={require("./assets/mock_images/digital_service.png")}
              style={{
                // position: "relative",
                bottom: 50,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              // position: "relative",
              bottom: 20,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Digital Service
          </Text>
        </View>
      </View>

      <View // ROW VIEW 4
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          // top:20,
          gap: 20
        }}
      >
        <View // nested in row view 4
          style={{
            backgroundColor: "white",
            height: height,
            width: width,
            borderRadius: 20
          }}
        >
          <View
            style={{
              backgroundColor: "grey",
              opacity: 0.1,
              height: 20,
              width: 20,
              marginRight: "auto",
              marginLeft: "auto",
              // position: "relative",
              top: 30,
              padding: 60,
              borderRadius: 20
            }}
          />

          <Image
            source={require("./assets/mock_images/music _icon.png")}
            style={{
              // position: "relative",
              bottom: 50,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />

          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                position: "relative",
                bottom: 20,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              Shoues
            </Text>
          </View>
        </View>

        <View // nested in row view 4
          style={{
            backgroundColor: "white",
            height: 180,
            width: 180,
            borderRadius: 20
          }}
        >
          <View
            style={{
              backgroundColor: "grey",
              opacity: 0.1,
              height: 20,
              width: 20,
              marginRight: "auto",
              marginLeft: "auto",
              // position: "relative",
              top: 30,
              padding: 60,
              borderRadius: 20
            }}
          />

          <Image
            source={require("./assets/mock_images/music _icon.png")}
            style={{
              // position: "relative",
              bottom: 50,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />

          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                // position: "relative",
                bottom: 20,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              Shoues
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
