<template>
  <div class="parallax">
    <div class="parallax__group">
      <div class="parallax__layer parallax__layer--back">
        BACK LAYER
      </div>
      <div class="parallax__layer parallax__layer--base">
        BASE LAYER
      </div>
    </div>
    <div class="parallax__group">
      <div class="parallax__layer parallax__layer--back">
        BACK LAYER
      </div>
      <div class="parallax__layer parallax__layer--base">
        BASE LAYER
      </div>
    </div>
  </div>
</template>

<style scoped>
.parallax__group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
}
.parallax {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer--base {
  transform: translateZ(0);
  background: rgba(0, 0, 0, 0.6);
}
.parallax__layer--back {
  transform: translateZ(-1px) scale(2);
  background: red;
}
.parallax__layer--deep {
  transform: translateZ(-2px) scale(3);
}
</style>
