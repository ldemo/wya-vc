<!-- 仅展示最基本的用法 -->
<template>
	<div style="padding: 20px">
		<h1>Basic</h1>
		<div v-for="fit in fits" :key="fit">
			<vc-img :src="url" :fit="fit" style="width: 100px; height: 100px" />
			<span>{{ fit }}</span>
		</div>
	</div>
</template>
<script>
import Img from '..';

export default {
	name: "vc-tpl-basic",
	components: {
		'vc-img': Img,
	},
	data() {
		return {
			fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
			url: 'https://oss.ruishan666.com/image/xcx/180313/942996157518/10053669,2880,1800.jpg'
		};
	},
	computed: {
		
	},
	methods: {
	}
};
</script>
