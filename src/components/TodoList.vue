<template>
    <div class="list">
        <v-expansion-panels class="todo-list">
            <v-expansion-panel
            v-for="todo in filteredTodos"
            :key="todo.id"
            >   
                <v-expansion-panel-title class="panel-title" expand-icon="mdi-menu-down">
                    <div>
                        <v-checkbox 
                        v-model="todo.isComplete" 
                        @click="completeTodo(todo.id)" 
                        color="green" 
                        hide-details="auto"></v-checkbox>
                    </div>
                    <p :class="{'completed': todo.isComplete }">{{ todo.title }}</p>
                </v-expansion-panel-title>
                <v-expansion-panel-text class="panel-text">
                    <div class="descr-text">
                        <span class="descTitle">Description:&nbsp;</span>
                        <p>{{ todo.description }}</p>
                    </div>
                </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
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