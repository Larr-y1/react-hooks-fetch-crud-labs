// jest.config.js
module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(\\@adobe/css-tools|other-esm-packages)/)"
    ],
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };
  