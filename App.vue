<script setup>
	import {
		onShow,onLoad
	} from "@dcloudio/uni-app"
	onLoad(() => {
		uni.getSystemInfo({
			success: function(res) {
				console.log('res------',res)
				uni.setStorageSync('windowHeight', res.windowHeight)
			}
		})
		uni.getWindowInfo({
			success: function(res) {
				console.log('res------',res)
				// uni.setStorageSync('windowHeight', res.windowHeight)
			}
		})
	})
	onShow(() => {
		// #ifdef MP-WEIXIN
		checkWxUpdateVersion()
		// #endif


	})


	// #ifdef MP-WEIXIN
	/**
	 * 版本更新
	 */
	const checkWxUpdateVersion = () => {
		const updateManager = uni.getUpdateManager()
		console.log('update version',updateManager)
		updateManager.onCheckForUpdate(function(res) {
			// 请求完新版本信息的回调
			if (res.hasUpdate) {

				// 新版本下载成功
				updateManager.onUpdateReady(function() {
					uni.showModal({
						title: '更新提示',
						content: '新版本已经准备好，请您重启应用，以确保正常使用。',
						success: function(res) {
							if (res.confirm) {
								// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
								updateManager.applyUpdate()
							}
						}
					})
				})
				// 新版本下载失败
				updateManager.onUpdateFailed(function() {
					uni.showModal({
						title: '更新提示',
						content: '请您删除当前小程序，到微信 “发现-小程序” 页，重新搜索打开呦~'
					})
				})
			}
		})
	}
	// #endif
</script>

<style lang="scss">
	// 引入uview-plus基础样式
	@import "@/uni_modules/uview-plus/index.scss";
	/* #ifdef H5 */
	#app{
		overflow: hidden;
	}
	/* #endif */
	page{
		height: 100vh;
	}
</style>