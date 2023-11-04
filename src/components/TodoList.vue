<template>
    <div class="list">
        <draggable
          :list="todos"
          :disabled="!enabled"
          class="drag"
          @end="onDragEnd">
          <template #item="{ element }">
            <div v-if="!element.isComplete" class="list-group-item" :class="{ 'not-draggable': !enabled }">
                <v-expansion-panels class="todo-list">
                    <v-expansion-panel>
                        <v-expansion-panel-title class="panel-title" expand-icon="mdi-menu-down">
                            <v-icon 
                                @touchstart="startDragging" 
                                @touchend="stopDragging" 
                                @mousedown="startDragging" 
                                @mouseup="stopDragging">
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
        startDragging() {
            this.enabled = true;
        },
        stopDragging() {
            this.enabled = false;
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
</style>