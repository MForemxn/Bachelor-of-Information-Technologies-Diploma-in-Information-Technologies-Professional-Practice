- The following activities could be included in any requirements elicitation [[Process]]:
- Understanding the application domain & the properties of the existing system
- Identifying the sources of requirements
- Identifying and analyzing all the relevant stakeholders
- Selecting the approaches, techniques and tools for elicitation
- Eliciting the requirements from the stakeholders and other sources using the selected techniques, approaches and tools
# Stakeholders [[identification]]

# Understanding the application domain

# Requirements elicitation tools and techniques
## Interviews
> An interview is a systematic approach designed to elicit information from a person or group of people.  
- One-on-one interviews are typically most common.   
- In a group interview (with more than one interviewee in attendance) the interviewer must be careful to elicit responses from all attendees.  
- Interviewer formally or informally directs questions to a stakeholder.  
- Used to explore issues and can collect some quantitative, but mostly qualitative [[data]].  
- Widely used elicitation and fact finding technique and requires the most skill and sensitivity.
### Fundamentals 
- Requires good planning and preparation, good interpersonal skills and an alert and responsive frame of mind during the interview, and good analysis skills post interview.  
- Ensure that the biases and predispositions of the interviewer do not interfere with a free exchange of information.  
- Structured Interview: where the interviewer has a pre-defined set of questions and is looking for answers.  
- Unstructured Interview: where, without any pre-defined questions, the interviewer and the interviewee discuss topics of interest in an open-ended way.
****
> See below Powerpoint for more on interviews
> ![[Week 3 Requirements Elicitation Techniques 1.pptx]]
### Pros and Cons
#### Advantages
- Allows the interviewer and participant to have full discussions and explanations of the questions and answers.
- Personal contact allows responsiveness and adapting to what the user says.
- Analyst can probe in greater depth than any other methods of elicitation
- Allows interviewees to express opinions in private that they may be reluctant to express in public.
#### Disadvantages
- Can be time consuming and costly. Requires considerable commitment and involvement of the participants.
- Interview results have to be transcribed and written and transcription and analysis of interview [[data]] can be complex and expensive.
- Can be subject to bias
- If conflicting information is given, it can be difficult to resolve and interviews are not an ideal means of reaching consensus across a group of stakeholders.
- There is a risk of unintentionally leading the interviewee.
## Surveys / Questionnaires
> A Questionnaire or “Survey” is a document containing a number of standard questions that can be sent to individuals to obtain information from a large number of people or when the people are geographically dispersed.
### Fundamentals 
- So, you could send these list of questions to your stakeholders asking them about the new system or the changes to the existing system
- Can collect both quantitative and qualitative [[data]].
- They are also appropriate for systems that will be used by the general public and where the analyst has to investigate all the types of users of the system.
### Pros and Cons
#### Advantages
- An economical and quick method of gathering [[data]] from a large sample.
- Can reach many people with low resource.
- Used for answering specific questions.
- Can be administered remotely.
- Depending on how well it is designed, the results can be analysed easily by [[software applications]].
- Effective and efficient when stakeholders are not located in one location.
#### Disadvantages
- Effective questionnaires are hard to design (e.g. leading questions, misinterpretation of questions).
- Questions are usually not answered completely.
- The response rates for surveys  can be too low for statistical significance.
- There is no automatic way of follow up unless you do interviews later.
## Observation
> Analyst observes the actual execution of existing [[processes]] by the users (study a stakeholder’s work environment), usually without direct interference.
- Seeing the environment and domain where the system will be situated in action gives additional perspectives and a better understanding of system functionalities.
	- Observe system as it actually behaves.
- Observation also allows us to verify statements made in interviews and surveys to determine whether the procedures within the domain really operate as they were described.
	- you might discover that neither the system documentation nor the interview statements are accurate.
### Fundamentals 
- Direct gathering of information rather than through description.
- Individual behaviour maybe altered because they know they are being studied.
- Avoid disturbing users from their normal activities.
- Two types of Observations:
	- Passive: You don’t ask questions, simply observe and make notes.
	- Active: You observe and have a dialog with the users/stakeholders while they are performing their work.
- It is useful in situations where different interviewees have provided conflicting information about the way existing system works.
- Observation is essential for gathering some quantitative and mostly qualitative [[data]] about people’s jobs.
### Pros and Cons
#### Advantages
- Provides first hand experience of the way the current system works
- [[Data]] is collected in real time and can have a high level of validity
- Can be used to verify information from other sources or to look for [[exceptions]]
  Baseline [[data]] about the performance of the existing system and of users can be collected
