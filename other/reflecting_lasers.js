/**
 * reflecting_laser.js
 *
 * Some company's HackerRank coding challenge.
 * Had 3 hours for it. Asked me to use object-oriented design
 * and write readable, maintainable, modular code.
 *
 * A field is given. The field has prisms (^, v, <, >) which
 * redirect a beam of light in the direction they're pointing,
 * regardless of entry direction.
 *
 * The field also has mirrors (/, \, O). The slashes reflect
 * the laser 90 degrees, while the O reflects it 180 degrees
 * back where it came from.
 *
 * The laser starts at '@', going right. Determine the number
 * of positions the laser goes through before exiting the field
 * and log it to the console. If an infinite loop exists, detect
 * it immediately and print -1. Going through a loop twice before
 * printing -1 is unacceptable.
 */

/**
 * [lasers description]
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
function lasers(input) {
    //Turn the input into a matrix
    const matrix = input.split('\n').map(line => line.split(''));
    const numRows = matrix.length;
    const numColumns = matrix[0].length;

    //Find start location. Change '@' to '-'.
    const thisPoint = {};
    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j < numColumns; j++) {
            if(matrix[i][j] === '@') {
                thisPoint.row = i;
                thisPoint.column = j;
                matrix[i][j] = '-';
                break;
            }
        }

        if(thisPoint.row !== undefined) break;
    }
    
    /**
     * Keep track of the laser's direction changes.
     * Use an ES6 Set for O(1) insertion & lookup.
     */
    const directionChanges = new Set();
    let count = 1;
    let direction = 'r';

    /**
     * Only break out of the loop if the laser beam exits the
     * matrix boundaries or if a repeat is found.
     */
    while(1) {
        let thisChar;

        if(direction === 'r') { //moving right
            thisPoint.column++;            
            if(thisPoint.column >= numColumns) break;
            
            thisChar = matrix[thisPoint.row][thisPoint.column];
            if(thisChar === 'v' || thisChar === '\\') {
                direction = 'd';
            } else if(thisChar === '^' || thisChar === '/') {
                direction = 'u';
            } else if(thisChar === '<' || thisChar === 'O') {
                direction = 'l';
            }
        } else if(direction === 'l') {  //moving left
            thisPoint.column--;
            if(thisPoint.column < 0) break;
            
            thisChar = matrix[thisPoint.row][thisPoint.column];
            if(thisChar === 'v' || thisChar === '/') {
                direction = 'd';
            } else if(thisChar === '^' || thisChar === '\\') {
                direction = 'u';
            } else if(thisChar === '>' || thisChar === 'O') {
                direction = 'r';
            }
        } else if(direction === 'u') {  //moving up
            thisPoint.row--;
            if(thisPoint.row < 0) break;
            
            thisChar = matrix[thisPoint.row][thisPoint.column];
            if(thisChar === 'v' || thisChar === 'O') {
                direction = 'd';
            } else if(thisChar === '<' || thisChar === '\\') {
                direction = 'l';
            } else if(thisChar === '>' || thisChar === '/') {
                direction = 'r';
            }
        } else {    //moving down
            thisPoint.row++;
            if(thisPoint.row >= numRows) break;
            
            thisChar = matrix[thisPoint.row][thisPoint.column];
            if(thisChar === '^' || thisChar === 'O') {
                direction = 'u';
            } else if(thisChar === '<' || thisChar === '/') {
                direction = 'l';
            } else if(thisChar === '>' || thisChar === '\\') {
                direction = 'r';
            }
        }

        /**
         * Generate a string based on this character's position and direction
         * change. If it's a repeat, print -1 and return. Else throw it into
         * the set. This way, no mirror/prism does the same thing twice. The loop
         * is detected as soon as there is a single repeat.
         */
        if(thisChar !== '-') {
            const thisStr = `${thisPoint.row}, ${thisPoint.column}, ${direction}`;
            if(directionChanges.has(thisStr)) {
                console.log(-1);
                return;
            }
                
            directionChanges.add(thisStr);
        }
                      
        count++;
    }
    
    console.log(count);
}

lasers(
`>--^--<--v------><^<-^-^-->v<-v----->---
-v---v------<---v--------v-----^---->-^-
-<-----vv---------<--------------^v>----
----------------<-----v--v-------v-^----
-<--------v---^-^----------^>---<--->v--
->----v-->----------<--->--^------------
--v^-<>---------------->------v-v->-->^-
-^---------------v-v--->------v-v-----^-
-^-<--------<-v<-----v>--^^---->->----<-
-----vv>----^^---^-----<----<>------>---
------------^--------^-^-----<^-------v-
----------------^-------------v-----^---
----------<---------<v^^----->----------
v---------v-->-->-->-----^---^----->-v--
---------->>-^-----------<-----------v<<
---------------v<<------^-------------^-
----^--^----v---<---<---v-->------------
--^>>-------->v------<v-^-----v-v----^^-
--v----^v-^<-------------v-------^-->---
----------^v-v-->---^<---<-----v-----<^-
-------->--->----------->v---------^----
<----v------v^--------^--^------^<-^----
v---v<v--<---->--------------v-----<<--<
v-----------<-<v-->---v--->--------^^---
--<-->>-v-^----------------------------<
-<v-----^-----^--------v-----v-----<v---
--^-<-----------v---------v>------v---<<
---->--^->-^-----^----------v------<----
--<-^--v----------><v------->-----><<<>-
--<--<----->---->vv----<---v--<--->---^-
----------<>---------->-----^>^---------
v---->--^--------<<-<-----<--^v-<>-----v
-----<---<-<--------------<-^v--<-^-----
----------------><------->->-----^------
-v-------->------v-^-------^---^----->--
---->---------^-----<-------<-^---------
->-^---@--<--^-->---v---------<--->-^---
-----^--^--v---^---v---------------v----
--->------^------v---^----<-v---^-<-----
----^---------<---v-<----><------>--<>--
>-------^---^->-^------------^<^v------<
-->-------<--v-^-^>->>-<^--------->-----
-------------v-<-----------<->---------^
---------------------^-----^--->--v-----
<--<^--------^----------------<----v-->-
>>----->---^----------->---^>-----------
----v-^-<-------->-^v------------><<----
>>v----^v----->----v----<-----------v---
------------->--^--->^^--v->--------^-v-
--<-------^-------v---^^^-<>^--<--<-----`
);
//output is 117

lasers(
`/@\
---
\O/`
);
//output is -1

lasers(
`@--
//-
---`
);
//output is 3
