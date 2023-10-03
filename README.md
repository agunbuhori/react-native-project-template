# React Native Project Template

You are a RN developer, but you don't know how to start a good react native project? How to place the folders and files? Which packages you should install? Forget it all! We provide a good template for you. This template is dedicated for complex React Native Project.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone this repository

```bash
git clone https://github.com/agunbuhori/react-native-project-template-git
cd /path/to/project
```

Don't forget to install node modules

```bash
# using npm
npm install
# OR using Yarn
yarn
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Installed libraries

We offer common features to make React Native development easier.

- [React Navigation](https://reactnavigation.org/) - Routing and navigation for Expo and React Native apps.
- [Babel Module Resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) - You can use @/path/file to call a file, constants, or functions. Forget writing like this ../../../../ in your project.
- [Dotenv](https://www.npmjs.com/package/react-native-dotenv) - Managing environment is not supported by react-native default template, we provide it.
- [redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development
- [axios](https://axios-http.com/docs/intro) - A http library for JS
