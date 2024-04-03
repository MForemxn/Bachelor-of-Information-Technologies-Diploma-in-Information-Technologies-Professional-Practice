# What is Memory and Process Management?
- memory and process management are critical components of an operating system (OS) that ensure efficient use of a computer's resources
- memory management controls the allocation and deallocation of memory space to various applications and [[processes]]
- process management oversees the creation, execution, and termination of [[processes]], ensuring that CPU time is optimally utilised

# Importance of Memory and Process Management
- enables multitasking by allowing multiple [[processes]] to run concurrently without interference
- optimises system performance and responsiveness by efficiently managing available memory and CPU resources
- prevents system crashes and conflicts by isolating [[processes]] and managing access to hardware resources

# Memory Management Techniques
- paging: divides memory into fixed-size blocks called pages, allowing non-contiguous memory allocation to reduce fragmentation
- segmentation: divides memory into segments based on the logical division of programs, providing a more natural approach to memory management
- virtual memory: extends the apparent amount of physical memory by using disk space, allowing larger programs to run on limited physical memory

# Process Management Concepts
- process scheduling: determines the order in which [[processes]] access the CPU, using algorithms like round-robin, first-come-first-served, and priority scheduling
- process synchronisation: coordinates the execution of [[processes]] that share resources or data, preventing race conditions and ensuring data consistency
- inter-process communication (IPC): enables [[processes]] to exchange data and signals, facilitating cooperation and data sharing among [[processes]]

# Challenges in Memory and Process Management
- balancing performance and resource utilisation: ensuring that memory and CPU resources are used efficiently without compromising system performance
- handling memory leaks and fragmentation: preventing the accumulation of unused memory blocks and the inefficient use of memory
- managing concurrency and synchronisation: avoiding deadlocks and ensuring that [[processes]] run smoothly without interfering with each other

# Memory Allocation Strategies
- static allocation: memory is allocated at compile time, and the allocation does not change at runtime
- dynamic allocation: memory is allocated at runtime as needed, allowing for more flexibility but requiring careful management to avoid leaks and fragmentation

# Process Scheduling Algorithms
- round-robin: allocates CPU time slices to each process in a circular order, ensuring fairness among [[processes]]
- shortest job first (SJF): schedules [[processes]] based on their estimated execution time, aiming to minimise waiting time
- priority scheduling: assigns priorities to [[processes]], with higher priority [[processes]] being scheduled before lower priority ones

# Impact of Efficient Memory and Process Management
- improved system stability and reliability by preventing crashes and conflicts
- enhanced user experience through faster application response times and smoother multitasking
- better utilisation of system resources, allowing for more applications to run simultaneously

# Future Trends in Memory and Process Management
- development of more intelligent and adaptive memory and process management algorithms that can learn from system usage patterns
- integration with cloud computing and virtualisation technologies to improve scalability and resource management
- increasing focus on [[security]] in memory and process management to protect against vulnerabilities and attacks