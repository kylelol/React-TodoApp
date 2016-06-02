var $ = require('jquery');

module.exports = {
  filterTodos(todos, showCompleted, searchText) {
    var filterTodos = todos;

    //Filter by show compelted
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })

    //Filter by search text
    filterTodos = filterTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    })

    //Sort todos with non completed first
    filterTodos.sort((a, b) => {
      if (a.completed == false && b.completed == true) {
        return -1;
      } else if (a.completed == true && b.completed == false) {
        return 1;
      } else {
        return 0;
      }
    });

    return filterTodos;
  }
};
