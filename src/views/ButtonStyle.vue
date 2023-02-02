<template>
  <button class="btn line">悬浮上左、下右</button>
  <br />
  <button class="btn light">亮光</button>
  <br />
  <button class="btn flash">闪烁</button>
  <br />
  <div class="smoky-content">
    <p class="smoky">烟消</p>
    <p class="smoky">云散</p>
  </div>
  <br />
  <span class="streamer">文字颜色流光效果</span>
</template>

<script lang="ts" setup></script>

<style scoped>
.btn {
  position: relative;
  display: inline-block;
  border: none;
  color: #333;
  cursor: pointer;
  width: 200px;
  height: 40px;
  background: lightblue;
  border-radius: 2px;
  margin-bottom: 40px;
}

/*线条*/
.line::before,
.line::after {
  pointer-events: none;
  content: '';
  position: absolute;
  border: 1px solid transparent;
  width: 0px;
  height: 0px;
  border-radius: 2px;
}
.line::before {
  top: 0px;
  left: 0px;
}
.line::after {
  bottom: 0px;
  right: 0px;
}
.line:hover::before,
.line:hover::after {
  width: 100%;
  height: 100%;
  transition: width 0.2s ease-out, height 0.2s ease-out 0.2s;
}
.line:hover::before {
  border-top-color: #333;
  border-right-color: #333;
}
.line:hover::after {
  border-bottom-color: #333;
  border-left-color: #333;
}

/*闪动*/
.light {
  animation: shineLight 1.8s infinite;
}
@keyframes shineLight {
  0% {
    box-shadow: 0 0 0 0 rgba(12, 97, 207, 0.4);
  }

  100% {
    box-shadow: 0 0 0 12px rgba(12, 97, 207, 0);
  }
}

/*光亮*/
.light {
  animation: shineLight 1.8s infinite;
}
@keyframes shineLight {
  0% {
    box-shadow: 0 0 0 0 rgba(12, 97, 207, 0.4);
  }

  100% {
    box-shadow: 0 0 0 12px rgba(12, 97, 207, 0);
  }
}

/*闪烁*/
.flash {
  animation: flash 1s infinite;
}
@keyframes flash {
  0%,
  50%,
  100% {
    opacity: 1;
    transform: scale(1.1);
  }

  25%,
  75% {
    opacity: 0.4;
    transform: scale(1);
  }
}

/*烟雾*/
.smoky-content {
  display: flex;
  justify-content: center;
}
.smoky:nth-child(1) {
  animation-delay: 1s;
}

.smoky:nth-child(2) {
  animation-delay: 1.2s;
}
.smoky {
  text-shadow: 0 0 0 #333;
  animation: smoky 4s infinite;
}
@keyframes smoky {
  60% {
    text-shadow: 0 0 40px #333;
  }

  100% {
    text-shadow: 0 0 20px #333;
    transform: translate3d(6em, -2em, 0) rotate(-40deg) skew(40deg) scale(1.2);
    filter: blur(2px);
    opacity: 0;
  }
}

/*流光*/
.streamer {
  font-size: 24px;
  font-weight: bolder;
  background: linear-gradient(
    135deg,
    #0eaf6d,
    #ff6ac6 25%,
    #147b96 50%,
    #e6d205 55%,
    #2cc4e0 60%,
    #8b2ce0 80%,
    #ff6384 95%,
    #08dfb4
  );
  /* 文字颜色填充设置为透明 */
  -webkit-text-fill-color: transparent;
  /* 背景裁剪，即让文字使用背景色 */
  -webkit-background-clip: text;
  background-size: 200% 100%;
  animation: flowCss 3s infinite linear;
}

@keyframes flowCss {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -400% 0;
  }
}
</style>
