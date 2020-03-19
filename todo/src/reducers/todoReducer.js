export const todoReducer = (state= initialValue, action) => {
    switch (action.type) {
        case "ADD_INPUT":
            return [
                ...state,
                {
                    item: action.payload,
                    id: Date.now(),
                    completed: false 
                }
            ]
        case "CLEAR_TODOS":
            return state.filter(task => !task.completed )

        case "TOGGLE_COMPLETED":
            return (
                state.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...state,
                            completed: !item.completed
                        };
                    }
                    else {
                        return item
                    }
                })
            )
        default:
            return state
    }
};



export const initialValue = [
    {
        item:"",
        completed: false,
        id: 0
    }];

