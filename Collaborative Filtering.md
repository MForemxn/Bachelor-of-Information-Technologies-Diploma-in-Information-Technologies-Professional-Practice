# Build a Recommendation Engine With Collaborative Filtering

![Build a Recommendation Engine With Collaborative Filtering](https://files.realpython.com/media/Build-a-Recommendation-Engine-With-Collaborative-Filtering_Watermarked.451abc4ecb9f.jpg)

To build a system that can automatically recommend items to users based on the preferences of other users, the first step is to find similar users or items. The second step is to predict the ratings of the items that are not yet rated by a user. So, you will need the answers to these questions:

- How do you determine which users or items are similar to one another?
- Given that you know which users are similar, how do you determine the rating that a user would give to an item based on the ratings of similar users?
- How do you measure the accuracy of the ratings you calculate?

The first two questions don’t have single answers. Collaborative filtering is a family of algorithms where there are multiple ways to find similar users or items and multiple ways to calculate rating based on ratings of similar users. Depending on the choices you make, you end up with a type of collaborative filtering approach. You’ll get to see the various approaches to find similarity and predict ratings in this article.

One important thing to keep in mind is that in an approach based purely on collaborative filtering, the similarity is not calculated using factors like the age of users, genre of the movie, or any other data about users or items. It is calculated only on the basis of the rating (explicit or implicit) a user gives to an item. For example, two users can be considered similar if they give the same ratings to ten movies despite there being a big difference in their age.

The third question for how to measure the accuracy of your predictions also has multiple answers, which include error calculation techniques that can be used in many places and not just recommenders based on collaborative filtering.

One of the approaches to measure the accuracy of your result is the Root Mean Square Error (RMSE), in which you predict ratings for a test dataset of user-item pairs whose rating values are already known. The difference between the known value and the predicted value would be the error. Square all the error values for the test set, find the average (or mean), and then take the square root of that average to get the RMSE.

Another metric to measure the accuracy is Mean Absolute Error (MAE), in which you find the magnitude of error by finding its [absolute value](https://realpython.com/python-absolute-value) and then taking the average of all error values.

You don’t need to worry about the details of RMSE or MAE at this point as they are readily available as part of various packages in Python, and you will see them later in the article.

Now let’s look at the different types of algorithms in the family of collaborative filtering.

[![](https://img.realpython.net/681db5178e811f0240f3775742f6b3b9)](https://srv.realpython.net/click/65049834810/?c=9349191308&p=58946116052&r=06635)

[Remove ads](https://realpython.com/account/join/)

## Memory Based

The first category includes algorithms that are memory based, in which [statistical techniques](https://realpython.com/python-statistics/) are applied to the entire dataset to calculate the predictions.

To find the rating **R** that a user **U** would give to an item **I**, the approach includes:

- Finding users similar to **U** who have rated the item **I**
- Calculating the rating **R** based the ratings of users found in the previous step

You’ll see each of them in detail in the following sections. 

### How to Find Similar Users on the Basis of Ratings

To understand the concept of similarity, let’s create a simple dataset first.

The data includes four users **A**, **B**, **C**, and **D**, who have rated two movies. The ratings are stored in [lists](https://realpython.com/python-lists-tuples/), and each list contains two numbers indicating the rating of each movie:

- Ratings by **A** are `[1.0, 2.0]`.
- Ratings by **B** are `[2.0, 4.0]`.
- Ratings by **C** are `[2.5, 4.0]`.
- Ratings by **D** are `[4.5, 5.0]`.

To start off with a visual clue, plot the ratings of two movies given by the users on a graph and look for a pattern. The graph looks like this:

[![Points plotted on a graph for visualizing Euclidean distance](https://files.realpython.com/media/euclidean-distance.74e8c9d0be22.jpg)](https://files.realpython.com/media/euclidean-distance.74e8c9d0be22.jpg)

In the graph above, each point represents a user and is plotted against the ratings they gave to two movies.

Looking at the distance between the points seems to be a good way to estimate similarity, right? You can find the distance using the formula for Euclidean distance between two points. You can use the function available in [`scipy`](https://realpython.com/python-scipy-cluster-optimize/) as shown in the following program:

Python

`>>> from scipy import spatial  >>> a = [1, 2] >>> b = [2, 4] >>> c = [2.5, 4] >>> d = [4.5, 5]  >>> spatial.distance.euclidean(c, a) 2.5 >>> spatial.distance.euclidean(c, b) 0.5 >>> spatial.distance.euclidean(c, d) 2.23606797749979`

As shown above, you can use `scipy.spatial.distance.euclidean` to calculate the distance between two points. Using it to calculate the distance between the ratings of **A**, **B**, and **D** to that of **C** shows us that in terms of distance, the ratings of **C** are closest to those of **B**.

You can see that user **C** is closest to **B** even by looking at the graph. But out of **A**and **D** only, who is **C** closer to?

You could say **C** is closer to **D** in terms of distance. But looking at the rankings, it would seem that the choices of **C** would align with that of **A** more than **D**because both **A** and **C** like the second movie almost twice as much as they like the first movie, but **D** likes both of the movies equally.

So, what can you use to identify such patterns that Euclidean distance cannot? Can the angle between the lines joining the points to the origin be used to make a decision? You can take a look at the angle between the lines joining the origin of the graph to the respective points as shown:

[![Two dimensional vectors plotted on a graph to explain angle as a distance metric](https://files.realpython.com/media/cosine-similarity.76bcd5413eb8.jpg)](https://files.realpython.com/media/cosine-similarity.76bcd5413eb8.jpg)

The graph shows four lines joining each point to the origin. The lines for **A** and **B**are coincident, making the angle between them zero.

You can consider that, if the angle between the lines is increased, then the similarity decreases, and if the angle is zero, then the users are very similar.

To calculate similarity using angle, you need a function that returns a **higher similarity** or **smaller distance** for a lower angle and a **lower similarity** or **larger distance** for a higher angle. The cosine of an angle is a function that decreases from 1 to -1 as the angle increases from 0 to 180.

You can use the cosine of the angle to find the similarity between two users. The higher the angle, the lower will be the cosine and thus, the lower will be the similarity of the users. You can also inverse the value of the cosine of the angle to get the cosine distance between the users by subtracting it from 1.

`scipy` has a function that calculates the **cosine distance** of vectors. It returns a higher value for higher angle:

Python

`>>> from scipy import spatial >>> a = [1, 2] >>> b = [2, 4] >>> c = [2.5, 4] >>> d = [4.5, 5]  >>> spatial.distance.cosine(c,a) 0.004504527406047898  >>> spatial.distance.cosine(c,b) 0.004504527406047898  >>> spatial.distance.cosine(c,d) 0.015137225946083022  >>> spatial.distance.cosine(a,b) 0.0`

The lower angle between the vectors of **C** and **A** gives a lower cosine distance value. If you want to rank user similarities in this way, use cosine distance.

**Note:** In the above example, only two movies are considered, which makes it easier to visualize the rating vectors in two dimensions. This is only done to make the explanation easier. 

Real use cases with multiple items would involve more dimensions in rating vectors. You might want to go into the mathematics of [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity) as well.

Notice that users **A** and **B** are considered absolutely similar in the cosine similarity metric despite having different ratings. This is actually a common occurrence in the real world, and the users like the user **A** are what you can call **tough raters**. An example would be a movie critic who always gives out ratings lower than the average, but the rankings of the items in their list would be similar to the **Average raters** like **B**.

To factor in such individual user preferences, you will need to bring all users to the same level by removing their biases. You can do this by subtracting the average rating given by that user to all items from each item rated by that user. Here’s what it would look like:

- For user **A**, the rating vector `[1, 2]` has the average `1.5`. Subtracting `1.5`from every rating would give you the vector `[-0.5, 0.5]`.
- For user **B**, the rating vector `[2, 4]` has the average `3`. Subtracting `3` from every rating would give you the vector `[-1, 1]`.

By doing this, you have changed the value of the average rating given by every user to 0. Try doing the same for users **C** and **D**, and you’ll see that the ratings are now adjusted to give an average of 0 for all users, which brings them all to the same level and removes their biases.

The cosine of the angle between the adjusted vectors is called **centered cosine**. This approach is normally used when there are a lot of missing values in the vectors, and you need to place a common value to fill up the missing values.

Filling up the missing values in the ratings matrix with a [random value](https://realpython.com/python-random/) could result in inaccuracies. A good choice to fill the missing values could be the average rating of each user, but the original averages of user **A** and **B** are `1.5`and `3` respectively, and filling up all the empty values of **A** with `1.5` and those of **B** with `3` would make them dissimilar users.

But after adjusting the values, the **centered** average of both users is `0`, which allows you to capture the idea of the item being above or below average more accurately for both users with all missing values in both user’s vectors having the same value `0`.

Euclidean distance and cosine similarity are some of the approaches that you can use to find users similar to one another and even items similar to one another. (The function used above calculates cosine distance. To calculate cosine similarity, subtract the distance from 1.)

**Note:** The formula for centered cosine is the same as that for Pearson correlation coefficient. You will find that many resources and libraries on recommenders refer to the implementation of centered cosine as Pearson Correlation.

[![](https://img.realpython.net/c34848d05efe728b284c7a87c7fcd5c9)](https://srv.realpython.net/click/33172000876/?c=43772654581&p=58946116052&r=30646)

[Remove ads](https://realpython.com/account/join/)

### How to Calculate the Ratings

After you have determined a list of users similar to a user **U**, you need to calculate the rating **R** that **U** would give to a certain item **I**. Again, just like similarity, you can do this in multiple ways.

You can predict that a user’s rating **R** for an item **I** will be close to the average of the ratings given to **I** by the top 5 or top 10 users most similar to **U**. The mathematical formula for the average rating given by _n_ users would look like this:

[![Formula for average rating](https://files.realpython.com/media/average_rating.73cdfc1d58c4.png)](https://files.realpython.com/media/average_rating.73cdfc1d58c4.png)

This formula shows that the average rating given by the _n_ similar users is equal to the sum of the ratings given by them divided by the number of similar users, which is _n_.

There will be situations where the _n_ similar users that you found are not equally similar to the target user **U**. The top 3 of them might be very similar, and the rest might not be as similar to **U** as the top 3. In that case, you could consider an approach where the rating of the most similar user matters more than the second most similar user and so on. The weighted average can help us achieve that.

In the weighted average approach, you multiply each rating by a similarity factor(which tells how similar the users are). By multiplying with the similarity factor, you add weights to the ratings. The heavier the weight, the more the rating would matter. 

The similarity factor, which would act as weights, should be the inverse of the distance discussed above because less distance implies higher similarity. For example, you can subtract the cosine distance from 1 to get cosine similarity.

With the similarity factor **S** for each user similar to the target user **U**, you can calculate the weighted average using this formula:

[![Formula for weighted average rating](https://files.realpython.com/media/weighted_rating.06ba3ea506b6.png)](https://files.realpython.com/media/weighted_rating.06ba3ea506b6.png)

In the above formula, every rating is multiplied by the similarity factor of the user who gave the rating. The final predicted rating by user **U** will be equal to the sum of the weighted ratings divided by the sum of the weights.

**Note:** In case you’re wondering why the sum of weighted ratings is being divided by the sum of the weights and not by _n_, consider this: in the previous formula of the average, where you divided by _n_, the value of the weight was 1.

The denominator is always the sum of weights when it comes to finding averages, and in the case of the normal average, the weight being 1 means the denominator would be equal to _n_. 

With a weighted average, you give more consideration to the ratings of similar users in order of their similarity.

Now, you know how to find similar users and how to calculate ratings based on their ratings. There’s also a variation of collaborative filtering where you predict ratings by finding items similar to each other instead of users and calculating the ratings. You’ll read about this variation in the next section.

### User-Based vs Item-Based Collaborative Filtering

The technique in the examples explained above, where the rating matrix is used to find similar users based on the ratings they give, is called user-based or user-user collaborative filtering. If you use the rating matrix to find similar items based on the ratings given to them by users, then the approach is called item-based or item-item collaborative filtering.

The two approaches are mathematically quite similar, but there is a conceptual difference between the two. Here’s how the two compare:

- **User-based:** For a user **U**, with a set of similar users determined based on rating vectors consisting of given item ratings, the rating for an item **I**, which hasn’t been rated, is found by picking out N users from the similarity list who have rated the item **I** and calculating the rating based on these N ratings.
    
- **Item-based:** For an item **I**, with a set of similar items determined based on rating vectors consisting of received user ratings, the rating by a user **U**, who hasn’t rated it, is found by picking out N items from the similarity list that have been rated by **U** and calculating the rating based on these N ratings.
    

Item-based collaborative filtering was developed by Amazon. In a system where there are more users than items, item-based filtering is faster and more stable than user-based. It is effective because usually, the average rating received by an item doesn’t change as quickly as the average rating given by a user to different items. It’s also known to perform better than the user-based approach when the ratings matrix is sparse.

Although, the item-based approach performs poorly for datasets with browsing or entertainment related items such as MovieLens, where the recommendations it gives out seem very obvious to the target users. Such datasets see better results with matrix factorization techniques, which you’ll see in the next section, or with hybrid recommenders that also take into account the content of the data like the genre by using [content-based filtering](https://en.wikipedia.org/wiki/Recommender_system#Content-based_filtering).

You can use the library [Surprise](https://github.com/NicolasHug/Surprise) to experiment with different recommender algorithms quickly. (You will see more about this later in the article.)

[![](https://img.realpython.net/c75ad5c06078a2b00c305659dda76f56)](https://srv.realpython.net/click/2142316168/?c=50610331919&p=58946116052&r=95839)

[Remove ads](https://realpython.com/account/join/)