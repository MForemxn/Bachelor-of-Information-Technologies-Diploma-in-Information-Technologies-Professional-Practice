
# What is Computing Theory?
- computing theory, often referred to as theoretical computer science, delves into the abstract and mathematical aspects of computing
- it encompasses a wide range of topics including algorithms, computation models, computational complexity, and information theory
- aims to understand the fundamental capabilities and limitations of computers

# Key Areas of Computing Theory
- computing theory can be broadly divided into several key areas:
	- **Algorithms and Data Structures**: focuses on the design and analysis of algorithms and the efficiency of data storage
	- **Computability Theory**: explores what problems can be solved on a computer and the resources required to do so
	- **Complexity Theory**: studies the classification of computational problems according to their inherent difficulty
	- **Information Theory**: deals with the quantification, storage, and communication of information
	- **[[Cryptography]]**: the practice and study of techniques for secure communication in the presence of third parties

# Importance of Computing Theory
- provides the foundation for the development of computer science and technology
- helps in the creation of more efficient, reliable, and secure computing systems
- enables the understanding of the limits of what computers can achieve
- drives innovation in various fields such as artificial intelligence, [[cybersecurity]], and data science

# Models of Computation
- several models of computation are used to study and understand the theoretical capabilities of computers:
	- **Turing Machines**: an abstract machine that manipulates symbols on a strip of tape according to a set of rules
	- **Finite Automata**: used to model computation with a finite amount of memory
	- **Lambda Calculus**: a formal system in mathematical logic for expressing computation based on function abstraction and application
	- **Quantum Computing**: a model that uses quantum-mechanical phenomena, such as superposition and entanglement

# Challenges in Computing Theory
- despite its advancements, computing theory faces several challenges:
	- **P vs NP Problem**: one of the most significant unsolved problems, it asks whether every problem whose solution can be quickly verified can also be solved quickly
	- **Quantum Computing**: while promising, practical and scalable quantum computing remains a challenge
	- **[[Cryptography]]**: with the advent of quantum computing, current cryptographic methods may become insecure, necessitating the development of quantum-resistant [[cryptography]]

# Future Directions
- as technology evolves, computing theory continues to explore new paradigms and models
- research in areas such as quantum computing, machine learning theory, and blockchain technology is expanding the boundaries of what is computationally possible
- ethical considerations and the societal impact of computing advancements are becoming increasingly important in the field
# Complexity Theory
- how much does it take to solve a problem?
	- how many reads are required to find a particular block of the file
	- let n be the number of blocks in the file. to find a particular block, how many blocks will you have to look through?
		- Contiguous: O(1) blocks
		- Chained/Linked: O(n) blocks
		- Indexed/Inode: O(logk(n)) blocks