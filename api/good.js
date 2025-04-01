import request from "../utils/https.js"

export const getProductList = () => {
	return request.get(`/api/product/listVo`)
}

export const createdOrder = (data) => {
	console.log('data',data)
	const value =  {...data}
	// let form_data = new FormData()
	// Object.keys(value).forEach(key => {
	// 	form_data.append(key, data[key])
	// })
	// console.log('form_data',form_data)

	// return request.post(`/api/order/createdOrder`, data, {
	// 	Authorization: 'bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjNjNGI2MzhmLWQwNDEtNGE2Ny1hMDI1LTQ1MGE0OWRkMzVjOSJ9.yRyqdYD7FkCP4vLX3I6T36QsIlFavBhcbDyVlEedD7-_JvZMY45nCTcxHyagVEGba-I8ULX8_zWpt-JPphya5Q',
	// 	"content-type": "form-data"
	// })
	return request.request(`/api/order/createdOrder`, value, 'POST',{
		Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjNjNGI2MzhmLWQwNDEtNGE2Ny1hMDI1LTQ1MGE0OWRkMzVjOSJ9.yRyqdYD7FkCP4vLX3I6T36QsIlFavBhcbDyVlEedD7-_JvZMY45nCTcxHyagVEGba-I8ULX8_zWpt-JPphya5Q',
	})
}

