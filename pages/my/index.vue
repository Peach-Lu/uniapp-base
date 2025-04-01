<template>
	<view class="index relative" :style="{ paddingTop: statusHeight + navHeight + 'px' }">
		<img class="absolute top-0 left-0 z-0 h-full w-full" src="/static/icons/我的背景@2x.png" alt="">
		<view class="header relative z-10" :style="{ height: statusHeight + 'px' }">
			<image class="header_bg" src="/static/icons/背景@2x.png" />
			<up-navbar title="我的" @rightClick="rightClick" bgColor="transparent">
				<template #left>
					<view class="u-nav-slot flex align-center">

					</view>
				</template>
			</up-navbar>
		</view>
		<view class="container  relative z-3" :style="{ height: (windowBottom ? (contentHeight-windowBottom) : contentHeight) + 'px', overflow: 'auto' }">
			<!-- userinfo -->
			<view class="userinfo mb-[60rpx] flex items-center">
				<view class="rounded-[50%] overflow-hidden w-[100rpx] h-[100rpx] mr-[24rpx]">
					<image class="w-full h-full" src="https://picsum.photos/50/50" />
				</view>
				<view>
					<view class="flex ">
						<view class="username">
							企业客户
						</view>
						<view class="roleName">
							角色名称
						</view>
					</view>
					<view class="phone">
						张三 188****8888
					</view>

				</view>
			</view>
			<!-- order -->
			<view class="order flex justify-between">
				<view class="flex justify-center items-center flex-col">
					<view class="w-[60rpx] h-[60rpx]">
						<image class="w-full h-full" src="/static/icons/待付款@2x.png" />
					</view>
					<view class="">
						待付款
					</view>
				</view>
				<view class="flex justify-center items-center flex-col">
					<view class="w-[60rpx] h-[60rpx]">
						<image class="w-full h-full" src="/static/icons/待付款@2x.png" />
					</view>
					<view class="">
						待付款
					</view>
				</view>
				<view class="flex justify-center items-center flex-col">
					<view class="w-[60rpx] h-[60rpx]">
						<image class="w-full h-full" src="/static/icons/待付款@2x.png" />
					</view>
					<view class="">
						待付款
					</view>
				</view>
				<view class="flex justify-center items-center flex-col">
					<view class="w-[60rpx] h-[60rpx]">
						<image class="w-full h-full" src="/static/icons/待付款@2x.png" />
					</view>
					<view class="">
						待付款
					</view>
				</view>
			</view>
			<!-- swiper -->
			<view class="mt-[30rpx] mb-[30rpx]">
				<up-swiper class="mt-[30rpx]" radius="10" :list="list" height="80" indicator indicatorMode="line"
					circular></up-swiper>
			</view>
			<!-- menu -->
			<view class="menu bg-white rounded-[20rpx] pl-[30rpx]	pr-[42rpx] pt-[32rpx] pt-[40rpx]">
				<view v-for="item in 4" :key="item" class="menu_item h-[120rpx] flex items-center justify-between">
					<view class="flex">
						<view class="w-[48rpx] h-[48rpx] mr-[30rpx]">
							<image class="w-full h-full" src="/static/icons/企业地址@2x.png" />
						</view>
					</view>
					<view class="flex-1">
						企业地址
					</view>
					<view class="w-[30rpx] h-[30rpx] border">
						<image class="w-full h-full" src="/static/icons/Group 12@2x.png" />
					</view>
				</view>

			</view>

		</view>
	</view>
</template>

<script setup>
// 接口请求示例
// import {
// 	login
// } from "@/api/base.js"
import { useHeight } from '../../hook/useHeight'
const { contentHeight, statusHeight, navHeight,windowBottom } = useHeight()
const list = [
	'https://picsum.photos/335/80',
	'https://picsum.photos/335/81',
	'https://picsum.photos/335/82'
]
</script>

<style scoped>
.index {
	height: 100vh;
	box-sizing: border-box;
	background-color: #E9F4F8;
}

view {
	box-sizing: border-box;
}

.container {
	padding: 0 40rpx;
}

.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;
	width: 100vw;
}

.header_bg {
	width: 100%;
	height: 100%;
}
</style>