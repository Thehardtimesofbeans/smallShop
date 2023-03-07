import { Component, PropsWithChildren } from "react";
import { View, Image, Text, SwiperItem } from "@tarojs/components";
import "./index.scss";
import { Swiper } from "@taroify/core";
import { Arrow } from "@taroify/icons";
import Taro from "@tarojs/taro";
import GoodSelection from "@/bComponent/goodSelection/index";

const Index = () => {
  const swiperList = [
    {
      id: 1,
      imgUrl:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/%E5%AD%95%E6%9C%9F%E4%BD%93%E9%87%8D%E7%AE%A1%E7%90%86.png",
    },
    {
      id: 2,
      imgUrl:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/%E9%A3%9F%E8%B0%B1%E6%A8%A1%E6%9D%BF%E8%AE%BE%E7%BD%AE.png",
    },
  ];

  const moduleGather = [
    {
      id: 1,
      name: "砍价活动",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
    {
      id: 2,
      name: "拼团活动",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
    {
      id: 3,
      name: "限时秒杀",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
    {
      id: 4,
      name: "热销榜单",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
    {
      id: 5,
      name: "领劵中心",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
    {
      id: 6,
      name: "积分签到",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
    {
      id: 7,
      name: "积分抽奖",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
    {
      id: 8,
      name: "商城资讯",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
    {
      id: 9,
      name: "admin开源",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
    {
      id: 10,
      name: "帮助中心",
      icon: "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/sportToolIcon.png",
    },
  ];

  const seckillList = [
    {
      id: 1,
      name: "可爱猪猪公仔毛",
      discountPrice: 1,
      originalPrice: 19.9,
      cover:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/store-item-2-bg-1.png",
    },
    {
      id: 2,
      name: "专注力训练贴纸，哈哈哈哈哈",
      discountPrice: 9.9,
      originalPrice: 18.88,
      cover:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/store-item-2-bg-1.png",
    },
    {
      id: 3,
      name: "超级飞侠玩具大号哈哈哈哈哈",
      discountPrice: 9.9,
      originalPrice: 46,
      cover:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/store-item-2-bg-1.png",
    },
  ];

  // 去详情
  const onGoDetail = () => {
    Taro.navigateTo({
      url: "/pages/goodsDetail/index",
    });
  };

  return (
    <View className="index-view">
      <Swiper className="swiper-good" lazyRender autoplay={4000}>
        <Swiper.Indicator />
        {swiperList.map((item) => {
          return (
            <Swiper.Item key={item.id}>
              <Image className="swiper-good-cover" src={item.imgUrl} />
            </Swiper.Item>
          );
        })}
      </Swiper>
      <View className="module-gather">
        {moduleGather.map((item) => {
          return (
            <View className="module-gather-item" key={item.id}>
              <Image className="module-gather-item_icon" src={item.icon} />
              <View className="module-gather-item_name">{item.name}</View>
            </View>
          );
        })}
      </View>
      <View className="headline">
        <View className="headline-content">
          <View className="headline-content-left">商城头条</View>
          <View className="headline-content-line"></View>
          <Swiper
            className="headline-content-swiper"
            autoplay={3000}
            direction="vertical"
          >
            <Swiper.Item>我是测试1</Swiper.Item>
            <Swiper.Item>我是测试2</Swiper.Item>
          </Swiper>
          <Arrow className="headline-content-icon" />
        </View>
      </View>
      <View className="seckill">
        <View className="seckill-top">
          <View className="seckill-header">
            <View className="seckill-header-name">超值秒杀</View>
            <View className="seckill-header-time">12:29点场</View>
            <View className="seckill-header-more">
              更多
              <Arrow />
            </View>
          </View>
        </View>
        <View className="seckill-bottom"></View>
        <View className="seckill-info">
          <View className="seckill-content">
            {seckillList.map((item) => {
              return (
                <View
                  key={item.id}
                  className="seckill-content-item"
                  onClick={onGoDetail}
                >
                  <Image className="seckill-img" src={item.cover} />
                  <View className="seckill-name txt-one-line">{item.name}</View>
                  <View className="seckill-price">
                    <View className="seckill-price-discount">
                      <Text className="seckill-price-discount-no">¥</Text>
                      {item.discountPrice}
                    </View>
                    <View className="seckill-price-original">
                      ¥{item.originalPrice}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <GoodSelection />
    </View>
  );
};

export default Index;
