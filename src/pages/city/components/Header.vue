<template>
  <div class="header">
      <router-link to="/list" class="iconfont back" tag="div">
          <svg t="1611832213220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7261" width="200" height="200"><path d="M300.519361 543.265092C284.051429 525.767634 284.113506 498.16628 300.519361 480.734779L683.39863 73.91899C694.765049 61.841975 713.902449 61.142664 726.143208 72.357036 738.383967 83.571407 739.09276 102.452807 727.726341 114.529822L344.847071 521.345611C349.953083 515.920385 349.970675 508.098179 344.847071 502.654261L727.726341 909.47005C739.09276 921.547065 738.383967 940.428464 726.143208 951.642836 713.902449 962.857207 694.765049 962.157896 683.39863 950.080881L300.519361 543.265092Z" p-id="7262" fill="#515151"></path></svg>            </router-link>
     </router-link>
     <div class="text">选择出发站</div>
  </div>
</template>

<script>
export default {
    name:"city"
}
</script>

<style lang="less" scoped>
  .header{
    width: 100%;
    height: .8rem;
    padding: .1rem;
    background: #fff;
    display: flex;
    line-height: .8rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    .back{
      width: 10%;
      height: 100%;
       svg{
          width: .5rem;
          height: .5rem;
        }
    }
    .text{
      height: 100%;
      width: 80%;
      text-align: center;
      font-size: .52rem;
      line-height: .7rem;
    }
  }
</style>