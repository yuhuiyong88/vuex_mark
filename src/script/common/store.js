import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

var store=new Vuex.Store({
	state:{
		tip:"提示信息",
		fn:null
	},
	mutations:{
		show(state,tip){
			state.tip=tip.info
			state.fn = tip.callback
			console.log(tip.info)
		}
	},
	actions:{
		showparams({commit},tip){
			commit("show",tip)
		}
	}
})

export {store}