#### Disadvantages
- Could be very time consuming
- Need to analyse huge amounts of [[data]]
- Most people do not like to be observed and may be disruptive to the person being observed.
- Requires trained and skilled observer to be most effective.
- There may be ethical problems if the person being observed deals with sensitive private or personal [[data]] or directly with members of public.
- There may be logistical problems if the staff being observed work shifts.
- Unusual [[exceptions]] and critical situations that happen infrequently may not occur during the observation.
## Prototype
> A prototype is an initial working model of a larger, more complex entity, usually a program with limited functionality that is built to test out some aspect of how the final system will work (and look like) and then present it to the stakeholders.
- Prototypes may be constructed with various objectives in mind:
	- To investigate user requirements
	- To test specific concept or verify an approach
	- To focus on human-computer [[interface]]
	- Investigate [[input]] and [[output]] and its form
	- Investigate most suitable [[interface]]
### Fundamentals 
> Example UI
> ![[Pasted image 20240820114544.png]]
### Pros and Cons
#### Advantages
- allows for early user interaction and [[feedback]].  
- Supports users who are more comfortable and effective at articulating their needs by using pictures, as prototyping lets them “see” the future system’s [[interface]].
- A vehicle for designers and developers to learn about the users’ [[interface]] needs and to evolve system requirements.  
#### Disadvantages
- Depending on the complexity of the target system, using prototyping to elicit requirements can take considerable time.
- A prototype may lead users to develop unrealistic expectations regarding the delivered system’s performance, completion date, reliability and usability characteristics. This is because an elaborated, detailed prototype can look a lot like a functional system.
## Workshop (Focus Group)
> A technique used to expedite requirements elicitation, also referred to as “Joint Application Development” or “focused groups”.
- The objective is to compress all of the activities involved in other fact finding techniques into a shorter series of workshop sessions with users and project team members.
- These sessions are usually conducted in special rooms with supporting facilities: overhead projector, a white board, flip charts, adequate workspace for the participants.
### Fundamentals 
- A workshop may be used to scope, discover, define, refine, update, prioritize and reach closure on requirements for the target system.
- A workshop may be used to generate ideas for new features or products, to reach consensus on a topic or conflicting views, or to review requirements.
- Organised [[Process]]: uses techniques such as brainstorming, top-down analysis, etc.
- Documented approach: [[output]] of each session is documented in such a way to make it easy to read and understand and agree upon.
### Consideration
- Participants must be selected carefully representing different classes of stakeholders.
- Ensure that all stakeholders participate and have their [[input]] heard.
- Must have a skilled facilitator (you as a BA).
- You should remain neutral and promote discussion.
- Meeting room should have all the necessary facilities and the environment be conducive to hold effective meetings
- Need visual aids (e.g. flip charts, whiteboard, large screens, [[GUI]])
### Pros and Cons
#### Advantages
- Workshop sessions are very successful in reducing project development efforts and shortening the schedule.
- Used to generate ideas for new features or products.
- To reach consensus on a topic or conflicting views.
- Is able to gauge reaction to stimulus material (e.g. storyboards, screenshots).
- A requirements workshop provides a means for stakeholders to collaborate, make decisions and gain a mutual understanding of requirements.  
#### Disadvantages
- Risk involved in speeding up the decisions. Sometimes the decisions made about the requirements are not optimal.
- May suffer from dominance.
- At times, details are inappropriately defined or missed altogether.

## Summary Table
| **Elicitation Technique** | **Brief Description**                                                                                                           | **Pros**                                                                                                                                                              | **Cons**                                                                                                                                                                          |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Interviews**            | A systematic approach to elicit information from stakeholders through direct questioning.                                         | - Allows in-depth exploration of issues<br>- Personal contact allows responsiveness<br>- Can probe in greater depth<br>- Private discussions lead to candid opinions | - Time-consuming and costly<br>- Requires transcription and analysis<br>- Subject to bias<br>- Difficult to resolve conflicting information                                       |
| **Surveys / Questionnaires** | A document containing standard questions sent to individuals to gather information from a large or dispersed group.               | - Economical and quick<br>- Can reach many people<br>- Easily analyzed by software<br>- Effective for geographically dispersed stakeholders                          | - Difficult to design effectively<br>- Questions may not be fully answered<br>- Low response rates<br>- Limited follow-up without interviews                                      |
| **Observation**           | Analyst observes the actual execution of [[processes]] in the users' work environment without interference.                          | - Provides first-hand experience<br>- [[Data]] collected in real-time<br>- Can verify information from other sources                                                    | - Time-consuming<br>- Requires skilled observers<br>- May disrupt those being observed<br>- Ethical and logistical issues may arise                                                |
| **Prototyping**           | Developing an initial working model of the system to test aspects and gather [[feedback]].                                           | - Early user interaction and [[feedback]]<br>- Helps articulate needs visually<br>- Elicits [[interface]] requirements                                                       | - Time-consuming for complex systems<br>- May create unrealistic expectations                                                                                                      |
| **Workshops (Focus Groups)** | Facilitated sessions with stakeholders and project team members to expedite requirements elicitation.                          | - Reduces development efforts<br>- Generates ideas<br>- Reaches consensus<br>- Stakeholders collaborate and gain mutual understanding                               | - Risk of hasty decisions<br>- May suffer from dominance<br>- Details can be missed or inappropriately defined                                                                      |
