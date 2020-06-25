<template>
  <div id="app">
    <div class="draggable">
      <vuedraggable 
        class="draggableTable" 
        element="table" 
        v-model="tableData" 
        :options="dragOptions" 
        :move="onMove" 
        @start="isDragging=true"
        @end="isDragging=false">
          <tr 
            v-for="(item,index) in tableData" 
            :key="index" 
            :class="['tableItem',{'tableItemChecked': item.checked}]">
            <td @mouseenter="handleMouseenter(item)" >
              <label><input type="checkbox" v-model="item.checked">移入选中</label>
            </td>
            <td @click="handleClick(item)">点击切换选中</td>
            <td class="badge1">{{item.date}}</td>
            <td class="badge2">{{item.name}}</td>
            <td class="badge3">{{item.address}}</td>
            <td class="drag">选中行拖动排序</td>
          </tr>
      </vuedraggable>
    </div>
    <!-- <transition-group type="transition" class="draggableTr" :name="'flip-list'">
    </transition-group> -->
  </div>
</template>

<script>
import vuedraggable from 'vuedraggable';
export default {
  name: "app",
  data() {
    return {
      isDragging: false,
      dragOptions: {
        animation: 300,
        group: "description",
        ghostClass: "ghost",
        draggable: ".tableItemChecked",
        handle: ".drag",
        chosenClass: ".abc123"
      },
      tableData: [{
        checked: true,
        date: '2011-01-01',
        name: '王小虎1',
        address: '河南省驻马店市 1111 弄'
      }, {
        checked: false,
        date: '2012-02-02',
        name: '王小虎2',
        address: '北京市朝阳区 2222 弄'
      }, {
        checked: false,
        date: '2013-03-03',
        name: '王小虎3',
        address: '浙江省杭州市 3333 弄'
      }, {
        checked: false,
        date: '2014-04-04',
        name: '王小虎4',
        address: '江西省南昌市 4444 弄'
      }]
    }
  },
  components: {vuedraggable},
  mounted() {},
  methods: {
    handleClick(item){
      // item.checked = false;
      item.checked = !item.checked;
    },
    handleMouseenter(item){
      item.checked = true;
    },
    onMove(e) {
      console.log(e)
    }
  }
};
</script>

<style scoped lang="less">
  .draggable {
    width: 1000px;
    height: 500px;
    background: #eee;
    margin: 0 auto;
    .draggableTable{
      width: 100%;
      border-collapse: collapse;
      .draggableTr{
        display: block;
        width: 100%;
      }
      tr{
        width: 100%;
      }
      td{
        border: solid 1px #ccc;
        height: 42px;
        line-height: 42px;
        padding: 20px;
        cursor: pointer;
        label{
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
    }
  }
</style>
