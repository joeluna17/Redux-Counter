import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, WAIT_TO_INCREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
        return{
           count: state.count += 1,
        // someOtherStateVar: action.payload
        }
    case DECREMENT:
    // Fill in the body of this case
        return {
          count: state.count -= 1,
        }
    case INCREMENT_IF_ODD:
        return{
          count: state.count%2 === 0? state.count : state.count +=1  
        }
    case WAIT_TO_INCREMENT:
        return{
          count: state.count += 1
        }

    default:
      return state;
  }
};