# What is the cd command?
- the cd command stands for "change directory"
- it is a command-line instruction used to change the current working directory in various [[operating systems]], such as [[Unix Operating System|unix]], linux, and windows
- allows users to navigate the filesystem of their computer from the terminal or command prompt

# Usage of the cd command
- basic syntax: `cd [directory]`
	- to move into a specific directory, users type `cd` followed by the path to the desired directory
	- if no directory is specified, it typically defaults to the user's home directory
- examples:
	- `cd Documents` changes the current directory to the Documents folder located within the current directory
	- `cd /` navigates to the root directory of the filesystem
	- `cd ..` moves the current directory up one level in the directory hierarchy

# Special Characters and Shortcuts
- `.` refers to the current directory
- `..` refers to the parent directory of the current directory
- `~` symbol is used to represent the home directory of the current user
- `-` (dash) is used to switch back to the previous directory

# Relative vs Absolute Paths
- relative paths are used in the cd command to navigate relative to the current directory
	- e.g., `cd ../Documents` moves to the Documents directory one level up from the current directory
- absolute paths start from the root directory and provide the complete path to the target directory
	- e.g., `cd /usr/local/bin` navigates directly to the /usr/local/bin directory, regardless of the current directory

# Common Issues and Tips
- "directory not found" error occurs if the specified directory does not exist or the path is typed incorrectly
- using tab completion can help avoid typos and speed up directory navigation
- it's possible to chain directories together to move multiple levels at once, e.g., `cd folder/subfolder/subsubfolder`