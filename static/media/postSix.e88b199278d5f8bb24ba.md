# Getting Started with React Native

## Introduction

React Native is a popular framework developed by Facebook that allows developers to build mobile applications using JavaScript and React. It makes it possible to create native apps for bot iOS and Andriod platforms from a single codebase. In this post, we will explore the fundamentals of React Native, its key features, and how to get started.

![Getting Started with React Native](../components/react-native.jpeg)

## Why Choose React Native?

1. **Cross-Platform Development**: With React Native, you can develop apps from both Andriod and iOS from a single codebase, reducing time and effort when developing.

2. **Native Preformance**: React Native uses native components, which means your app will perform like a native app. It leverages the natvie capabilities of the device for a smooth animations and interactions.

3. **Hot Realoding**: This feature allows the developer to see the results of their work as they go, with instant refreshes and no need to rebuild the entire app. This significantly speeds the development process.

## Key Features

**Declarative UI**: Developers can write more readable code, that is easier to maintain by focusing on the desired look rather than how to achieve. it. Leading to a better development experience.

**Reuseable Components**: Build encapsulated components that manage their own state, then compose them to create complex UIs.

**Third-Party Plugin**: Access to a variety of third-party plugins, which can save time and effort in development.

## Getting Started

### Prerequistes

Before running in, make sure you have the following installed:

- Node.js
- npm or Yarn
- React Native CLI (if your not using expo)

### Installation

1. **Set Up Your Developement Eviroment**: Follow along with the React Native enviroment setup guide [guide](https;//reactnative.dev/docs/enviroment-setup)

2. **Create a New React Native Project**:
   Using `npx`:
   npx create-expo-app MyApp --template bare-mininium

   If your are prefer TypeScript over JavaScript:
   npx create-expo-app MyApp

3. **Run Your App**:
   move into new App directory:
   cd MyApp

Choose iOS or Android:
npx run ios
or
npx run andriod

For Expo:
npx expo start

4. **Use the Native Components list available for Reference Guide**:
   Utulize the React Native documentation on components to gain a better understanding of tools available and how to use them with provided examples. [Components List](https://reactnative.dev/docs/components-and-apis#list-views)

## Conclusion

React Native is a powerful framework that enables developers to create high-quality applications effecently. With cross-platform capablities, native performance, a large active community, it is a great choice for building mobile apps. Whether you are a seasoned developer or just starting, React Native offers the tools you need to bring your ideas to life!
