<template>
    <div class="block">
        <div class="brownLine"></div>
        <div class="create">
            <div class="inp">
                <div class="todo">
                    <span>Title:</span>
                    <v-text-field 
                    class="input"
                    maxlength="50" 
                    v-model='newTodo.title' 
                    label="Enter the title" 
                    hide-details="auto"
                    ></v-text-field>
                </div>
                <div class="todo">
                    <span>Description:</span>
                    <v-text-field 
                    class="input"
                    maxlength="50" 
                    v-model='newTodo.description' 
                    label="Enter the description" 
                    hide-details="auto"
                    ></v-text-field>
                </div>
            </div>
            <v-btn class="button"
            @click="addNewTodo(newTodo)"
            > Add
            </v-btn>
        </div>
        <div class="brownLine"></div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default{
    data(){
        return{
            newTodo: {
                title: '',
                description: '',
                isComplete: false,
                id: 0
            },
        }
    },
    methods: {
        ...mapMutations(['addTodo']),
        addNewTodo(){
            if(this.newTodo.title.trim() != '' && this.newTodo.description.trim() != ''){
                this.newTodo.id = Date.now();
                this.addTodo({...this.newTodo});
                this.newTodo.title = ''; 
                this.newTodo.description = ''; 
            }
        }
    }
}
</script>
<style lang="scss">
.block{
    width: 100%;
}
.brownLine{
    width: 100%;
    height: 5px;
    background-color: #B37840;
}
.create{
    width: 100%;
    min-height: 22vh;
    background-color: #D1C8B8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    .inp{
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px 0;
        .todo{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            span{
                color: #B37840;
                font-size: 25px;
                font-family: 'FregatBold';
                margin-bottom: 5px;
            }
            input:focus{
                outline-color: #B37840;
                box-shadow: 5px 5px 15px #B37840;
            }
            .input{
                color: #B37840;
                width: 80%;
                font-size: 20px;
                border: 0;
                padding: 5px;
                font-family: 'Fregat';
            }
        }
    }
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        padding: 25px 60px;
        border: 0px;
        border-radius: 20px;
        color: #E6E3E1;
        background-color: #B37840;
        font-family: 'Fregat';
        text-transform: none;
        margin: 20px 0;
    }
    .button:hover{
        background-color: #E6E3E1;
        color: #B37840;
        cursor: pointer;
    }
}
@media screen and (max-width: 768px) and (min-width: 500px){
.create{
    width: 100%;
    .inp{
        flex-direction: column;
        width: 100%;
        margin: 20px 0;
        .todo{
            width: 100%;
        }
    }
    .button{
        margin: 20px 0;
    }
}
}
@media screen and (max-width: 499px) and (min-width: 200px){
  .create{
    width: 100%;
    .inp{
        flex-direction: column;
        width: 100%;
        margin: 20px 0;
        .todo{
            width: 100%;
        }
    }
    .button{
        margin: 20px 0;
    }
  }
}
</style>