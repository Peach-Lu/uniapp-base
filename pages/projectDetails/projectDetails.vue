<template>
  <view class="index" :style="{ paddingTop: statusHeight + navHeight + 'px' }">
    <view class="header" :style="{ height: statusHeight + 'px' }">
      <image class="header_bg" src="/static/icons/背景@2x.png" />
      <up-navbar title="项目详情" @rightClick="rightClick" bgColor="transparent">
        <template #left>
          <view class="u-nav-slot flex align-center text-24">
          </view>
        </template>
      </up-navbar>
    </view>
    <view class="container" :style="{ height: (safeAreaHeight - navHeight - 49) + 'px', overflow: 'auto' }">
      <up-swiper class="mt-[30rpx]" radius="10" :list="list" height="200" indicator indicatorMode="line"
        circular></up-swiper>
      <!-- details -->
      <view>
        <view class="details_title">
          {{ productInfo?.productName }}
        </view>
        <view class="flex ">
          <view class="price">
            ¥ 
            {{ radiolist1[current]?.sellingPrice }}
            <!-- {{ sellingPrice }} -->
          </view>
          <view class="target_price">
            ¥ 
            {{ radiolist1[current]?.originalPrice }}
            <!-- {{ originalPrice }} -->
          </view>
        </view>

      </view>
      <!-- form -->
      <up-form labelPosition="left" :model="form" :rules="rules" ref="uFormRef" labelWidth="100" class="test">
        <up-form-item style="margin-top: 30rpx;" label="规格编号" prop="specNo" borderBottom >
          <up-radio-group v-model="form['specNo']" placement="row" class="flex justify-between items-center" @change="change('specNo',form.specNo)">
            <up-radio v-for="(item, index) in radiolist1" :key="index" :label="item.specSku"
              :name="item.value"></up-radio>
          </up-radio-group>
        </up-form-item>
        <up-form-item label="签约方式" prop="status" borderBottom @change="change2('status',form.status)">
          <up-radio-group v-model="form['status']" placement="row" class="flex justify-between items-center">
            <up-radio v-for="(item, index) in radiolist2" :key="index" :label="item.name" :name="item.value"></up-radio>
          </up-radio-group>
        </up-form-item>
      </up-form>
      <!-- fuwu  -->
      <view class="bg-white rounded-[10rpx] p-[17rpx] pl-[10rpx] m-b[30rpx] mt-[30rpx]">
        <up-form :model="form2" ref="uFormRef2" :rules="rules2" labelWidth="100">
          <up-form-item labelWidth="100" class="fuwu_details" label="服务企业" prop="" borderBottom
            ref="item1">
            <template #right>
              <view class="flex">
                待完善
                <up-icon name="arrow-right"></up-icon>
              </view>

            </template>
          </up-form-item>
        </up-form>
        <up-action-sheet :show="showSex" :actions="actions" title="请选择服务企业">
        </up-action-sheet>
      </view>
      <!-- fuwudetails -->
      <view class="bg-white rounded-[10rpx] p-[17rpx] pl-[10rpx] h-[400rpx] mb-[44rpx] relative">
        <view class="fuwu_details">
          服务详情
        </view>

      </view>

    </view>
    <view class="footer  pl-[52rpx] pr-[40rpx] bg-white flex items-center justify-between"
      :style="{ height: (49) + 'px' }">
      <view class="flex items-center justify-center items-center flex-col" @click="goHome">
        <image class="w-[48rpx] h-[48rpx]" src="/static//icons/AI学习-默认@2x.png" />
        <view>
          首页
        </view>
      </view>
      <view class="flex items-center">
        <view class="footer_price">
          ¥  {{ radiolist1[current]?.sellingPrice }}
        </view>
        <view class="rounded-[8rpx] text-center fuwu_btn" @click="submit">
          立即签约
        </view>
      </view>

    </view>
  </view>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted,nextTick } from 'vue'
