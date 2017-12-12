---
title: vue的父子组件数据传递
date: 2017-05-04 22:51:59
tags: [vue]
categories: Javascript
---
# vue的父子组件数据传递

## 父组件监听  子组件出发

Prop
12345  数据传递  父传子

```html
Super
      <div v-model=“supermsg”> </div>             1
      <children :childmsg=“supermsg”></children>  3

      data:supermsg                               2

Child
      <div > {{ childmsg}}</div>                  5

      prop:[childmsg]                             4

```

## 子组件触发  父组件更新

$emit
1234 事件传递    子传父

```html
Super
      <div> {{num}}</div>
      <children @childadd=“superadd”></children>  3  监听

Metheds:
superadd(){
       this.num++                                 4  增加
}

Child
    <button @click=‘childadd’ > </button>         1  点击

    Metheds:{
    childadd:this.$emit(‘childadd’)               2  触发
}
```
