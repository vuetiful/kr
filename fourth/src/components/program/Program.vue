<template lang="html">
  <el-container id="program" class="container" direction="vertical">
    <div id="content">
      <h1>프로그램</h1>
      <ul class="timeline">
        <li class="event" v-for="session of program" v-bind:data-date="session.time" v-bind:key="session.time">
          <h3>{{ session.title }}</h3>
          <div v-if="!!session.presenter">
            <p>
              {{ session.presenter.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script>
import { program } from '@/store/store'
import Session from '@/components/program/Session'

export default {
  data () {
    return {
      program
    }
  },
  components: {
    Session
  }
}
</script>

<style lang="less" scoped>
/* Variables */

@background: #252827;

@color-primary: #42b883;
@color-light: black;
@spacing: 50px;
@radius: 4px;

@date: 120px;
@dotborder: 4px;
@dot: 11px;
@line: 4px;

@font-title: 'Oswald', sans-serif;
@font-text: 'Source Sans Pro', sans-serif;

/* Base */

#program {
  // background: @background;
  font-size: 16px;
}

strong {
  font-weight: 600;
}

h1 {
 font-family: @font-title;
 letter-spacing: 1.5px;
 color: @color-light;
 font-weight: 100;
 font-size: 2.4em;
}

#content {
  margin-top: @spacing;
  text-align: center;
}

/* Timeline */

.timeline {
  border-left: @line solid @color-primary;
  border-bottom-right-radius: @radius;
  border-top-right-radius: @radius;
  background: fade(@color-light, 3%);
  // color: fade(white, 80%);
  color: fade(black, 80%);
  font-family: @font-text;
  margin: @spacing auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: @spacing;
  list-style: none;
  text-align: left;
  font-weight: 100;
  max-width: 40%;

  h1, h2, h3 {
   font-family: @font-title;
   letter-spacing: 1.5px;
   font-weight: 100;
   font-size: 1.2em;
  }

  .event {
    border-bottom: 1px dashed fade(@color-light, 10%);
    padding-bottom: (@spacing * 0.5);
    margin-bottom: @spacing;
    position: relative;

    &:last-of-type {
      padding-bottom: 0;
      margin-bottom: 0;
      border: none;
    }

    &:before, &:after {
      position: absolute;
      display: block;
      top: 0;
    }

    &:before {
      left: (((@date * 0.6) + @spacing + @line + @dot + (@dotborder * 2)) * 1.5) * -1;
      color: fade(@color-light, 40%);
      content: attr(data-date);
      text-align: right;
      font-weight: 100;
      font-size: 0.9em;
      min-width: @date;
    }

    &:after {
      box-shadow: 0 0 0 @dotborder fade(@color-primary,100%);
      left: (@spacing + @line + (@dot * 0.35)) * -1;
      background: lighten(@background,5%);
      border-radius: 50%;
      height: @dot;
      width: @dot;
      content: "";
      top: 5px;
    }
  }
}
</style>
