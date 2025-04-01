import config from "../config.js"
export default {
	/**
	 * 处理图片地址
	 * @param {String} value 图片地址
	 */
	img: function(value) {
		return (!value ? '/static/logo.png' : value.startsWith('http') ? value : config.IMAGE_URL + value)
	}
}
