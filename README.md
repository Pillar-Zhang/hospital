# hospital

react-native 项目

自己练手一个移动开发的项目(给我老婆开发的方便她工作) 医疗系统 软件。

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

**环境：**
step1 : npm install / yarn

step2 : ios: react-native run-ios/run-android

更新图标按钮： 下载 [iconfont](http://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=839874) 的字体文件，添加 iconfont.ttr 到项目里面
执行：react-native link react-native-vector-icons

debugger:

- $ REACT_DEBUGGER="open -g 'rndebugger://set-debugger-loc?port=8001' ||" react-native start 设置一次

- $ open "rndebugger://set-debugger-loc?host=localhost&port=8081"

## 踩坑

1.修改项目已经引用组件的目录结构容易产生找不到组件报错 ： rm -rf ios/build 清除缓存 重新构建
