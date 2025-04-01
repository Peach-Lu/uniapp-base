<template>
	<view class="main">
		<view class="title">商户端</view>
		<view class="tabs">
			<view class="item" :class="{active:current == 0}" @click="switchTo(0)">账号登录</view>
			<view class="item" :class="{active:current == 1}" @click="switchTo(1)">手机号登录</view>
		</view>

		<view class="input-box">
			<view class="row">
				<input type="text" placeholder="请输入手机号码" v-model="params.mobileNo">
			</view>
			<view class="row" style="margin-top: 60rpx;" v-show="current == 0">
				<input type="password" placeholder="请输入密码" v-model="params.password">
			</view>

			<view class="row" style="margin-top: 60rpx;" v-show="current == 1">
				<input type="text" placeholder="请输入验证码" v-model="params.code">
				<view class="code" @click="getCode">{{codeHook.codeText.value}}</view>
			</view>
		</view>

		<view class="btn" @click="submit">登录</view>

		<view class="argu">
			<u-checkbox-group v-model="checkboxValue1" placement="column">
				<u-checkbox activeColor="#00596D" shape="circle"></u-checkbox>
			</u-checkbox-group>
			我已阅读并同意<text @click="utils.$navPage('/pages/agreement/agreement?name=隐私政策')">《隐私政策》</text>和<text
				@click="utils.$navPage('/pages/agreement/agreement?name=用户协议')">《用户协议》</text>
		</view>



		<!-- 	<view class="kj-login">
			<view class="line"></view>
			<text>快捷登录</text>
			<view class="line"></view>
		</view>
		<view class="wx">
			<image src="../../static/login.png" mode=""></image>
		</view> -->


		<!-- <view class="footer">
			还没有账号？ <text @click="utils.$navPage('/pages/register/register')">马上注册</text>
		</view> -->

	</view>
</template>

<script setup>
	import user from '../../api/user';
	import useGetCode from '../../hook/useGetCode';
	import utils from '../../utils/utils';
	import {
		ref
	} from 'vue';
	import {
		useStore
	} from "vuex"
	const store = useStore()
	let current = ref(0)
	let checkboxValue1 = ref([])
	let params = ref({
		mobileNo:"18603051280",
		password:"051280"
	})
	const codeHook = useGetCode('/api/member/sendLoginSMS', params.value)

	function switchTo(idx) {
		current.value = idx
	}


	function getCode() {
		if (!params.value.mobileNo) {
			return utils.$toast("请输入联系电话")
		}
		if (!/^[1][3,4,5,,6,7,8,9][0-9]{9}$/.test(params.value.mobileNo)) {
			utils.$toast('请输入正确联系电话')
			return
		}
		codeHook.getCode()
	}

	function submit() {
		if (!params.value.mobileNo) {
			return utils.$toast("请输入手机号码")
		}
		if (!/^[1][3,4,5,,6,7,8,9][0-9]{9}$/.test(params.value.mobileNo)) {
			utils.$toast('请输入正确手机号码')
			return
		}
		if (!params.value.password && current.value == 0) {
			return utils.$toast("请输入密码")
		}

		if (!params.value.code && current.value == 1) {
			return utils.$toast("请输入验证码")
		}

		if (!checkboxValue1.value.length) {
			return utils.$toast("请阅读并同意《隐私政策》《用户协议》")
		}

		//验证码登录
		if (current.value == 1) {
			user.mobileLogin({
				...params.value
			}).then(res => {
				setUserInfo(res.data || {})
			})
		}
		//密码登录
		else {
			user.appLogin({
				...params.value
			}).then(res => {
				setUserInfo(res.data || {})
			})
		}

	}


	function setUserInfo(data) {
		store.commit("SET_USER_LOGIN", data)
		uni.setStorageSync("commercia-token", data.token)
		user.queryShopInfo({}).then(res => {
			store.commit("SET_SHOP_INFO", res.data)
		})
		setTimeout(() => {
			uni.reLaunch({
				url: '/pages/index/index'
			})
		}, 500)
	}
</script>


<style>
	page {
		background-color: #F7F8FA;
	}
</style>
<style scoped lang="scss">
	.title {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 44rpx;
		color: #00596D;
		text-align: center;
		margin-top: 80rpx;

	}

	.main {
		.footer {

			font-family: PingFang SC, PingFang SC;
			font-weight: 300;
			font-size: 30rpx;
			color: #333333;
			text-align: center;
			margin-top: 150rpx;

			text {
				color: #00596D;
			}
		}

		.wx {
			text-align: center;
			margin-top: 40rpx;

			image {
				width: 57.16rpx;
				height: 57.16rpx;
			}
		}

		.kj-login {
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: PingFang SC, PingFang SC;
			font-weight: 400;
			font-size: 30rpx;
			color: rgba(51, 51, 51, 0.3);
			margin-top: 172rpx;

			text {
				margin: 0 12px;
			}

			.line {
				width: 156rpx;
				height: 0rpx;
				border: 2rpx solid rgba(51, 51, 51, 0.3);
			}
		}

		.argu {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 30rpx;
			font-family: PingFang SC, PingFang SC;
			font-weight: 300;
			font-size: 24rpx;
			color: #333333;

			text {
				color: #00596D;
			}
		}

		.btn {
			width: 590rpx;
			height: 80rpx;
			background: #00596D;
			border-radius: 40rpx 40rpx 40rpx 40rpx;
			font-family: PingFang SC, PingFang SC;
			font-weight: 500;
			font-size: 32rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 80rpx;
			margin: 120rpx auto 0 auto;
		}

		.input-box {
			margin-top: 120rpx;
			padding: 0 56rpx;
			box-sizing: border-box;

			.row {
				padding-bottom: 24rpx;
				border-bottom: 1px solid #EDEEF0;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.code {
					width: 180rpx;
					text-align: right;
					color: #00596D;
					font-size: 28rpx;
					margin-left: 20rpx;
					border-left: 1px solid #ececec;
				}

				input {
					flex: 1;
					font-family: PingFang SC, PingFang SC;
					font-weight: 500;
					font-size: 30rpx;
					color: rgba(51, 51, 51, 0.3);
				}
			}
		}

		.tabs {
			margin-top: 92rpx;
			display: flex;
			align-items: center;
			padding: 0 176rpx;
			box-sizing: border-box;
			justify-content: space-between;
			font-family: PingFang SC, PingFang SC;
			font-weight: 500;
			font-size: 34rpx;
			color: rgba(51, 51, 51, 0.5);

			.active {
				position: relative;
				color: #00596D;
				font-weight: 500;

				&:before {
					position: absolute;
					content: '';
					display: inline-block;
					bottom: -10px;
					left: 0;
					right: 0;
					margin: 0 auto;
					width: 100%;
					height: 4rpx;
					background-color: #00596D;
				}
			}
		}
	}
</style>