  var app = new Vue({
            el: '#app',
    // add the intial work
            data: {
                todoList: [
                    { text: "wake up" },
                    { text: "eat lunch" },
                    { text: "do homework" },
                ],
                newTask: ''
            },
    // add task
            methods: {
                addTask: function () {
                    if (this.newTask == '') return;
                    this.todoList.push({
                        text: this.newTask
                    });
                    this.newTask = ''
                },
              // remove task
                removeTask: function (todo) {
                    var index = this.todoList.indexOf(todo)
                    this.todoList.splice(index, 1)
                },
            }
        });