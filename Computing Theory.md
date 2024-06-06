
# What is Computing Theory?
- computing theory, often referred to as theoretical computer science, delves into the abstract and mathematical aspects of computing
- it encompasses a wide range of topics including algorithms, computation models, [[computational complexity]], and [[information theory]]
- aims to understand the fundamental capabilities and limitations of computers

# Key Areas of Computing Theory
- computing theory can be broadly divided into several key areas:
	- **Algorithms and [[Data Structures]]**: focuses on the design and analysis of algorithms and the efficiency of data storage
	- **Computability Theory**: explores what problems can be solved on a computer and the resources required to do so
	- **Complexity Theory**: studies the classification of computational problems according to their inherent difficulty
	- **[[Information Theory]]**: deals with the quantification, storage, and communication of information
	- **[[Cryptography]]**: the practice and study of techniques for secure communication in the presence of third parties

# Importance of Computing Theory
- provides the foundation for the development of computer science and technology
- helps in the creation of more efficient, reliable, and secure computing systems
- enables the understanding of the limits of what computers can achieve
- drives innovation in various fields such as [[artificial intelligence]], [[cybersecurity]], and data science

# Models of Computation
- several models of computation are used to study and understand the theoretical capabilities of computers:
	- **[[Turing Machines]]**: an abstract machine that manipulates symbols on a strip of tape according to a set of rules
	- **Finite Automata**: used to model computation with a finite amount of memory
	- **Lambda Calculus**: a formal system in mathematical logic for expressing computation based on [[function]] [[abstraction]] and application
	- **[[Quantum Computing]]**: a model that uses quantum-mechanical phenomena, such as superposition and entanglement

# Challenges in Computing Theory
- despite its advancements, computing theory faces several challenges:
	- **P vs NP Problem**: one of the most significant unsolved problems, it asks whether every problem whose solution can be quickly verified can also be solved quickly
	- **[[Quantum Computing]]**: while promising, practical and scalable [[quantum computing]] remains a challenge
	- **[[Cryptography]]**: with the advent of [[quantum computing]], current cryptographic methods may become insecure, necessitating the development of quantum-resistant [[cryptography]]

# Future Directions
- as technology evolves, computing theory continues to explore new paradigms and models
- research in areas such as [[quantum computing]], [[machine learning]] theory, and blockchain technology is expanding the boundaries of what is computationally possible
- ethical considerations and the societal impact of computing advancements are becoming increasingly important in the field
# Complexity Theory
- how much does it take to solve a problem?
	- how many reads are required to find a particular block of the file
	- let n be the number of blocks in the file. to find a particular block, how many blocks will you have to look through?
		- Contiguous: O(1) blocks
		- Chained/Linked: O(n) blocks
		- Indexed/Inode: O(logk(n)) blocks



### ONE SENTENCE SUMMARY:
Computing Theory explores the fundamental principles and mathematical concepts underlying computer operation and [[algorithm]] design.

### MAIN POINTS:
1. Defines the limits of what computers can and cannot compute.
2. Introduces the concept of algorithms and their efficiency.
3. Discusses different models of computation, like [[Turing machines]].
4. Explores [[complexity classes]] such as P, NP, and NP-complete.
5. Examines the role of automata in computing theory.
6. Highlights the importance of [[data structures]] in [[algorithm]] efficiency.
7. Investigates the theory of computation's impact on [[cryptography]].
8. Considers the implications of [[quantum computing]] on classical computing theories.
9. Analyzes the role of [[formal languages]] in computing.
10. Studies the [[Church-Turing thesis]] and its significance in computing theory.

### SPECIFICS

[[Turing Machines]]
[[Turing machines]] are a fundamental concept in computing theory, representing a simple abstract computational device intended to [[help]] understand the limits of mechanical computation. A Turing machine manipulates symbols on a strip of tape according to a set of rules. Despite its simplicity, a Turing machine can be adapted to simulate the logic of any computer [[algorithm]], and it is thus considered a universal model of computation. This concept, introduced by Alan Turing in 1936, has been instrumental in the development of computer science, particularly in the fields of algorithms and [[computational complexity]].

[[Complexity Classes]]
[[Complexity classes]], such as P, NP, and NP-complete, are categories used in computing theory to classify problems based on their inherent difficulty and the resources needed to solve them. P [[class]] includes problems that can be solved quickly (in [[polynomial time]]) by a [[deterministic Turing machine]]. NP [[class]] encompasses problems for which a solution can be verified quickly by a [[deterministic Turing machine]], but it's unknown if they can be solved quickly. NP-complete problems are those in NP that are as hard as any problem in NP, meaning if any NP-complete problem can be solved quickly, all problems in NP can be. Understanding these classes helps researchers focus on the most challenging problems in computer science.

[[Church-Turing Thesis]]
The [[Church-Turing thesis]] posits that any [[function]] that can be computed by any computational device can be computed by a Turing machine. This thesis, formulated by Alonzo Church and Alan Turing in the 1930s, is a foundational principle in computing theory, suggesting that the Turing machine model is as powerful as any computation model that can be physically realized. It has profound implications for the limits of computation and has guided the development of modern computer science.

### TAKEAWAYS:
1. Computing theory provides a framework for understanding the capabilities and limitations of computers.
2. The study of algorithms and their efficiency is crucial for developing effective computer programs.
3. [[Turing machines]] and [[complexity classes]] offer foundational concepts for exploring computational limits.
4. The [[Church-Turing thesis]] is a key principle underlying all of computing theory.
5. Advances in computing theory, such as [[quantum computing]], continue to challenge and expand the boundaries of what is computationally possible.

### RELATED TERMS:
- [[Algorithm]]
- [[Data Structures]]
- [[Quantum Computing]]
- [[Cryptography]]
- [[Formal Languages]]
- [[Automata Theory]]
- [[Computational Complexity]]
- [[Polynomial Time]]
- [[Deterministic Turing Machine]]
- [[Non-deterministic Turing Machine]]
- [[Halting Problem]]
- [[Algorithmic Efficiency]]
- [[Computational Models]]
- [[Decidability]]
- [[Undecidability]]
- [[Reduction]]
- [[Heuristic]]
- [[Parallel Computing]]
- [[Distributed Computing]]
- [[Artificial Intelligence]]
- [[Machine Learning]]
- [[Information Theory]]
- [[Coding Theory]]