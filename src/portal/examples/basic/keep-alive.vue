<template>
	<vc-drawer 
		v-model="visible" 
		:mask="false" 
		:closable="true"
		:width="width"
		placement="right"
		@close="handleCancel"
	>
		<div v-if="!loading">{{ data }} </div>
		<vc-spin v-if="loading"/>
		<div @click="handleCancel">取消</div>
		<div @click="handleOk">确定</div>
	</vc-drawer>
</template>

<script>
import Spin from '../../../spin';
import Drawer from '../../../drawer';
import Portal from '../../index';

const wrapper = {
	name: "vc-tpl-basic-keep-alive",
	components: {
		'vc-drawer': Drawer,
		'vc-spin': Spin,
	},
	props: {
		data: Object,
	},
	data() {
		return {
			width: window.innerWidth / 2,
			visible: false,
			loading: false,
		};
	},
	computed: {
		
	},
	mounted() {
		this.visible = true;
	},
	methods: {
		loadData(opts = {}) {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
			}, 3000);
		},
		handleOk() {
			this.visible = false;
			this.$emit('sure');
		},
		handleCancel() {
			this.visible = false;
			this.$emit('close');
		}
	}
};

export default wrapper;

export const KeepAliveWithBefore = new Portal(wrapper, {
	alive: true,
	aliveRegExp: {
		className: /(vc-btn)/
	},
	onBefore() {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, 1000);
		});
	}
});

export const KeepAlive = new Portal(wrapper, { 
	alive: true, 
	aliveRegExp: {
		className: /(vc-btn)/
	}
});
</script>
