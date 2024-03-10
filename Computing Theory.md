# Complexity Theory
- how much does it take to solve a problem?
	- how many reads are required to find a particular block of the file
	- let n be the number of blocks in the file. to find a particular block, how many blocks will you have to look through?
		- Contiguous: O(1) blocks
		- Chained/Linked: O(n) blocks
		- Indexed/Inode: O(logk(n)) blocks
	- 