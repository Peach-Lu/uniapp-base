<template>
	<view class="index" :style="{ paddingTop: statusHeight + navHeight + 'px' }">
		<view class="header" :style="{ height: statusHeight + 'px' }">
			<image class="header_bg" src="/static/icons/bg.png" />
			<up-navbar title="首页" @rightClick="rightClick" bgColor="transparent">
				<template #left>
					<view class="u-nav-slot flex align-center text-24">
						<up-icon name="map-fill" size="12"></up-icon>
						<view class="">
							当前位置
						</view>

					</view>
				</template>
			</up-navbar>
		</view>
		<view class="container"
			:style="{ height: (windowBottom ? (contentHeight - windowBottom) : contentHeight) + 'px', overflow: 'auto' }">
			<up-swiper class="mt-[30rpx]" radius="10" :list="list" height="120" indicator indicatorMode="line"
				circular></up-swiper>
			<view class="list_item bg-white mt-[30rpx] rounded-[20rpx]">
				<view
					class="list_title flex items-center h-[74rpx] p-[20rpx]  rounded-[20rpx] rounded-bl-none  rounded-br-none border-[2rpx] border-solid border-[rgba(51,51,51,0.05)]">
					<view class="list_icon w-[36rpx] h-[36rpx] mr-[8rpx]">
						<image class="h-full w-full" src="/static/icons/gsjs.png" mode="widthFix" />
					</view>
					<view>
						<view class="z-1 relative list_title_one">
							公司介绍
							<image class="z-0 w-[90rpx] h-[13rpx] absolute bottom-0 left-0" src="/static/icons/Vector 10@2x(1).png" />
						</view>
					</view>
				</view>

				<view class="pt-[20rpx] pl-[30rpx] pr-[30rpx] h-[212rpx]">
					<view class="h-[170rpx] 
           font-[PingFang_SC] 
           text-[30rpx] text-[#333]">
						xx集团位于深圳，前身为xx(深圳)有限公司，创立于20XX年。该公司是一家拥有三大国际品牌的中国化妆品企业，专注于美容行业近十年。
					</view>
				</view>
			</view>
			<!-- 2 -->
			<view class="list_item bg-white mt-[30rpx] rounded-[20rpx]">
				<view
					class="list_title flex items-center h-[74rpx] p-[20rpx]  rounded-[20rpx] rounded-bl-none  rounded-br-none border-[2rpx] border-solid border-[rgba(51,51,51,0.05)]">
					<view class="list_icon w-[36rpx] h-[36rpx] mr-[8rpx]">
						<image class="h-full w-full" src="/static/icons/qylc.png" mode="widthFix" />
					</view>
					<view>
						<view class="z-1 relative list_title_one">
							签约流程
							<image class="z-0 w-[90rpx] h-[13rpx] absolute bottom-0 left-0" src="/static/icons/Vector 10@2x(1).png" />
						</view>
					</view>
				</view>
				<view class="content mt-[42rpx] p-[20rpx] pb-[50rpx]">
					<view class="relative flex">
						<view class="relative z-1 text-white ml-[14rpx] text-center">
							线上流程
						</view>
						<image class="absolute top-0 right-0 w-[630rpx] h-[40rpx]" src="/static/icons/xslc.png" />
					</view>
					<view class="flex items-center justify-between">
						<view class="w-[104rpx] text-center">
							<image class="w-[76rpx] h-[76rpx]" src="/static/icons/Group 379@2x.png" />
							<view class="text-center item_text">
								客服对接
							</view>
						</view>
						<view class="mt-[-44rpx]">
							<image class="w-[40rpx] h-[16rpx]" src="/static/icons/Group 388@2x.png" />
						</view>
						<view class="w-[104rpx] w-[104rpx] text-center">
							<image class="w-[76rpx] h-[76rpx]" src="/static/icons/Group 380@2x.png" />
							<view class=" text-center item_text">
								面签合同
							</view>
						</view>
						<view class="mt-[-44rpx]">
							<image class="w-[40rpx] h-[16rpx]" src="/static/icons/Group 388@2x.png" />
						</view>
						<view class="w-[130rpx] pt-[44rpx] text-center">
							<image class="w-[76rpx] h-[76rpx]" src="/static/icons/Group 381@2x.png" />
							<view class="text-center item_text w-[130rpx]">
								注册<br>
								<view class="w-[130rpx] item_text text-center">
									小程序会员
								</view>
							</view>
						</view>
						<view class="mt-[-44rpx]">
							<image class="w-[40rpx] h-[16rpx]" src="/static/icons/Group 388@2x.png" />
						</view>
						<view class="w-[104rpx] pt-[44rpx] text-center">
							<image class="w-[76rpx] h-[76rpx]" src="/static/icons/Group 382@2x.png" />
							<view class="text-center item_text ">
								代账材料<br>
								<view class="item_text text-center">
									移交
								</view>
							</view>
						</view>
					</view>
					<!-- 线下 -->
					<view class="relative flex mt-[88rpx]">
						<view class="relative z-1 text-white ml-[14rpx] text-center">
							线下流程
						</view>
						<image class="absolute top-0 right-0 w-[630rpx] h-[40rpx]" src="/static/icons/xslc.png" />
					</view>
					<view class="flex items-center justify-between">
						<view class="w-[130rpx] pt-[44rpx] text-center">
							<image class="w-[76rpx] h-[76rpx]" src="/static/icons/Group 381@2x.png" />
							<view class="text-center item_text w-[130rpx]">
								协助注册<br>
								<view class="w-[130rpx] item_text text-center">
									小程序会员
								</view>
							</view>
						</view>
						<view class="mt-[-44rpx]">
							<image class="w-[40rpx] h-[16rpx]" src="/static/icons/Group 388@2x.png" />
						</view>
						<view class="w-[104rpx] pt-[44rpx] text-center">
							<image class="w-[76rpx] h-[76rpx]" src="/static/icons/Group 383@2x.png" />
							<view class="text-center item_text">
								签约电子合同
							</view>
						</view>
						<view class="mt-[-44rpx]">
							<image class="w-[40rpx] h-[16rpx]" src="/static/icons/Group 388@2x.png" />
						</view>
						<view class="w-[104rpx] pt-[44rpx] text-center">
							<image class="w-[76rpx] h-[76rpx]" src="/static/icons/Group 382@2x.png" />
							<view class="text-center item_text ">
								代账材料<br>
								<view class="item_text text-center">
									移交
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 3 -->
			<view class="list_item bg-white mt-[30rpx] rounded-[20rpx]">
				<view
					class="list_title flex items-center h-[74rpx] p-[20rpx]  rounded-[20rpx] rounded-bl-none  rounded-br-none border-[2rpx] border-solid border-[rgba(51,51,51,0.05)]">
					<view class="list_icon w-[36rpx] h-[36rpx] mr-[8rpx]">
						<image class="h-full w-full" src="/static/icons/fuwu.png" mode="widthFix" />
					</view>
					<view>
						<view class="z-1 relative list_title_one">
							服务项目
							<image class="z-0 w-[90rpx] h-[13rpx] absolute bottom-0 left-0" src="/static/icons/Vector 10@2x(1).png" />
						</view>
					</view>
				</view>
				<view class="content mt-[32rpx] p-[20rpx] pb-[50rpx] pt-0">
					<!--  -->
					<view v-for="(item, index) in ProductList" @click="toProjectDetail(item)" :key="item.id"
						class="flex  mt-[30rpx] justify-between">
						<view class="w-[140rpx] mr-[30rpx] flex justify-center items-center">
							<image class="w-[140rpx] h-[104rpx] rounded-[8rpx]" :src="`https://picsum.photos/70/7${index}`" />
						</view>
						<view class="w-2/3 flex flex-col justify-between">
							<view class="fuwu_title">
								{{ item.productName }}
							</view>
							<view class="fuwu_price">
								¥ {{ item.stock }}
							</view>
						</view>
						<view class="w-1/3 flex items-end justify-end">
							<view class="rounded-[8rpx] text-center fuwu_btn">
								立即签约
							</view>
						</view>
					</view>
					<!--  -->
				</view>
			</view>
			<!-- 4 -->
			<view class="list_item bg-white mt-[30rpx] rounded-[20rpx] mb-[30rpx]">
				<view
					class="list_title flex items-center h-[74rpx] p-[20rpx]  rounded-[20rpx] rounded-bl-none  rounded-br-none border-[2rpx] border-solid border-[rgba(51,51,51,0.05)]">
					<view class="list_icon w-[36rpx] h-[36rpx] mr-[8rpx]">
						<image class="h-full w-full" src="/static/icons/fujin.png" mode="widthFix" />
					</view>
					<view>
						<view class="z-1 relative list_title_one">
							附近公司
							<image class="z-0 w-[90rpx] h-[13rpx] absolute bottom-0 left-0" src="/static/icons/Vector 10@2x(1).png" />
						</view>
					</view>
				</view>
				<view class="content mt-[32rpx] mb-[50rpx] p-[30rpx] pb-[50rpx] text-[#333] text-sm">
					北京民欣运营科技有限公司
				</view>
			</view>
			<!-- <view v-for="item in 100" :key="item" style="height: 100rpx;">
				{{ item }}
			</view> -->
		</view>
	</view>
</template>

<script setup>
// 接口请求示例
// import {
// 	login
// } from "@/api/base.js"
import {
	ref, nextTick
} from 'vue'
import {
	useHeight
} from '@/hook/useHeight'
import {
	getProductList
} from '@/api/good.js'
const {
	contentHeight,
	safeAreaHeight,
	statusHeight,
	navHeight,
	windowBottom
} = useHeight()
const list = ref(['https://picsum.photos/335/120', 'https://picsum.photos/335/121', 'https://picsum.photos/335/122'])
const ProductList = ref([])
const getData = () => {
	getProductList().then(res => {
		console.log('res', res)
		if (res.code === 200) {
			console.log('res', res.data)
			ProductList.value = res.data
		}
	})
}
getData()

const toProjectDetail = (item) => {
	console.log('item------', item.productName)
	uni.navigateTo({
		url: '/pages/projectDetails/projectDetails',
		success: function (res) {
			console.log('success', res)
			// 通过eventChannel向被打开页面传送数据
			res.eventChannel.emit('acceptDataFromOpenerPage', {
				data: item
			})
		}
	})
}
</script>

<style lang="scss" scoped>
.index {
	height: 100vh;
	background: linear-gradient(180deg, rgba(45, 106, 246, 0.2) 1%, rgba(104, 216, 254, 0.1) 92%);
	box-sizing: border-box;
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
	z-index: -1;
	width: 100vw;
}

.header_bg {
	width: 100%;
	height: 100%;
}


.list_item {
	// width: 670rpx;
}


.list_title {
	height: 74rpx;
	background: linear-gradient(2deg, rgba(255, 255, 255, 1) 13%, rgba(240, 251, 254) 100%);
	border-radius: 20rpx 20rpx 20rpx 20rpx;
}

.list_title_one {
	font-family: PingFang SC, PingFang SC;
	font-weight: 500;
	font-size: 30rpx;
	color: #333333;
	line-height: 36rpx;
}

.item_text {
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 26rpx;
	color: #333333;
	line-height: 36rpx;
}

.fuwu_title {
	font-family: PingFang SC, PingFang SC;
	font-weight: 500;
	font-size: 28rpx;
	color: #333333;
}

.fuwu_price {
	font-weight: 500;
	font-size: 30rpx;
	color: #2D6AF6;
	line-height: 36rpx;
}

.fuwu_btn {
	width: 128rpx;
	height: 48rpx;
	background: #2D6AF6;
	border-radius: 32rpx 32rpx 32rpx 32rpx;
	font-family: PingFang SC, PingFang SC;
	font-weight: 500;
	font-size: 24rpx;
	color: #FFFFFF;
	line-height: 48rpx;
}

.list_icon {}
</style>