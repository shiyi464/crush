<script setup lang="ts">
</script>

<template>
  <div class="tv">
    <div class="cube">
      <div class="sider front"></div>
      <div class="sider back"></div>
      <div class="sider left"></div>
      <div class="sider right"></div>
      <div class="sider top"></div>
      <div class="sider bottom"></div>

      <div class="sider sider1 front1"></div>
      <div class="sider sider1 back1"></div>
      <div class="sider sider1 left1"></div>
      <div class="sider sider1 right1"></div>
      <div class="sider sider1 top1"></div>
      <div class="sider sider1 bottom1"></div>
    </div>
  </div>
</template>

<style scoped>
.tv {
  width: 100%;
  height: 100%;
  perspective: 1000px;
  background: rgba(0, 0, 0, 0.9);
}

@keyframes s {
  from{
    transform:rotateX(-30deg) rotateY(30deg);
  }
  to {
    transform:rotateX(-30deg) rotateY(-330deg);
  }
}
.cube {
  --w:40px;
  animation: s 20s linear infinite;
  width: var(--w);
  height: var(--w);
  position: relative;
  transform-style: preserve-3d;
  transform-origin: calc(var(--w) / 2) calc(var(--w) / 2) 0;
  left: calc(50% - var(--w) / 2);
  top: calc(50% - var(--w) / 2);
  transform: rotateX(-30deg) rotateY(30deg);
  --l:50px;

  .sider1{
    --s:100px;
    opacity: .2;
    --sw:calc(var(--w) + var(--s));
    width: var(--sw);
    height: var(--sw);
    left: calc(0px - var(--s) / 2);
    top: calc(0px - var(--s) / 2);
  }
  &:hover{
    --l:150px;
    .sider1{
      --wy:80px;
      opacity: .7;
      left: calc(0px - var(--s) / 2 - var(--wy) / 2);
      top: calc(0px - var(--s) / 2 - var(--wy) / 2);
      width:calc(var(--sw) + var(--wy));
      height:calc(var(--sw) + var(--wy));
    }
  }
}

.sider {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  left: 0;
  top: 0;
  opacity: .9;
  transition: all 0.3s linear;
}

.front {
  transform: rotateY(0deg) translateZ(calc(var(--w) / 2));
  background: url("@/assets/4.jpg");
  background-size: cover;
}

.front1 {
  transform: rotateY(0deg) translateZ(calc(var(--w) / 2 + var(--l)));
  background: url("@/assets/4.jpg");
  background-size: cover;
}

.back {
  transform: rotateY(180deg) translateZ(calc(var(--w) / 2));
  background: url("@/assets/1.jpg");
  background-size: cover;
}
.back1 {
  transform: rotateY(180deg) translateZ(calc(var(--w) / 2 + var(--l)));
  background: url("@/assets/1.jpg");
  background-size: cover;
}

.left {
  transform: rotateY(90deg) translateZ(calc(var(--w) / 2));
  background: url("@/assets/2.jpg");
  background-size: cover;
}
.left1 {
  transform: rotateY(90deg) translateZ(calc(var(--w) / 2 + var(--l)));
  background: url("@/assets/2.jpg");
  background-size: cover;
}

.right {
  transform: rotateY(-90deg) translateZ(calc(var(--w) / 2));
  background: url("@/assets/3.jpg");
  background-size: cover;
}
.right1 {
  transform: rotateY(-90deg) translateZ(calc(var(--w) / 2 + var(--l)));
  background: url("@/assets/3.jpg");
  background-size: cover;
}

.top {
  transform: rotateX(-90deg) translateZ(calc( var(--w) / 2));
  background: url("@/assets/tz.jpg");
  background-size: cover;
}
.top1 {
  transform: rotateX(-90deg) translateZ(calc(var(--w) / 2 + var(--l)));
  background: url("@/assets/tz.jpg");
  background-size: cover;
}

.bottom {
  transform: rotateX(90deg) translateZ(calc(var(--w) / 2));
  background: url("@/assets/5.jpg");
  background-size: cover;
}
.bottom1 {
  transform: rotateX(90deg) translateZ(calc(var(--w) / 2 + var(--l)));
  background: url("@/assets/5.jpg");
  background-size: cover;
}
</style>
