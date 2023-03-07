import { Arrow, AwardOutlined, ManagerOutlined } from "@taroify/icons";
import { View, Image, Text } from "@tarojs/components";
import "./index.scss";

const MyPage = () => {
  const myOrderItem = [
    {
      id: 11,
      title: "待付款",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1011606_1428629358mid.jpg",
    },
    {
      id: 12,
      title: "待发货",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1011606_1428629358mid.jpg",
    },
    {
      id: 13,
      title: "待收货",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1011606_1428629358mid.jpg",
    },
    {
      id: 14,
      title: "商品评价",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1011606_1428629358mid.jpg",
    },
    {
      id: 15,
      title: "退款/售后",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1011606_1428629358mid.jpg",
    },
  ];

  const myFunctionItems = [
    {
      id: 21,
      title: "我的钱包",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 22,
      title: "分销推广",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 23,
      title: "我的优惠券",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 24,
      title: "会员中心",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 25,
      title: "我的收藏",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 26,
      title: "收货地址",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 27,
      title: "帮助中心",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 28,
      title: "我的拼团",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 29,
      title: "联系客服",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 30,
      title: "砍价记录",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
    {
      id: 31,
      title: "邀请海报",
      icon: "https://perinatal.oss-cn-hangzhou.aliyuncs.com/bohe/food_thumbnail_sources/1275155_1382099206mid.png",
    },
  ];

  return (
    <View className="my-center">
      <View className="header">
        <View className="header-info">
          <View className="header-info-cover">
            <ManagerOutlined />
          </View>
          <View className="header-info-content">
            <View className="name">微信用户</View>
            <View className="vipid">
              <Text>会员ID：89393228</Text>
              <View className="vipid-copy">复制</View>
            </View>
          </View>
        </View>
        <View className="header-grada">
          <AwardOutlined size={16} />
          <View>普通会员</View>
          <View className="header-grada-txt2">距离升级还差2000</View>
          <Arrow size={16} />
        </View>
      </View>
      <View className="content">
        <View className="block property">
          <View className="block-title">我的资产</View>
          <View className="block-content">
            <View className="block-content-item">
              <View className="property-price">0.00</View>
              <View>余额</View>
            </View>
            <View className="block-content-item">
              <View className="property-price">50</View>
              <View>积分</View>
            </View>
            <View className="block-content-item">
              <View className="property-price">0</View>
              <View>优惠券</View>
            </View>
          </View>
        </View>
        <View className="block order">
          <View className="block-title">
            <View>我的订单</View>
            <View className="order-all">全部订单</View>
            <Arrow size={16} />
          </View>
          <View className="block-content">
            {myOrderItem.map((item) => {
              return (
                <View className="block-content-item" key={item.id}>
                  <Image className="order-img" src={item.icon} />
                  <View className="order-item-txt">{item.title}</View>
                </View>
              );
            })}
          </View>
        </View>
        <View className="block function">
          <View className="block-title">我的功能</View>
          <View className="block-content function-content">
            {myFunctionItems.map((item) => {
              return (
                <View
                  className="block-content-item function-content-item"
                  key={item.id}
                >
                  <Image className="function-img" src={item.icon} />
                  <View className="function-item-txt">{item.title}</View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyPage;
