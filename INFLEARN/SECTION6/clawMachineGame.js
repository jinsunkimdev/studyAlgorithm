// 크레인 인형뽑기(카카오 기출)
//input
const board = [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 3],
			[0, 2, 5, 0, 1],
			[4, 2, 4, 4, 2],
			[3, 5, 1, 3, 1],
		]
const moves = [1, 5, 3, 5, 1, 2, 1, 4]
//output 4
const solution = (board, moves) => {
	let answer = 0
	let stack = []
	for(let x of moves)
	{
		for(let i = 0; i < board.length; i++)
		{
			if(board[i][x - 1] !== 0)
			{
				let tmp = board[i][x - 1]
				board[i][x - 1] = 0
				if(tmp === stack[stack.length - 1])		
				{
					stack.pop()
					answer += 2
					console.log("stack pop!")
				}else { 
					stack.push(tmp)
				console.log("stack push!") }
				break
			}
		}
	}
	return answer
}
console.log(solution(board, moves))