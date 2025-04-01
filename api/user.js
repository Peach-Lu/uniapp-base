


import request from "../utils/https.js"

 const buildShop = (data)=>{
	return request.post(`/api/shopAudit/buildShop`,data)
}


 const appLogin = (data)=>{
	return request.post(`/api/member/appLogin`,data)
}

 const mobileLogin = (data)=>{
	return request.post(`/api/member/mobileLogin`,data)
}


 const getMemberInfo = (data)=>{
	return request.post(`/api/member/getMemberInfo`,data)
}

 const queryShopInfo = (data)=>{
	return request.post(`/api/shop/queryShopInfo`,data)
}
 const shopTotal = (data)=>{
	return request.post(`/api/shop/total`,data)
}
 const memberBankCard = (data)=>{
	return request.post(`/api/memberBankCard/query`,data)
}


 const editBank = (data)=>{
	return request.post(`/api/memberBankCard/editBank`,data)
}



export default{
	buildShop,
	appLogin,
	mobileLogin,
	getMemberInfo,
	queryShopInfo,
	shopTotal,
	memberBankCard,
	editBank
}