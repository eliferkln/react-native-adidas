import React, { Component, ReactElement } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BottomMenuProps {
  style?: StyleProp<ViewStyle>;
}

interface BottomMenuState {
  activeIndex: number;
}

class BottomMenu extends Component<BottomMenuProps, BottomMenuState> {
  constructor(props: BottomMenuProps) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleMenuItemPress = (index: number): void => {
    this.setState({ activeIndex: index });
  };

  render(): ReactElement {
    const { activeIndex } = this.state;

    return (
      <View style={[styles.menu]}>
        <View style={[styles.navigation, this.props.style]}>
          <TouchableOpacity
            style={[styles.list]}
            onPress={() => this.handleMenuItemPress(0)}
          >
            <Ionicons
              name="home-outline"
              style={[styles.icon, activeIndex === 0 && styles.activeIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.list]}
            onPress={() => this.handleMenuItemPress(1)}
          >
            <Ionicons
              name="person-outline"
              style={[styles.icon, activeIndex === 1 && styles.activeIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.list]}
            onPress={() => this.handleMenuItemPress(2)}
          >
            <Ionicons
              name="settings-outline"
              style={[styles.icon, activeIndex === 2 && styles.activeIcon]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BottomMenu;

const styles = StyleSheet.create({
  menu: {
    flex: 0,
    alignItems: "center",
  },
  navigation: {
    width: "80%",
    height: 60,
    backgroundColor: "#222327",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 30,
    position: "absolute",
    bottom: 10,
  },
  list: {
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginRight: 2,
    color: "white",
  },
  activeIcon: {
    color: "#e32b2b",
  },
});
