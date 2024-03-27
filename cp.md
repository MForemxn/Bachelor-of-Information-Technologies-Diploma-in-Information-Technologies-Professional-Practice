# What is the cp command?
- the cp command stands for "copy"
- it is a command-line utility used to copy files and directories from one location to another within the filesystem of [[operating systems]] like [[Unix Operating System|unix]], linux, and windows (via Cygwin or similar tools)
- essential for tasks involving file management and backups

# Usage of the cp command
- basic syntax: `cp [options] source destination`
	- to copy a file, users specify the source file and the destination path
	- directories require either the `-r` (recursive) or `-a` (archive) option to copy all contents
- examples:
	- `cp file.txt /home/user/Documents` copies file.txt to the Documents directory
	- `cp -r folder1 folder2` copies folder1 and its contents into folder2, creating folder2 if it doesn't exist

# Options and Flags
- `-r` or `--recursive`: copy directories recursively
- `-a` or `--archive`: archive mode, preserves the attributes of files and directories
- `-i` or `--interactive`: prompts before overwrite
- `-v` or `--verbose`: displays detailed information about the copying process
- `-u` or `--update`: copies only when the source file is newer than the destination file or when the destination file is missing

# Copying Multiple Files
- the cp command can copy multiple files to a single destination directory at once
	- e.g., `cp file1.txt file2.txt /home/user/Documents` copies both file1.txt and file2.txt to the Documents directory

# Relative vs Absolute Paths
- similar to the [[cd]] command, cp supports both relative and absolute paths for specifying source and destination
	- relative paths are based on the current working directory
	- absolute paths specify the full path from the root directory

# Common Issues and Tips
- permission denied errors can occur if the user lacks the necessary permissions to read the source or write to the destination
- using the `-i` option can prevent accidental overwrites by prompting for confirmation
- the `-v` option is useful for tracking the progress of large copy operations