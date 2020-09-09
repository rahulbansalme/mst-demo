import { types } from "mobx-state-tree";

const TodoModel = types
    .model({
        id: types.string,
        text: types.string,
        completed: types.boolean,
    })
    .actions(self => {
        function toggle() {
          self.completed = !self.completed;
        }
    
        return { toggle };
      });

export default TodoModel;