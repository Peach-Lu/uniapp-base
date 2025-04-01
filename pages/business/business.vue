<template>
	<view class="index" :style="{ paddingTop: statusHeight + navHeight + 'px' }">
		<view class="header" :style="{ height: statusHeight + 'px' }">
			<image class="header_bg" src="/static/icons/背景@2x.png" />
			<up-navbar title="业务" @rightClick="rightClick" bgColor="transparent">
				<template #left>
					<view class="u-nav-slot flex align-center">

					</view>
				</template>
			</up-navbar>
		</view>
		<view class="container" :style="{ height: (contentHeight) + 'px', overflow: 'auto' }">
			业务
		</view>
	</view>
</template>

<script setup>
// 接口请求示例
// import {
// 	login
// } from "@/api/base.js"
import { ref } from 'vue'
import { useHeight } from '@/hook/useHeight'
import { getProductList } from '@/api/good.js'
const { contentHeight, statusHeight, navHeight } = useHeight()
const list = ref(['https://picsum.photos/335/120', 'https://picsum.photos/335/121', 'https://picsum.photos/335/122'])
const ProductList = ref([])
getProductList().then(res => {
	console.log('res', res)
	if (res.code === 200) {
		console.log('res', res.data)
		ProductList.value = res.data
	}
})
const toProjectDetail = (item) => {
	console.log('item------', item.productName)
	uni.navigateTo({
		url: '/pages/projectDetails/projectDetails',
		success: function (res) {
			console.log('success', res)
			// 通过eventChannel向被打开页面传送数据
			res.eventChannel.emit('acceptDataFromOpenerPage', { data: item })
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
</style>