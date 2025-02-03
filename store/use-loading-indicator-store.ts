import { defineStore } from "pinia";

export const useLoadingIndicatorStore = defineStore("loading", () => {
  const loading = ref(true);
  const set = (value: boolean) => {
    loading.value = value;
  };
  return { loading, set };
});
