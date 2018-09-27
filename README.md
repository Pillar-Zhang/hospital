# hospital

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0fe170c42b214b34aa8bae72996b266d)](https://app.codacy.com/app/DarrenLuo/hospital?utm_source=github.com&utm_medium=referral&utm_content=Pillar-Zhang/hospital&utm_campaign=Badge_Grade_Dashboard)

react-native 项目

- 自己练手一个移动开发的项目(给我老婆开发的方便她工作) 医疗系统 软件。
- 开始时间：2018:09:15

## 相关技术：

**前端:**

- [react-native](https://reactnative.cn/docs/getting-started/)
- js es6 typescript
- swift

**后端：**

java? python? node? 还没有决定

**相关依赖库：**

- [react-navigation](https://github.com/react-navigation/react-navigation)
- [rn-mobile-ant-design](http://rn.mobile.ant.design/components/picker-cn/)
- [react-native-debugger](https://github.com/jhen0409/react-native-debugger)
- [react-native-image-picker](https://github.com/react-community/react-native-image-picker)

**环境：**
step1 : npm install / yarn

step2 : ios: react-native run-ios/run-android

step3:copy 根目录下的 assets/iconfont.ttf 到 node_modules/ 下的 react-native-vector-icons fonts 下
执行：react-native link react-native-vector-icons

更新图标按钮： 下载 [iconfont](http://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=839874) 的字体文件，添加 iconfont.ttr 到项目里面
执行：react-native link react-native-vector-icons

macOs debugger:

解决调试不方便 调试缓慢的问题

- $ REACT_DEBUGGER="open -g 'rndebugger://set-debugger-loc?port=8001' ||" react-native start

- $ open "rndebugger://set-debugger-loc?host=localhost&port=8081"
- windows: set REACT_DEBUGGER="rndebugger-open --open --port 8081" && npm start

## 踩坑

- 修改项目已经引用组件的目录结构容易产生找不到组件报错 ： rm -rf ios/build 清除缓存 重新构建
- 安卓清除缓存 sudo ./gradlew clean
- 需要开启 cpu 的虚拟环境 解决 virtual device 闪退的问题
