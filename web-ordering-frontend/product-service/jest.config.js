module.exports = {
    transform: {
      "^.+\\.(js|jsx)?$": "babel-jest",
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy"
    },
  };
  