# hospital

react-native 项目

自己练手一个移动开发的项目 医疗系统 软件 采用 react-native swift

step1 : npm install / yarn

step2 : ios: react-native run-ios

更新图标按钮： 下载 [iconfont](http://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=839874) 的字体文件，添加 iconfont.ttr 到项目里面
执行：react-native link react-native-vector-icons
测试 test: npm run test

## 踩坑

修改项目目录结构容易产生找不到 组件 报错 ： rm -rf ios/build 清除缓存 重新构建
