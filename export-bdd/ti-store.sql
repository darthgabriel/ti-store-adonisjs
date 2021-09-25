/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : ti-store

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-09-25 02:48:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for productos_categorias
-- ----------------------------
DROP TABLE IF EXISTS `productos_categorias`;
CREATE TABLE `productos_categorias` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) DEFAULT NULL,
  `subcategoria` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of productos_categorias
-- ----------------------------
INSERT INTO `productos_categorias` VALUES ('1', 'COMPUTADORES', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('2', 'SOFTWARE', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('3', 'COVID', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('4', 'IMPRESORAS', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('5', 'SUMINISTROS', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('6', 'MONITORES', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('7', 'REDES', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('8', 'OTROS', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('9', 'CCTV', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('10', 'SERVICIOS', 'TODOS');
INSERT INTO `productos_categorias` VALUES ('11', 'COMPUTADORES', 'PORTATILES');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `password` varchar(180) NOT NULL,
  `remember_me_token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'joseparedes@ocg.net.ve', 'admin', 'Jose Paredes', 've18874835', null, '2021-08-22 22:59:17', '2021-08-22 22:59:17');
