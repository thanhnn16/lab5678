import { StyleSheet, useWindowDimensions } from "react-native";

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(40, 40, 40)",
    textAlign: "left"
  },
  subTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "rgb(85, 85, 85)",
    marginBottom: 16
  },
  header: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 32
  },
  footer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "rgb(85, 85, 85)",
    fontSize: 20,
    lineHeight: 30,
    textAlign: "justify",
    marginHorizontal: 48,
    marginTop: 42,
    marginBottom: 32
  },
  button: {
    width: "60%",
    height: 60,
    backgroundColor: "rgb(30, 30, 30)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 72
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "flex-start",
  },
  helloText: {
    fontSize: 30,
    fontWeight: "400",
    color: "rgb(85, 85, 85)",
    textAlign: "left",
    marginLeft: 32
  },
  welcomeBackText: {
    fontSize: 28,
    fontWeight: "500",
    color: "rgb(40, 40, 40)",
    marginBottom: 16,
    textAlign: "left",
    marginLeft: 32,
    marginTop: 14,
    textTransform: "uppercase"
  },
  forgotPasswordText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "normal",
    marginHorizontal: 32,
    marginTop: 4,
    marginBottom: 8,
    textAlign: "center"
  }
});

export const inputStyles = StyleSheet.create({
  input: {
    width: "100%",
    height: 32,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "rgb(40, 40, 40)",
    fontSize: 16,
    fontWeight: "normal",
    color: "rgb(40, 40, 40)",
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  inputWithIcon: {
    width: "100%",
    height: 32,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "rgb(40, 40, 40)",
    fontSize: 16,
    fontWeight: "normal",
    color: "rgb(40, 40, 40)",
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  postInputIcon: {
    width: 20,
    height: 20,
  },
  errorText: {
    color: "rgb(255, 0, 0)",
    fontSize: 12,
    fontWeight: "normal",
    marginHorizontal: 4,
    marginTop: 4,
    marginBottom: 8
  },
});

export const logoStyles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 24,
    marginTop: 32
  },
  logo: {
    flex: 1,
    width: 64,
    height: 64,
    objectFit: "contain"
  },
  lineImage: {
    flex: 1,
    height: 1
  }
});

