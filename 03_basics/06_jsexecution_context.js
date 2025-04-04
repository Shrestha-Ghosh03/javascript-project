/* JAVA EXECUTION CONTEXT

1. Global EXEcution context
2.Function execution context
3.Eval execution context

{} -> memory creation phase
 -> execution phase


See how javascript works

 let val1 = 10                          |  step 1: Global execution locate in 'this'
 let val2 = 5                           |  step 2: Memory phase -> stores variables val1=undefined,val2=undefined
 function addNum(num1, num2) {          |          addNum -> definition , result =undefined,result2=undefined
    let total = num1+num2               |  step 3:Execution phase -> val1=10,val2=5,addnum->another executional context (means step 2 & step 3 occurs)
    return total                        |                                               [new variable environment + execution thread] after this it will be deleted
 }                                      |               a> memory phase1: val1=undefined,val2=undefined,total=undefined
 let result = addNum(val1,val2)         |               b> execution phase1: num=10,num2=5,total=15 
 let result2 = addNum(10,2)             |          total return to global execution context(step 1)
                                        |       result=15,
                                        | for result2 the nve + thread will be started again
                                        |            a> memory phase1: val1=undefined,val2=undefined,total=undefined   
                                        |            b> execution phase1: num=3,num2=2,total=5
                                        |        total return to global execution context(step 1)
                                        |   result2=5 

Call Stack
        |
        |
        |
        |
        |
        |     two()                 |
        |                           |
        |      one()                |
        |___________________________| 
        |  global execution context |                         
        |___________________________|
works on lifo(last in first out)
in call stack each function comes and returns back
if there is any function is called in another function the call stack shows the functions on a stack
