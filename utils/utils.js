/**
 * 跳转页面方法
 * @param {String} url 页面地址
 * @param {Boolean} hasLogin 是否登录
 * @returns 
 */
const navPage = (url, hasLogin = true) => {
	if (!hasLogin) {
		return toast('请登录')
	}
	uni.navigateTo({
		url
	})
}

/**
 * 返回上一级
 * @param {String} delta 返回页面数
 */
const navback = (delta = 1) => {
	uni.navigateBack({
		delta: delta
	})
}

/**
 * 获取上级页面参数方法
 * @returns prePage.$vm
 */
const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}



/**
 * 统一提示
 * @param {String} title 提示语
 * @param {Number} duration 显示时间
 * @param {String} mask 
 * @param {String} icon 图标
 * @returns 
 */
const toast = (title, duration = 2000, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	setTimeout(() => {
		uni.showToast({
			title,
			duration,
			mask,
			icon
		});
	}, 10);

}

/**
 * 生成UUID
 */
let generateUUID = function() {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	})
	return uuid
}


/**
 * 是否在微信打开
 * @returns Boolean
 */
let isWechat = function() {
	let ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/micromessenger/i) == 'micromessenger') {
		return true;
	}
	return false;
}


/**
 * 是否IOS设备
 * @returns Boolean
 */
let isIOS = function() {
	let ua = window.navigator.userAgent;
	if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
		return true;
	}
	return false;
}

/**
 * 时间格式化
 * @param {Date} date 时间对象
 * @param {String} pattren 时间格式
 * @returns 
 */
let formatDate = function(date, pattren) {
	var fmt = pattren || 'yyyy-MM-dd hh:mm:ss';
	var o = {
		"M+": date.getMonth() + 1, //月份 
		"d+": date.getDate(), //日 
		"h+": date.getHours(), //小时 
		"m+": date.getMinutes(), //分 
		"s+": date.getSeconds(), //秒 
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度
		"S": date.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
				.length)));
	return fmt;
}

/**
 * 转换时分秒钱
 * @param dateTimeStamp 时间差
 */
const timeago = (stringTime) => {
	
	   let str = stringTime;
	   //将字符串转换成时间格式
	   let timePublish = new Date(str);
	   let timeNow = new Date();
	   let minute = 1000 * 60;
	   let hour = minute * 60;
	   let day = hour * 24;
	   let month = day * 30;
	   let year = month * 12;
	   let diffValue = timeNow - timePublish;
	   let diffMonth = diffValue / month;
	   let diffWeek = diffValue / (7 * day);
	   let diffDay = diffValue / day;
	   let diffHour = diffValue / hour;
	   let diffMinute = diffValue / minute;
	   let diffYear = diffValue / year;
	   let result = null
	   if (diffValue < 0) {
	       result = "刚刚";
	   } else if (diffYear > 1) {
	       result = parseInt(diffYear) + "年前";
	   } else if (diffMonth > 1) {
	       result = parseInt(diffMonth) + "月前";
	   } else if (diffWeek > 1) {
	       result = parseInt(diffWeek) + "周前";
	   } else if (diffDay > 1) {
	       result = parseInt(diffDay) + "天前";
	   } else if (diffHour > 1) {
	       result = parseInt(diffHour) + "小时前";
	   } else if (diffMinute > 1) {
	       result = parseInt(diffMinute) + "分钟前";
	   } else {
	       result = "刚刚";
	   }
	   return result;
}



/**
 * 处理富文本里的图片宽度自适应
 * 1.去掉img标签里的style、width、height属性
 * 2.img标签添加style属性：max-width:100%;height:auto
 * 3.修改所有style里的width属性为max-width:100%
 * 4.去掉<br/>标签
 * @param html
 * @returns {void|string|*}
 */
const formatRichText = (html)=>{
    if (!html) return
    let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
        match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
        match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
        match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
        return match;
    });
    newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
        match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
        return match;
    });
    newContent = newContent.replace(/<br[^>]*\/>/gi, '');
    newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:block;margin:10px 0;"');
    return newContent;
}




export default {
	$formatDate:formatDate,
	$isIOS:isIOS,
	$isWechat:isWechat,
	$generateUUID:generateUUID,
	$toast:toast,
	$prePage:prePage,
	$navback:navback,
	$navPage:navPage,
	$formatRichText:formatRichText,
	$timeago:timeago
}