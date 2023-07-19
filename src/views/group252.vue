<template>
  <div class="group252-container">
    <div class="group252-frame">
      <div class="group252-frame38">
        <div class="group252-frame37">
          <div class="group252-frame35">
            <div class="group252-frame34">
              <span class="group252-text">
                <span>Design for the Future</span>
              </span>
              <span class="group252-text2">
                <span>未来志向デザインでビジョンを現実に</span>
              </span>
            </div>
          </div>
        </div>
        <span class="group252-text4"><span>Scroll Down</span></span>
      </div>
    </div>
    <div class="group252-frame1">
      <div class="group252-frame381">
        <span class="group252-text6"><span>Scroll Down</span></span>
      </div>
    </div>
    <app-frame></app-frame>
  </div>
</template>

<script>
import AppFrame from '../components/frame'

export default {
  name: 'Group252',
  components: {
    AppFrame,
  },
  metaInfo: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.group252-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.group252-frame {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(217, 217, 217, 1);
}
.group252-frame38 {
  gap: 16px;
  display: flex;
  padding: 1px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.group252-frame37 {
  gap: 100px;
  height: 780px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.group252-frame35 {
  gap: 10px;
  width: 1478px;
  height: 252px;
  display: flex;
  padding: 0 49px;
  position: relative;
  align-items: center;
  justify-content: center;
}
.group252-frame34 {
  gap: 10px;
  top: 0px;
  left: 0px;
  width: 1474px;
  display: flex;
  padding: 7px 47px;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.group252-text {
  color: rgba(232, 233, 237, 1);
  width: 1380px;
  height: auto;
  font-size: 136px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  font-style: italic;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.group252-text2 {
  color: rgba(232, 233, 237, 1);
  height: auto;
  font-size: 24px;
  font-style: Bold;
  text-align: left;
  font-family: Noto Sans JP;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.group252-text4 {
  color: rgba(53, 217, 217, 1);
  height: auto;
  font-size: 18px;
  font-style: Medium;
  text-align: left;
  font-family: Barlow;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.group252-frame1 {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(217, 217, 217, 1);
}
.group252-frame381 {
  gap: 16px;
  display: flex;
  padding: 1px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.group252-text6 {
  color: rgba(53, 217, 217, 1);
  height: auto;
  font-size: 18px;
  font-style: Medium;
  text-align: left;
  font-family: Barlow;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
</style>
