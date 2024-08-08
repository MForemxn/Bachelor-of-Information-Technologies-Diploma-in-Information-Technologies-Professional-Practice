# What is a file system
- a system that manages [[data]] storage and access
	- classed into logical and physical
	- logical: what the user sees. files, directories, etc.
	- physical: where the files are physically stored
- contain files, directories, and partitions
	- directories: logical divisions of file systems for organisational purposes
	- partitions: creates physical divisions in the file system, completely separated from each other
## Trees
- **a tree is a collection of nodes along with a relation**
- every node has exactly one parent
	- except for the root, the root has no parents.
- a leaf is an end node (a node with no children)
	- usually a file or empty directory
	- siblings of files are in the same directory (share the same parent)
# File Storage
- google is a distributed file system 
	- this means hundreds of systems all connected to each other, sharing the [[data]]
- UTS has 2 [[data]] centres, one on campus and one in Macquarie park
# Types of File Allocation
- Contiguous, Chained or Linked, and Indexed
	- Contiguous: supports random access
	- Chained: list of linked blocks, sequential access
	- Indexed: similar to tree, (inode)
