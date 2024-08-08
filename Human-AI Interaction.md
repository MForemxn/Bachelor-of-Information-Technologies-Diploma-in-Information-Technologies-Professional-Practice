# How [[AI]] Adds Value
[[AI]] is well-suited for applications like:
- Recommending different content to different users, such as movie suggestions
- Predicting future events, such as weather events or flight price changes
- Natural language understanding: ChatGPT
- Image recognition: Google Lens
> Make sure that it’s the right technology for the user problem you’re solving

# Setting correct expectations
> Be transparent with your users about what your [[AI]]-powered product can and cannot do.
- Because [[AI]] systems are probabilistic, your system will probably give an incorrect or unexpected output at some point.
- This makes it critical that you [[help]] users calibrate their expectations about system functionality and output.
- Do this by being transparent about both its capabilities and limitations.
- For example, indicating a prediction could be wrong may cause the user to trust that particular prediction less. However, in the long term, users may use or rely on your product more, because they’re less likely to over-trust your system and be disappointed.
# Explain the Benefit, not the Technology
> [[Help]] users understand your product’s capabilities rather than what’s under the hood.
- [[AI]] as a technology has unlocked a wide array of new, and often exciting, products and services.
- But no matter how novel your use of [[AI]], when explaining your [[AI]]-powered product to your users, focus primarily on conveying how it makes part of the experience better or delivers new value, versus explaining how the underlying technology works.
- Run user studies to answer questions like:
	- What do users need to know about how the system works to understand and use your product?
	- Why is this knowledge useful to the users?
# Be Accountable for Errors
> Understand the types of errors users might encounter and have a plan for resolving
- From early in the product development process, plan for the fact that your [[AI]] system will make bad predictions at some point. This is an important part of confirming that [[AI]] is the right technology for your project.
- Think through the types of errors that your system could make, and their consequences. You should have an informed point of view about what's at stake for your user for a given error and expected impact of [false positive](https://pair.withgoogle.com/chapter/glossary/) and [false negative](https://pair.withgoogle.com/chapter/glossary/) predictions.
	- ![[Pasted image 20240408104844.png]]
# Invest Early into Good [[Data]] Practices
> The better your [[data]] planning and collection [[processes]], the higher quality your end output.
> 	**Garbage in, garbage out.**
- [[AI]]-powered products can suffer without the right level of focus and resources on [[data]] from early on.
- We call such downstream effects “[[data cascades]]” and they can be hard to diagnose and detect until your product experience is impacted.
## Avoiding [[Data Cascades]]
- Good planning and scrutiny of your dataset can [[help]] you avoid issues downstream. Some actions that you can take include:
	- Collect [[data]] in batches
	- Embrace “noisy” [[data]]
	- Plan for [[data]] maintenance
	- Partner with domain experts
# When and Why Should I Use [[AI]] in my Product?
- Does it:
	- Add value to the product?
	- Can you make [[Precision and Recall Tradeoffs]] carefully?
	- Will you be accountable for errors?
