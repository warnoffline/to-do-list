<template>
    <div class="list">
        <div class="buttons">
            <v-btn class="button" v-if="!enabled" @click="dragEn">Swap</v-btn>
            <v-btn class="button" v-else @click="dragEn">Back</v-btn>
        </div>
        <draggable
          :list="todos"
          :disabled="!enabled"
          class="drag"
          @end="onDragEnd">
          <template #item="{ element }">
            <div v-if="!element.isComplete" class="list-group-item" :class="{ 'not-draggable': !enabled }">
                <v-expansion-panels class="todo-list">
                    <v-expansion-panel class="panel">
                        <v-expansion-panel-title class="panel-title" expand-icon="mdi-menu-down">
                            <v-icon v-if="enabled">
                                mdi-drag-vertical
                            </v-icon>
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
import { mapGetters } from 'vuex';
export default{
    data() {
      return {
        enabled: false,
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
        filteredTodos() {
            return this.todos.filter(todo => !todo.isComplete);
        }
    },
    methods:{ 
        completeTodo(id){
            const todo = this.allTodos.find(item => item.id === id);
            if (todo) {
                todo.isComplete = !todo.isComplete;
                localStorage.setItem('todos', JSON.stringify(this.allTodos));
            }
        },
        onDragEnd(){
            localStorage.setItem('todos', JSON.stringify(this.todos))
        },
        dragEn(){
            this.enabled = !this.enabled
        },
    }
}
</script>
<style lang="scss">
.drag{
    width: 100%;
}
.list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.completed{
    text-decoration: line-through;
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
</style>