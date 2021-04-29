
import Mock from "mockjs";

export default Mock.mock("/getdata", "get", {
  //拦截/getdata的GET请求
  success: true,
  //随机生成一个名字
  message: "@name",
});
