---
title: S6系列产品即将停止服务
ref: s6-will-be-shut-down-soon
---
> 如果你正在使用API v7、GeoAPI v2或SDK 4.x+，或者你是在2020年7月6日之后注册的用户，那么本公告可能不适用于你，你也无需进行升级或修改。

S6版本系列的API从2017年发布以来已经走过了5年，在2020年，S6系列已经被后续的V7版本替代。V7版本提供了更灵活、强大的功能以及更简单、规范的开发能力。

根据[之前的计划](/announce/s6-is-about-to-expire/)，并随着用户已经逐步迁移到V7版本，我们将在**2022年12月31日关闭S6系列的API服务**。

### S6系列包含的产品

- 天气API S6
- GeoAPI V1
- 低于4.x版本的SDK

### 关闭时间

2022年12月31日23点59分59秒

### 在S6版本关闭后会发生什么？

在S6版本关闭后，你将**不能**：

- 使用S6版本API获取任何数据
- 使用低于4.x版本的SDK获取任何数据
- 使用V1版本的GeoAPI获取任何数据

### 如何知道自己使用的是什么版本？

- 检查你的天气服务API地址，如果路径是`/s6/xxx`，则代表你使用的是API S6
- 检查你的GeoAPI地址，如果路径是`/v1/xxx`，则代表你使用的是GeoAPI v1
- 检查你的SDK版本，如果小于4.x，则代表使用的是API S6和GeoAPI V1

### 新版本的开发文档

V7系列的新版本开发文档请参考 <https://dev.qweather.com/docs/>

### 例外

对于签署了长期维护版本的企业客户请与你的销售顾问保持联络，确保你的服务依然在维护期内。
