<template>
    <div v-if="completedTodos.length > 0" class="list">
        <div class="brownLine"></div>
        <header>
            <div class="txt">
                <span>Completed</span>
                <div class="line"></div>
            </div>
        </header>
        <div class="brownLine"></div>
        <div class="buttons">
            <v-btn class="button"
            @click="clearList()"
            > Clear List
            </v-btn>
        </div>
        <draggable
          :list="todos"
          :disabled="!enabled"
          class="drag"
          @end="onDragEnd">
          <template #item="{ element }">
            <div v-if="element.isComplete" class="list-group-item" :class="{ 'not-draggable': !enabled }">
                <v-expansion-panels class="todo-list">
                    <v-expansion-panel>
                        <v-expansion-panel-title class="panel-title" expand-icon="mdi-menu-down">
                            <div>
                                <v-checkbox 
                                v-model="element.isComplete" 
                                @click="completeTodo(element.id)" 
                                color="green" 
                                hide-details="auto"></v-checkbox>
                            </div>
                            <p :class="{'completed': element.isComplete }">{{ element.title }}</p>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="panel-text">
                            <div class="descr-text">
                                <span class="descTitle">Description:&nbsp;</span>
                                <p>{{ element.description }}</p>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
            </v-expansion-panels>
            </div>
          </template>
        </draggable> 
    </div>
</template>
<script>
import draggable from 'vuedraggable';
import { mapGetters, mapMutations } from 'vuex';
export default{
    data() {
      return {
        enabled: true,
      }
    },
    components: {
        draggable,
    },
    computed: {
        ...mapGetters(['allTodos']),
        todos(){
            return this.allTodos
        },
        completedTodos() {
            return this.todos.filter(todo => todo.isComplete);
        },
    },
    methods:{
        completeTodo(id){
            const todo = this.allTodos.find(item => item.id === id);
            if (todo) {
                todo.isComplete = !todo.isComplete;
                localStorage.setItem('todos', JSON.stringify(this.allTodos));
            }
        },
        ...mapMutations(['clearList']),
        onDragEnd(){
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }
    }
}   
</script>
<style lang="scss">
.todo-list{
    margin: 10px 0;
    width: 100%;
}
.panel-title{
    background-color: #D1C8B8;
    p{
        color: #B37840;
        font-size: 25px;
        font-family: 'FregatBold';
        width: 60%;
        overflow-wrap: break-word;
    }
}
.panel-text{
    background-color: #D1C8B8;
    width: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    .descr-text{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
        p, span{
            color: #B37840;
            width: 50%;
            font-size: 20px;
            font-family: 'FregatBold';
            overflow-wrap: break-word;
        }
    }
    
}
.buttons{
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px 30px;
        border-radius: 20px;
        border: 0px;
        font-size: 25px;
        font-family: 'Fregat';
        color: #E6E3E1;
        background-color: #B37840;
        text-transform: none;
    }
    .button:hover{
        background-color: #95775A;
        cursor: pointer;
    }
}
@media screen and (max-width: 499px) and (min-width: 200px){
  .panel-text{
    .descr-text{
        span{
            width: 60%;
        }
    }
  }
}
</style>
