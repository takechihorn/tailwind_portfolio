<template>
<div>
  <div>
    <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div class="flex flex-col max-w-screen-xl px-2 mx-auto  lg:px-8">
          <div class="flex flex-row items-center justify-between p-4">
            <a href="/" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">SHARE MEMORIES</a>
          <div class="px-5" >
          <burger-button
          class="transition duration-700"
          :active="isActive"
          :bar-height="5"
          :bar-width="30"
          :bar-color="isActive ? '#38b508' : 'black'"
          @click="isActive = !isActive"
        />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data:()=>({
      isActive:false,
}),
methods:{
  toggle(){
    isActive = !isActive
  }
}
}
</script>

<style>

</style>
