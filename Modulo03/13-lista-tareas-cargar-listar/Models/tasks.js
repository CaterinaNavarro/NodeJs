import Task from './task.js'

export default class Tasks {

    list = null;

    constructor()
    {
        this.list = {};
    }

    loadTasksFromArray = (arrTasks) => {
        arrTasks.forEach(task => {
            this.list[task.id] = task;
        });
    }

    createTask = descrip => {
        const task = new Task(descrip);
        this.list[task.id] = task;
    
    }

    listTasks = () => this.list;
    
    getArrList = () => {
        const arrList = Object.entries(this.list).map(task => task[1]);
        return arrList;
    }

    fullList = () => {
        const arrList = Object.entries(this.list).map(task => task[1]);
        const fullList = arrList.map(task => (
            {
                desc: task.desc, 
                state: task.dateCompleted ? 1 : 0
            }
        ));

        return fullList;
    }

}