## Make precision and recall trade-offs carefully
> Determine whether to prioritize more results or higher quality results based on your product's goals.
- When designing your [[AI]]-powered product, evaluate the trade-offs between having the set of recommendations your system gives to be broad (prioritizing [recall](https://pair.withgoogle.com/chapter/glossary/)) or accurate (prioritizing [precision](https://pair.withgoogle.com/chapter/glossary/)). This [[decision]] will have a big impact on the end user experience.
# When Should You Prioritise Recall vs Precision
## Recall
- Prioritize recall: if your product is in a lower stakes domain and it’s not a problem for users to sort through a longer list of recommendations (for example, music recommendations), you might prefer to prioritize recall.
- This means your user will get a larger set of results, offering the chance for surprising or serendipitous discoveries, but some of them may be less relevant.
## Precision
- Prioritize precision: If you are building a product in a high stakes domain (such as healthcare), and the risks stemming from an error are high, you will likely want to be more conservative with your model output, and only give recommendations for the things the system is most confident of.
- This means prioritizing precision.
# How do I Onboard Users to New [[AI]] Features?
- Explain the benefit, not the technology
- Automate in phases
- Make it safe to explore
## Make it Safe to Explore
> Let users test drive the system with easily reversible actions.
	- Even after onboarding is complete, continue to make user actions and decisions reversible where possible.
	- User preferences and context are always changing.
	- Giving piecemeal undo options allows them to manipulate preferences recommendations without needing to resort to a nuclear reset option.
- [[AI]] systems often require access to some [[data]] or input from their users to provide them with personalized recommendations.
- Before asking new users what and how much [[data]] they are willing to share, give them the opportunity to test your system.
	- For example, this can be done by offering an initial experimentation experience.
	- This will [[help]] new users who are eager to get started, or who don’t have time to fully consider and configure their preferences before diving in.
- It will also support users who are wary of sharing this information before they fully understand what the system offers in return.
## Give Context from Human Sources
> Progressively increase automation under user guidance.
- As you design your product, think critically about the balance of automation and [control](https://pair.withgoogle.com/guidebook/patterns) that you need to offer your users for them to use your product successfully.
- In some cases, it may make sense to offer multiple “levels” of automation in your product (for example, partial automation and full automation), to [[help]] users with varying levels of comfort or familiarity with your product use it successfully.
## Automate in Phases
> Progressively increase automation under user guidance.
- In such cases, start users with the lowest level of automation, and progressively increase automation. Make sure that users can easily adjust their choice, including dialling up or down their level of automation, and that the steps between levels are small and land well.
- Choosing the [right level of automation](https://pair.withgoogle.com/guidebook/patterns) depends heavily on your user and product needs and context.
### Automate More When Risk is Low
> Consider user trust and the stakes of the situation when determining how much to automate.
- When determining how much to automate your product flows, think about the stakes of your product, and the level of comfort that users may have with your type of product.
- In low risk, well-established products, like content recommendation systems, you might choose to prioritize a more heavily automated product flow where user control is available but optional.
- However, when onboarding to a new type of product, or in high-stakes situations, errors can be particularly problematic, and can corrode user trust and potentially cause **dangerous situations**.
	- In such cases, design your system to give users more control over the system.
# Let Users Supervise Automation
> Maintaining control over automation helps users build comfort and correct when things go wrong.
- This is helpful to users in a number of ways, including:
	- Building comfort in new or high stakes situations with the support of controls to override the system if needed.
	- Learning how the system works as they exercise their controls. For example, by manually confirming an appointment time recommendation, they become more familiar with the system’s appointment recommendations.
	- Giving them a way to complete their task when the system doesn’t work as intended.
## Give Control Back to Users When Automation Fails
> Give your users a way to move forward even when the system fails or offers poor quality output.
- When an [[AI]] system fails or gives users a poor prediction, the easiest path forward is often to let the user take over in a non-automated way.
- Make it as easy and intuitive as possible for users to quickly pick up where the system leaves off. Give them all the information they need to take the reins:
	- Awareness of the situation
	- What they need to do next
	- How to take their next action
- In difficult or high-stakes situations, you may even need to redirect users to a human for extra support.
# Determine how to Show the Model Confidence
> If you decide to show model confidence, make sure it’s done in a way that’s helpful to your users.
- In some situations, you can [[help]] users gauge how much trust to put in the [[AI]] output with model confidence displays that explain how certain the [[AI]] is in its prediction, and the alternatives considered.
- However, in other contexts, confidence displays can be challenging for users to understand.
- If you decide to use them, test different types of displays early in the product development process to find what works best for your users.

# Embrace 'Noisy' [[Data]]
> The real world is messy! Expect the same from the [[data]] that you gather.
- As you develop your [training dataset](https://pair.withgoogle.com/chapter/glossary/), don’t strive for something perfectly curated. Instead, allow some “noise” to make the [[data]] as similar as possible to the real-world [[data]] you expect to get from your users.
- This can [[help]] head off errors and poor quality recommendations once you release your model into the real world.
- To do this, think about the types of [[data]] that you expect to get from your users, and then ensure that [[data]] is represented in your training set.
	- For example, for an image recognition system, consider the [[data]] you might get from you users.
	- If it’s likely they will not have the time to take high-quality photographs and your model will have to work with blurry smartphone images, include blurry images in your training [[data]].
# Let Users Give [[Feedback]]
> Give users the opportunity for real-time teaching, [[feedback]] and error correction
- Giving a thumbs up or thumbs down on a recommendation
- Hiding unwanted recommendations
- Flagging or reporting problematic recommendations
- Once a user gives [[feedback]], acknowledge that you received it.
	- If possible, let them know how the system will respond to the [[Feedback]].
