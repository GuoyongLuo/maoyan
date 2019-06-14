<template>
  <div class="film">
    <p>开始</p>
    <p
      v-for="item in 100"
      :key="item"
    >电影</p>
  </div>
</template>
<style lang="less">
.film{
  flex: 1;
  overflow: auto;
}

</style>
