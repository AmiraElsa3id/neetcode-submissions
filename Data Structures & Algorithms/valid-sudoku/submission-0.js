class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let flag = true;
        function checkRow(row,numIndex){
            for(let i =0 ; i<board.length;i++){
                if(i==numIndex)continue;
                if(board[row][i] !== "." && board[row][i]== board[row][numIndex])return false;
            }
            return true;
        }

        function checkCol(col,numIndex){
            for(let i =0 ; i<board.length; i++){
                if(i==numIndex)continue;
                if(board[i][col] !== "." && board[i][col]== board[numIndex][col])return false;
            }
            return true;
        }

        /*          
        *  (00,22),(03,25),(06,28) 
        *  (30,52),(33,55),(36,58)
        *  (60,82),(63,85),(66,88)
        */
 
        function checkBox(startI,startJ,endI,endJ,numi,numj, num){
            if (num === ".") return;
            for(let i=startI ; i<=endI; i++){
                for(let j= startJ ;j<=endJ;j++){
                    if(i==numi && j==numj) continue;
                    if(board[i][j]==num) flag=false;
                }
            }

        }
        


        for(let i= 0 ; i<board.length ; i++){
            for(let j= 0;j<board.length ;j++){
                if(board[i][j] === ".") continue;
                if(!checkRow(i, j) || !checkCol(j, i) ){
                    return false;
                }

                if(i<=2 && j <=2 )checkBox(0,0,2,2,i,j,board[i][j])
                else if(i<=2 && j <=5 )checkBox(0,3,2,5,i,j,board[i][j])
                else if(i<=2 && j <=8 )checkBox(0,6,2,8,i,j,board[i][j])

                else if(i<=5 && j <=2 )checkBox(3,0,5,2,i,j,board[i][j])
                else if(i<=5 && j <=5 )checkBox(3,3,5,5,i,j,board[i][j])
                else if(i<=5 && j <=8 )checkBox(3,6,5,8,i,j,board[i][j])

                else if(i<=8 && j <=2 )checkBox(6,0,8,2,i,j,board[i][j])
                else if(i<=8 && j <=5 )checkBox(6,3,8,5,i,j,board[i][j])
                else if(i<=8 && j <=8 )checkBox(6,6,8,8,i,j,board[i][j])

                if (!flag) return false;
            }
        }
        return true;
    }
}
