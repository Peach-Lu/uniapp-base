import {
	onLoad,
	onShow
} from "@dcloudio/uni-app"
import {
	ref,
	nextTick
} from 'vue'

export const useHeight = () => {
	const contentHeight = ref('auto')
	const safeAreaHeight = ref(0)
	const statusHeight = ref(0)
	const bottom = ref(0)
	const navHeight = ref(44)
	const Height = ref(0)
	const windowBottom = ref(0)
	onLoad(() => {
		const {
			safeArea,
			safeAreaInsets,
			windowHeight
		} = uni.getWindowInfo()
		nextTick(() => {
			// #ifdef H5
			console.log('uni.getSystemInfoSync()', uni.getSystemInfoSync())
			windowBottom.value = uni.getSystemInfoSync().windowBottom
			// #endif
		})
		

		console.log('uni.getWindowInfo()', uni.getWindowInfo())
		console.log('windowHeight', windowHeight)
		Height.value = windowHeight
		statusHeight.value = safeAreaInsets.top
		bottom.value = safeAreaInsets.bottom
		safeAreaHeight.value = safeArea.height
		contentHeight.value = windowHeight - safeAreaInsets.top - navHeight.value
		console.log('safeAreaHeight', safeAreaHeight.value)
		console.log('statusHeight', statusHeight.value)
		console.log('bottom', bottom.value)
		console.log('navHeight', navHeight.value)

	})
	return {
		Height,
		safeAreaHeight,
		contentHeight,
		statusHeight,
		navHeight,
		bottom,
		windowBottom
	}
}