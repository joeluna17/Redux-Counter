export const INCREMENT = 'INCREMENT'; // action type
export const DECREMENT = 'DECREMENT';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (/*somePayload*/) => { // action creator
  // Fill in this function
  console.log("Hello from inside increment method in the actions/index.js file action creator.")
      return( // action
          {
            type: INCREMENT,
         // payload: somePayload
          }
      )
};

export const decrement = () => {
  // Fill in this function
  console.log("Hello from inside decrement method in the actions/index.js file action creator.")
    return{
        type: DECREMENT,
    }
};


export const incrementIfOdd = () => {
    return {
      type: INCREMENT_IF_ODD,
    }
}
