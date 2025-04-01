// 是否是开发环境   true:是  false:不是
const isDevelop = false
// 基础地址   开发环境:线上环境
const BASE_URL = isDevelop ? `http://ng.zhjfd.com/` : `http://ng.zhjfd.com/`
// 项目名称    开发环境:线上环境
const PROJECT_NAME = isDevelop ? `wqjz-api` : `wqjz-api`
//请求地址
const REQUEST_URL = `${BASE_URL}${PROJECT_NAME}`
// 图片访问地址
const IMAGE_URL = `${BASE_URL}`


export default {
	isDevelop,
	BASE_URL,
	PROJECT_NAME,
	REQUEST_URL,
	IMAGE_URL
}
