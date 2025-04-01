import {
	ref
} from 'vue';
import request from "../utils/https.js"

function useGetCode(url, params) {


	// 是否可以发送验证码
	const isSend = ref(true)
	//秒数
	const timeCount = ref(60)
	//存放定时器
	const time = ref(null)
	// 按钮文本
	const codeText = ref('获取验证码')


	// 获取验证码
	const getCode = () => {
		if (!isSend.value) {
			return
		}
		isSend.value = false

		request.post(`${url}`, {
			...params,
			// memberType:"shop"
		}).then(res => {
			setBtnText()
		}).catch(err => {
			isSend.value = true
		})
	}


	const setBtnText = () => {
		codeText.value = `${timeCount.value}后重发`
		time.value = setInterval(() => {
			if (timeCount.value >= 1) {
				timeCount.value -= 1
				codeText.value = `${timeCount.value}后重发`
			} else {
				clearInterval(time.value || undefined)
				timeCount.value = 60
				codeText.value = '获取验证码'
				isSend.value = true
			}

		}, 1000)
	}




	return {
		codeText,
		getCode
	}


}


export default useGetCode