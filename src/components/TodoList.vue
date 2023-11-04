<template>
    <div class="list">
        <draggable
          :list="todos"
          handle=".handle"
          class="drag"
          @end="onDragEnd">
          <template #item="{ element }">
            <div v-if="!element.isComplete">
                <v-expansion-panels class="todo-list">
                    <v-expansion-panel class="panel">
                        <v-expansion-panel-title  class="panel-title">
                            <button class="handle"> <v-icon>mdi-drag</v-icon></button>
                            <div class="item-container">
                                <div>
                                    <v-checkbox 
                                    v-model="element.isComplete" 
                                    @click="completeTodo(element.id)" 
                                    color="green" 
                                    hide-details="auto"></v-checkbox>
                                </div>
                                <p :class="{'completed': element.isComplete }">{{ element.title }}</p>
                            </div>
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
        ...mapMutations(['onDragEnd', 'completeTodo']),
    }
}
</script>
<style lang="scss">
.item-container{
    display: flex;
    width: 100%;
    align-items: center;
    .handle{
        background-color: #D1C8B8;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5%;
    }
}
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