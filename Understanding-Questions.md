# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The button dispatches the addOne() function onClick.
* addOne() returns the action ADD_ONE.
* The reducer's action adds 1 to the state's total and returns the new value.
* TotalDisplay shows the total plus 1.
