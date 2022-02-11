<template>
  <div class="hello">
    <h1 class="msg">{{ msg }}</h1>
    <button type="button" @click="handleClick">click</button>
    <p>name:{{ name }}</p>
    <p>sex:{{ sex }}</p>
    <p>age:{{ realAge }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from 'store/user';

defineProps<{ msg: string }>();

const userStore = useUserStore();
const { name, sex, realAge } = storeToRefs(userStore);

const handleClick = () => {
  userStore.setInfo({
    name: '花木兰',
    sex: '女',
    age: 2,
  });
};
</script>

<style scoped></style>
