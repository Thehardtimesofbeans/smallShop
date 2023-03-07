import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const GoodSelection = () => {
  const goodList = [
    {
      id: 1,
      imgUrl:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/wholemeal-icon.png",
      discountPrice: 138,
      originalPrice: 200,
    },
    {
      id: 2,
      imgUrl:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/wholemeal-icon.png",
      discountPrice: 138,
      originalPrice: 200,
    },
    {
      id: 3,
      imgUrl:
        "https://yly-resource.oss-cn-shenzhen.aliyuncs.com/weichan/img/wholemeal-icon.png",
      discountPrice: 138,
      originalPrice: 200,
    },
  ];

  // 去详情
  const onGoDetail = () => {
    Taro.navigateTo({
      url: "/pages/goodsDetail/index",
    });
  };

  return (
    <View className="good-selection">
      <View className="title">
        <View className="line"></View>
        <View className="text">好物优选</View>
        <View className="line"></View>
      </View>
      <View className="content">
        {goodList.map((item) => {
          return (
            <View key={item.id} className="cell" onClick={onGoDetail}>
              <View className="content-item">
                <Image className="content-item-img" src={item.imgUrl} />
                <View className="content-item-txt">
                  测试测试测试测试测试测试测试测试测试测试测测试时说睡觉睡觉睡觉睡觉睡觉
                </View>
                <View className="content-item-price">
                  <View className="discount">
                    <Text>¥</Text>
                    <Text className="discount-int">{item.discountPrice}</Text>
                    <Text>.00</Text>
                  </View>

                  <View className="discount original">
                    <Text>¥</Text>
                    <Text className="discount-int original-int">
                      {item.originalPrice}
                    </Text>
                    <Text>.00</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default GoodSelection;
