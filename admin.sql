-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-04-13 18:07:12
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `admin`
--

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE `category` (
  `category_id` int(100) NOT NULL,
  `category_pid` int(11) DEFAULT NULL,
  `category_name` varchar(200) DEFAULT NULL,
  `imgsrc` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`category_id`, `category_pid`, `category_name`, `imgsrc`) VALUES
(3, 1, '手机数码', ''),
(4, 1, '家用电器', ''),
(5, 1, '电脑办公', ''),
(6, 1, '计生情趣', ''),
(7, 1, '美妆护肤', ''),
(8, 1, '个护清洁', ''),
(9, 1, '汽车生活', ''),
(10, 1, '京东超市', ''),
(11, 1, '男装', ''),
(12, 1, '女装', ''),
(13, 1, '女鞋', ''),
(14, 1, '母婴童装', ''),
(15, 1, '图书影像', ''),
(16, 1, '运动户外', ''),
(17, 1, '内衣配饰', ''),
(18, 3, '老人手机', '//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg'),
(19, 3, '手机', '//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg'),
(20, 3, '游戏手机', '//img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg'),
(21, 3, '对讲机', '//img30.360buyimg.com/focus/s140x140_jfs/t13255/192/958298391/1687/5c7e3c53/5a169204Nd4aa27bb.jpg'),
(22, 3, '京东回收', '//img30.360buyimg.com/focus/s140x140_jfs/t13246/188/925975876/8794/686dbb9c/5a1691e0N62f626e3.jpg'),
(23, 3, '女性手机', '//img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg'),
(24, 3, '京东维修', '//img20.360buyimg.com/focus/s140x140_jfs/t11644/236/2358207967/6141/e2d71825/5a169205N84a49a6a.jpg'),
(25, 3, '合约机', '//img20.360buyimg.com/focus/s140x140_jfs/t13309/121/902275259/3700/e9f22529/5a168e83Nb1a35aac.png'),
(26, 3, '信号卡', '//img10.360buyimg.com/focus/s140x140_jfs/t11515/106/2342900928/7913/5a606e3f/5a168e7eNdd5d0121.png'),
(27, 3, '办套餐', '//img20.360buyimg.com/focus/s140x140_jfs/t14146/201/916948302/5272/8ae80f8e/5a168e78N78b24a8e.jpg'),
(28, 3, '数据线', '//img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg'),
(29, 3, '手机存储卡', '//img14.360buyimg.com/focus/s140x140_jfs/t13657/281/912225045/5343/3109ae02/5a167b73Na69aae95.jpg'),
(30, 4, '电水壶', '//img30.360buyimg.com/focus/s140x140_jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg'),
(31, 4, '电压锅', '//img13.360buyimg.com/focus/s140x140_jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg'),
(32, 4, '电饭煲', '//img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg'),
(33, 4, '电磁炉', '//img13.360buyimg.com/focus/s140x140_jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg'),
(34, 3, '拍照手机', '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `homeswiper`
--

CREATE TABLE `homeswiper` (
  `product_id` int(100) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `img_src` varchar(200) DEFAULT NULL,
  `img_url` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `homeswiper`
--

INSERT INTO `homeswiper` (`product_id`, `category_id`, `img_src`, `img_url`) VALUES
(117, 4, 'images/index/l1.jpg', '\"\"'),
(118, 4, 'images/index/l2.jpg', '\"\"'),
(119, 4, 'images/index/l3.jpg', '\"\"');

-- --------------------------------------------------------

--
-- 表的结构 `navs`
--

CREATE TABLE `navs` (
  `category_id` int(11) NOT NULL,
  `img_src` varchar(200) DEFAULT NULL,
  `img_url` varchar(200) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `navs`
--

INSERT INTO `navs` (`category_id`, `img_src`, `img_url`, `name`) VALUES
(3, 'images/index/nav2.png', '\"\"', '手机数码'),
(4, 'images/index/nav0.png', '\"\"', '家用电器'),
(10, 'images/index/nav3.png', '\"\"', '京东超市'),
(12, 'images/index/nav1.png', '\"\"', '女装');

-- --------------------------------------------------------

--
-- 表的结构 `products`
--

CREATE TABLE `products` (
  `category_id` int(100) NOT NULL,
  `product_id` int(100) NOT NULL,
  `category_pid` int(11) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `imgsrc` varchar(1000) NOT NULL,
  `sales` int(100) NOT NULL,
  `product_price` int(100) NOT NULL,
  `product_introduce` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `products`
--

INSERT INTO `products` (`category_id`, `product_id`, `category_pid`, `name`, `imgsrc`, `sales`, `product_price`, `product_introduce`) VALUES
(18, 100, 3, ' 小米（MI） Redmi 8A  ', '//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg', 20, 699, '<img src=\"//img30.360buyimg.com/sku/jfs/t1/72592/13/13128/58796/5da3e09aE4816d082/e335e3d2e4f3416d.jpg\" /><img src=\"//img30.360buyimg.com/sku/jfs/t1/59827/4/12876/182274/5da3e09aEdd49e5e1/a97d8e4db3ed8939.jpg\" />'),
(18, 101, 3, '荣耀 畅玩7 2GB+32GB 蓝色 全网通4G手机 智能机 老人手机 双卡双待   ', '//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/93786/15/16813/109318/5e80686aE24dde873/7e5370e442601dca.jpg!q70.dpg.webp', 10, 499, '<img src=\"//m.360buyimg.com/mobilecms/jfs/t21925/255/1880933049/27668/b441831f/5b3c6d9fNbfcafcfc.jpg!q70.dpg.webp\" /><img src=\"//m.360buyimg.com/mobilecms/jfs/t22495/265/659866227/50908/7711ce9e/5b3c6da6N91a77864.jpg!q70.dpg.webp\" />'),
(18, 103, 3, '飞利浦 PHILIPS E258S 宝石蓝 直板按键 移动联通2G 老人手机 老年功能手机   ', '//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/98575/16/10651/285632/5e1ead9dEab837e00/0b0779a1629f3a84.jpg!q70.dpg.webp', 100, 165, ''),
(18, 104, 3, '小米红米8A 智能老人手机 深海蓝 全网通4G+64G  ', '//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/114757/39/429/98515/5e8c1ac8E450fa344/6ec6a2b405d6410a.jpg!q70.dpg.webp', 8, 718, ''),
(18, 105, 3, ' 荣耀Play3e 5.71英寸珍珠全面屏 3020mAh长续航1300万大光圈相机老人手机 2GB+32GB 幻夜黑 移动联通电信4G  ', '//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/80360/12/9284/113481/5d706e9eE32d94bc8/acf8ab57b66b8a64.jpg!q70.dpg.webp', 120, 899, '<img src=\"//img30.360buyimg.com/sku/jfs/t1/69575/32/11798/397448/5d91726bE68337be7/09ff27589b478944.jpg\" /><img src=\"//img30.360buyimg.com/sku/jfs/t1/38339/24/12910/311964/5d415b40E2a2a96b6/8340eb0446ec0f34.jpg\" />'),
(18, 106, 3, '飞利浦（PHILIPS） E171L  ', '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/38774/4/3966/239532/5cc70523E095c64ff/de58e14bf27ff26c.jpg!q80.dpg.webp', 120, 188, '<img src=\"//img13.360buyimg.com/popWaterMark/jfs/t19423/364/1292013677/434681/1cc7ffd5/5ac425bdN03820793.jpg!q70.dpg.webp\" />'),
(18, 107, 3, '诺基亚（NOKIA）105 新 黑色 直板按键 移动联通2G手机 老人手机 学生备用功能机  ', '//img12.360buyimg.com/mobilecms/s316x316_jfs/t1/70511/33/10791/168954/5d83270eE1c6a3d23/5696672353ea84c3.jpg!q70.dpg.webp', 120, 288, ''),
(19, 108, 3, '                                              朵唯（DOOV）刘海全面屏拍照游戏手机全网通4G 学生老人智能超薄指纹双卡双待 星幻紫 全网通(4GB+32GB)标配版', '//img10.360buyimg.com/n2/s240x240_jfs/t1/106830/33/11898/322271/5e42bbe7E332a28f6/04eaca14e21f15df.jpg!q70.jpg', 120, 499, ''),
(30, 109, 4, '电水壶热水壶电热水壶高温消毒304不锈钢1.7L容量暖水壶烧水壶开水壶WHJ1705b', '//img10.360buyimg.com/n2/s240x240_jfs/t1/93596/25/17735/310107/5e8c340eE6171e2e9/a9038e14178b267a.jpg!q70.jpg', 10, 89, ''),
(30, 200, 4, '美的(Midea)电热水壶 304不锈钢 便携烧水壶 家用烧茶壶双层防烫厂家直营 性价比爆款丨一体无缝内胆 TM1502 白色', '//img10.360buyimg.com/n2/s240x240_jfs/t1/100986/14/12226/96517/5e45a520E00d231a5/a113b919aad28361.jpg!q70.jpg', 20, 79, '');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `login_password` varchar(100) NOT NULL,
  `pay_password` varchar(100) DEFAULT NULL,
  `user_number` varchar(40) NOT NULL,
  `user_photo` varchar(200) DEFAULT NULL,
  `verification_code` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `login_password`, `pay_password`, `user_number`, `user_photo`, `verification_code`) VALUES
(1, 'huangche', 'huangche', '123456', '18389379755', NULL, NULL),
(2, 'huangche123', 'http://127.0.0.1:8080/back/images/userphone.jpg', NULL, '18269287753', NULL, NULL),
(3, 'rootcat007', 'cdd733aad2d0b134c537011af33613f1', NULL, '18389378862', NULL, NULL),
(4, 'xiaoyanzi', '7c0d49184b57774a3d73cb591e20d30d', NULL, '18889409793', NULL, NULL);

--
-- 转储表的索引
--

--
-- 表的索引 `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`) USING BTREE;

--
-- 表的索引 `homeswiper`
--
ALTER TABLE `homeswiper`
  ADD PRIMARY KEY (`product_id`);

--
-- 表的索引 `navs`
--
ALTER TABLE `navs`
  ADD PRIMARY KEY (`category_id`);

--
-- 表的索引 `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`) USING BTREE;

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- 使用表AUTO_INCREMENT `homeswiper`
--
ALTER TABLE `homeswiper`
  MODIFY `product_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- 使用表AUTO_INCREMENT `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
