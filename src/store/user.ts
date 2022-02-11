import { defineStore } from 'pinia';

interface UserState {
  name: string;
  sex: string;
  age: number;
}

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: (): UserState => {
    return {
      name: '张三丰',
      sex: '男',
      age: 10,
    };
  },
  getters: {
    realAge(state) {
      return state.age * 10;
    },
  },
  actions: {
    setInfo({ name, sex, age }: UserState) {
      // this.name = name;
      // this.sex = sex;
      // this.age = age;
      this.$patch({
        name,
        sex,
        age,
      });
    },
  },
});
