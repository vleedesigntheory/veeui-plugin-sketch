<template>
  <div id="app" class="vee-app">
    <ul>
      <li>
        <h3>按钮</h3>
        <span class="vee-break"></span>
        <vee-button>默认按钮</vee-button>&nbsp;
        <vee-button type="primary">普通按钮</vee-button>&nbsp;
        <vee-button type="warning">警告按钮</vee-button>&nbsp;
        <vee-button type="danger">危险按钮</vee-button>&nbsp;
        <vee-button type="info">提示按钮</vee-button>&nbsp;
        <vee-button type="success">成功按钮</vee-button>
        <span class="vee-break"></span>
        <vee-button type="info" icon="search">图标按钮</vee-button>&nbsp;
        <vee-button type="info" icon="warning-outline"></vee-button>&nbsp;
        <vee-button type="info" icon="plus" @click="fn" icon-position="right">图标按钮</vee-button>&nbsp;
        <vee-button type="success" loading>加载按钮</vee-button>
        <span class="vee-break"></span>
        <vee-button-group>
          <vee-button icon="arrow-left" icon-position="left">上一页</vee-button>
          <vee-button icon="arrow-right" icon-position="right">下一页</vee-button>
        </vee-button-group>
      </li>
      <li>
        <h3>图标</h3>
        <span class="vee-break"></span>
        <vee-icon icon="location"></vee-icon>&nbsp;
        <vee-icon icon="plus"></vee-icon>&nbsp;
        <vee-icon icon="warning-outline"></vee-icon>&nbsp;
        <vee-icon icon="search"></vee-icon>&nbsp;
        <vee-icon icon="star-on"></vee-icon>&nbsp;
        <vee-icon icon="success"></vee-icon>&nbsp;
        <vee-icon icon="paperclip"></vee-icon>&nbsp;
      </li>
      <li>
        <h3>布局</h3>
        <span class="vee-break"></span>
        <vee-row>
          <vee-col :span="12">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="12">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row>
          <vee-col :span="24">
            <div class="vee-col-medium"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row>
          <vee-col :span="6" :offset="1">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="6" :offset="3">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row :gutter="20">
          <vee-col :span="6">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="6">
            <div class="vee-col-light"></div>
          </vee-col>
          <vee-col :span="6">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="6">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row justify="end">
          <vee-col :span="6">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="6">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row :gutter="10">
          <vee-col :xs="8" :sm="6" :md="4" :lg="3" :xl="{'span':2,'offset':23,'aaa':1}">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="vee-col-light"></div>
          </vee-col>
          <vee-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
      </li>
      <li>
        <h3>容器</h3>
        <span class="vee-break"></span>
        <vee-container>
          <vee-header class="vee-container-dark">Header</vee-header>
          <vee-main class="vee-container-medium">Main</vee-main>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-header class="vee-container-dark">Header</vee-header>
          <vee-main class="vee-container-medium">Main</vee-main>
          <vee-footer class="vee-container-dark">Footer</vee-footer>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
          <vee-main class="vee-container-medium">Main</vee-main>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-header class="vee-container-dark">Header</vee-header>
          <vee-container>
            <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
            <vee-main class="vee-container-medium">Main</vee-main>
          </vee-container>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-header class="vee-container-dark">Header</vee-header>
          <vee-container>
            <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
            <vee-container>
              <vee-main class="vee-container-medium">Main</vee-main>
              <vee-footer class="vee-container-dark">Footer</vee-footer>
            </vee-container>
          </vee-container>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
          <vee-container>
            <vee-header class="vee-container-dark">Header</vee-header>
            <vee-main class="vee-container-medium">Main</vee-main>
          </vee-container>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
          <vee-container>
            <vee-header class="vee-container-dark">Header</vee-header>
            <vee-main class="vee-container-medium">Main</vee-main>
            <vee-footer class="vee-container-dark">Footer</vee-footer>
          </vee-container>
        </vee-container>
      </li>
      <li>
        <h3>输入框</h3>
        <span class="vee-break"></span>
        <vee-input v-model="value" type="text" placeholder="请输入内容" name="username"></vee-input>&nbsp;
        <vee-input v-model="value" type="password" placeholder="请输入内容" name="userpassword"></vee-input>&nbsp;
        <vee-input v-model="value" disabled type="text" placeholder="请输入内容" name="username"></vee-input>&nbsp;
        <vee-input v-model="value" clearable type="text" placeholder="请输入内容" name="username"></vee-input>&nbsp;
        <vee-input v-model="value" show-password type="password" placeholder="请输入内容" name="userpassword"></vee-input>
        <span class="vee-break"></span>
        <vee-input v-model="value" prefix-icon="time" type="password" placeholder="请输入内容" name="userpassword"></vee-input>&nbsp;
        <vee-input v-model="value" suffix-icon="time" type="password" placeholder="请输入内容" name="userpassword"></vee-input>&nbsp;
        {{value}}
      </li>
      <li>
        <h3>文件上传</h3>
        <span class="vee-break"></span>
        <p class="vee-note">
          name 输入框提交到后台的字段名字<br>
          action 提交到后端的路径<br>
          limit 限制提交个数<br>
          on-exceed 用来如果超出限制后方法<br>
          on-change 上传文件发生变化后执行方法<br>
          on-success 上传成功时候会触发<br>
          on-error 上传失败时候会触发<br>
          fileList 显示已经上传过的文件<br>
        </p>
        <span class="vee-break"></span>
        <vee-upload
          name="avatar"
          action="http://localhost:3000/upload"
          :file-list="fileList"
          :limit="3"
          accept="image/jpeg"
          multiple
          :on-exceed="handleExceed"
          :on-change="handleChange"
          :on-success="handleSuccess"
          :on-error="handleError"
          :on-progress="handleProgress"
          :beforeUpload="beforeUpload"
          drag
        >
          <vee-button type="primary" icon="upload1">上传文件</vee-button>
          <div slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </vee-upload>
      </li>
      <li>
        <h3>日历</h3>
        <span class="vee-break"></span>
        {{date}}<vee-date-picker v-model="date" :date="date"></vee-date-picker>&nbsp;
        {{dateRange}}<vee-date-range-picker v-model="dateRange"></vee-date-range-picker>
      </li>
      <li>
        <h3>无限滚动</h3>
        <span class="vee-break"></span>
        <div >
          <div>
            <ul 
              style="overflow-y:scroll"
              class="vee-infinite-box" 
              v-infinite-scroll="load"
              infinite-scroll-disabled="disabled"
              infinite-scroll-delay="delay"
              infinite-scroll-distance="distance"
              infinite-scroll-immediate="immediate"
            >
              <li v-for="c in count" :key="c">
                {{c}}
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <h3>弹出框</h3>
        <span class="vee-break"></span>
        <vee-popover
          v-model="show"
          width="200px"
          title="标题"
          content="这是一个弹窗"
          trigger="click"
          placement="right"
        >
          <vee-button type="primary" slot="reference">点我弹窗</vee-button>
        </vee-popover>
      </li>
      <li>
        <h3>轮播图</h3>
        <span class="vee-break"></span>
        <vee-carousel
          height="200px"
          autoplay
          :delay="2000"
          :initial-index="0"
          loop
          @change="change"
        >
          <vee-carousel-item>
            <div>1</div>
          </vee-carousel-item>
          <vee-carousel-item>
            <div>2</div>
          </vee-carousel-item>
          <vee-carousel-item>
            <div>3</div>
          </vee-carousel-item>
        </vee-carousel>
      </li>
      <li>
        <h3>分页器</h3>
        <span class="vee-break"></span>
        <vee-pagination
          :total="10"
          :pager-count="7"
          :current-page.sync="currentPage"
        ></vee-pagination>
      </li>
      <li>
        <h3>表格</h3>
        <span class="vee-break"></span>
        <vee-table
          :columns="columns"
          :data="data"
          @on-select="select"
        >

        </vee-table>
      </li>
    </ul>

    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: '',
      fileList: [
        {
          url: 'xxx',
          name: 'aaa'
        },
        {
          url: 'xxx',
          name: 'bbb'
        },
      ],
      date: '',
      dateRange: [],
      count: 0,
      disabled: false,
      delay: 200,
      distance: 10,
      immediate: true,
      show: '',
      currentPage: 1,
      columns: [
        {
          title: 'Name',
          name: 'name'
        },
        {
          title: 'Age',
          name: 'age'
        },
        {
          title: 'Address',
          name: 'address'
        }
      ],
      data: [
        {
          name: 'aaa',
          age: 17,
          address: 'beijing'
        },
        {
          name: 'bbb',
          age: 18,
          address: 'shanghai'
        },
        {
          name: 'ccc',
          age: 19,
          address: 'guangzhou'
        },
        {
          name: 'ddd',
          age: 20,
          address: 'shenzhen'
        }
      ]
    }
  },
  methods: {
    fn(e) {
      console.log(e)
    },
    handleExceed(files, fileList) {
      console.log('超过限制了')
    },
    handleChange(file) {
      // console.log('file', file)
    },
    handleSuccess() {

    },
    handleError() {

    },
    handleProgress() {

    },
    beforeUpload(rawFile) {
      if(rawFile.size / 1024 > 500) {
        console.log('当前超过了最大限制');
        return false;
      } else if ( !( /\.(?:jpg|png|jpeg)$/i.test(rawFile.name)) ) {
        console.log('上传文件类型不符合要求');
        return false
      }
      return true;
    },
    load() {
      this.count += 2;
    },
    change(index) {
      
    },
    select(selection, row) {

    }
  }
}
</script>

<style lang="scss">
$height: 30px;
$border-radius: 4px;
$primary: #e4007f;

.vee-app {
  padding: 10px;

  .vee-break {
    display:block;
    margin: 10px;
  }

  .vee-note {
    font-size: 12px;
    color: #999;
  }

  ul>li {
    padding: 5px;
  }

  .vee-col {
    &-dark,
    &-medium,
    &-light {
      height: $height;
      border-radius: $border-radius;
    }
    

    &-dark {
      background: #333;
    }

    &-medium {
      background: #999;
    }

    &-light {
      background: #ccc;
    }
  }

  .vee-container {
    &-dark,
    &-medium,
    &-light {
      color: #fff;
      text-align: center;
    }
    

    &-dark {
      background: #222;
      line-height: 60px;
    }

    &-medium {
      background: #666;
      line-height: 160px;
    }

    &-light {
      background: #aaa;
      line-height: 200px;
    }
  }

  .vee-infinite-box {
    width: 300px;
    height: 300px;
    border: 1px solid $primary;
  }
}
</style>