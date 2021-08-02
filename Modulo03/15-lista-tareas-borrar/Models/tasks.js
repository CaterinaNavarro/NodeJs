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
        const arrList = this.getArrList();
        const fullList = arrList.map(task => (
            {
                desc: task.desc, 
                state: task.dateCompleted ? true : false
            }
        ));

        return fullList;
    }

    listCompletedTasks = (completed = true) => this.fullList().filter(task => task.state === completed).map(task => task.desc);
    
    deleteTask = (id) => delete this.list[id];
    
}
