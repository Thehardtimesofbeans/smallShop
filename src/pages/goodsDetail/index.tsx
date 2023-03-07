import { Component, PropsWithChildren, useState } from "react";
import { View, Image, Text, SwiperItem } from "@tarojs/components";
import { Cell, Swiper } from "@taroify/core";
import "./index.scss";
import { Arrow } from "@taroify/icons";

const GoodsDetail = () => {
  const coverList = [
    {
      id: 1,
      imgUrl:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/938E1369489F6C5ED360104E4400E08E.png",
    },
    {
      id: 2,
      imgUrl:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/8bf9f1c1-21f7-01f5-d373-71acd1fb8c95.png",
    },
  ];
  const [value, setValue] = useState(0);

  const deepClone = (value: any, hash = new WeakMap()) => {
    if (value == null) {
      return value;
    }

    if (value instanceof RegExp) {
      return new RegExp(value);
    }
  };

  return (
    <View className="goods-detail">
      <View className="cover">
        <Swiper
          className="cover-swiper"
          lazyRender
          autoplay={4000}
          onChange={setValue}
        >
          {coverList.map((item) => {
            return (
              <Swiper.Item key={item.id}>
                <Image className="cover-img" src={item.imgUrl} />
              </Swiper.Item>
            );
          })}
          <Swiper.Indicator className="cover-swiper-indicator">
            {value + 1} / {coverList.length}
          </Swiper.Indicator>
        </Swiper>
      </View>
      <View className="content">
        <View className="concise">
          <View className="line1">
            <View className="line1-left">
              <View className="line1-discount">
                <Text className="line1-discount-fh">¥</Text>
                <Text>349</Text>
              </View>
              <View className="line1-price">¥999</View>
            </View>
          </View>
          <View className="line2">
            安踏火星泡棉科技运动鞋男回弹减震男鞋测试夏季新技术简单简单简单
          </View>
          <View className="line3">
            <View className="line3-item">
              <Text>库存:2563件</Text>
            </View>
            <View className="line3-item">
              <Text>销量:983件</Text>
            </View>
            <View className="line3-item">
              <Text>浏览量:1604次</Text>
            </View>
          </View>
        </View>
        <View className="content-cell">
          <View className="content-cell-title">优惠</View>
          <View className="content-cell-coupon">领券</View>
          <Arrow className="content-cell-arrow" />
        </View>
        <View className="content-cell">
          <View className="content-cell-title">已选</View>
          <Arrow className="content-cell-arrow" />
        </View>
        <View className="content-cell">
          <View className="content-cell-title">售后保障</View>
          <Arrow className="content-cell-arrow" />
        </View>
        <View className="content-cell">
          <View className="content-cell-title">用户评价</View>
          <View className="content-cell-arrow">
            查看全部
            <Arrow />
          </View>
        </View>
        <View className="line-bottom"></View>
        <View className="evaluate"> 暂无评价</View>
      </View>
    </View>
  );
};

export default GoodsDetail;