import { onLoad, onShow, onHide, onUnload } from '@dcloudio/uni-app'
import { useHeight } from '@/hook/useHeight'
import { createdOrder } from '@/api/good.js'
// onLoad((option)=>{
//   console.log(option)
// }) 
onMounted(() => {
  const instance = getCurrentInstance().proxy
  const eventChannel = instance.getOpenerEventChannel();
  eventChannel.on('acceptDataFromOpenerPage', function ({ data }) {
    console.log('acceptDataFromOpenerPage', data)
    form.value.productNo = data.productNo
    productInfo.value = data
    console.log('productInfo',productInfo.value)
    console.log('specList', data.specList)
    radiolist1.value = data.specList.map(item => {
      return {
        specSku: item.specSku,
        specNo: item.specNo,
        value: item.specNo,
        sellingPrice:item.sellingPrice,
        originalPrice:item.originalPrice
      }
    })
    console.log('radiolist1', radiolist1.value)
  })
  console.log('uFormRef.value',uFormRef.value)
   uFormRef.value.setRules(rules)
})
// 提交
//   productNo	-	String	是	商品编号
// specNo	-	String	是	规格编号
// status	-	String	是	0线上1线下
const productInfo = ref()
const { statusHeight, navHeight, safeAreaHeight } = useHeight()
const radiolist1 = ref([])
const radiolist2 = [
  { name: '线上签约', value: '0' },
  { name: '线下签约', value: '1' },
]
const actions = [
  { name: '男' },
  { name: '女' },
  { name: '保密' },
]
const list = ref(['https://picsum.photos/335/200', 'https://picsum.photos/335/201', 'https://picsum.photos/335/202'])
const form = ref({
  productNo: '',
  specNo: '',
  status: '',
})
const form2 = ref({})
const rules2 = {}
const showSex = ref(false)
// 校验规则  
const rules = {
  specNo: [
    {
      type: 'string',
      required: true,
      message: '请选择规格',
      trigger: ['change'],
    },
  ],
  status: [
    {
      type: 'string',
      required: true,
      message: '请选择状态',
      trigger: ['change'],
    },
  ],
};
const goHome = () => {
  uni.switchTab({
    url: '/pages/index/index',
  });
}
// 表单引用  
const uFormRef = ref(null);
const current = ref(0)

const change = (name,value)=>{
  const index = radiolist1.value.findIndex(item=>item.value === value)
  nextTick(()=>{
    current.value = index
    console.log('current',current.value)
    uFormRef.value.validateField(name)
  })
}

// 提交方法  
const submit = () => {
  uFormRef.value.validate().then(valid => {
    if (valid) {
      createdOrder(form.value).then(res => {
        console.log('res', res)
      })
      uni.$u.toast('校验通过')
    } else {
      uni.$u.toast('校验失败')
    }
  }).catch((err) => {
    console.log(err)
    // 处理验证错误  
    uni.$u.toast('校验失败')
  });
}  
</script>

<style lang="scss" scoped>
.index {
  height: 100vh;
  background: linear-gradient(180deg, rgba(45, 106, 246, 0.2) 1%, rgba(104, 216, 254, 0.1) 92%);
  box-sizing: border-box;
}

view {
  box-sizing: border-box;
}

.container {
  padding: 0 40rpx;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100vw;
}

.header_bg {
  width: 100%;
  height: 100%;
}

.details_title {

  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 28rpx;
  color: #333333;
  line-height: 36rpx;
  margin-top: 30rpx;
  margin-bottom: 20rpx;
}

.price {
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 36rpx;
  color: #2D6AF6;
  line-height: 36rpx;
  margin-bottom: 30rpx;
  margin-right: 20rpx;
}

.target_price {
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 26rpx;
  color: rgba(51, 51, 51, 0.5);
  line-height: 36rpx;

}
::v-deep .test .u-form-item__body__left__content__label{
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 28rpx;
  color: rgba(51, 51, 51, 0.5)!important;
}
.fuwu_details {
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 28rpx;
  color: rgba(51, 51, 51, 0.5);
}

// footer
.footer {
  position: fixed;
  bottom: constant(safe-area-inset-bottom);
  bottom: env(safe-area-inset-bottom);
  left: 0;
  right: 0;
  height: 100rpx;
  background: #fff;
  box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
  // padding-bottom: 0;  
  // padding-bottom: constant(safe-area-inset-bottom);  
  // padding-bottom: env(safe-area-inset-bottom);  
}

.fuwu_btn {
  width: 176rpx;
  height: 60rpx;
  background: #2D6AF6;
  border-radius: 32rpx 32rpx 32rpx 32rpx;
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 30rpx;
  color: #FFFFFF;
  line-height: 60rpx;
  text-align: center;
}

.footer_price {
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 36rpx;
  color: #2D6AF6;
  margin-right: 30rpx;
}
</style>