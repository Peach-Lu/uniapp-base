import request from "../utils/https.js"

export const login = (data)=>{
	return request.post(`/login`,data)
}