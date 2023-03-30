<template>
  <div>
    <div class="backdrop">
      <div class="dialog">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
.backdrop {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #80808094;
}
.dialog {
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 25px;
}
</style>