<template>
  <div class="app">
    <header>
      <div class="txt">
        <span>My To-do list</span>
        <div class="line"></div>
      </div>
    </header>
    <todo-create></todo-create>
    <todo-list></todo-list>
    <todo-completed></todo-completed>
  </div>
</template>
<script>
import TodoCreate from '@/components/TodoCreate.vue'
import TodoList from '@/components/TodoList.vue';
import TodoCompleted from './components/TodoCompleted.vue';
export default{
  components: {
    TodoCreate,
    TodoList,
    TodoCompleted,
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: 'FregatBold';
  src: url('@/assets/Fregat_bold.otf');
}
@font-face {
  font-family: 'Fregat';
  src: url('@/assets/Fregat_regular.otf');
}
*{
  margin: 0;
  padding: 0;
}
.app{
  background-color: #E6E3E1;
  width: 100%;
  min-height: 100vh;
  header{
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #95775A;
    .txt{ 
      span{
        font-family: 'FregatBold';
        color: #E6E3E1;
        font-size: 30px;
      }
    }
  }
}
.line{
  width: 100%;
  height: 5px;
  background-color: #E6E3E1 ;
}
@media screen and (max-width: 768px) and (min-width: 500px){
  header{
    height: 10vh;
  }
}
@media screen and (max-width: 499px) and (min-width: 200px){
  header{
    height: 12vh;
  }
}
</style>
