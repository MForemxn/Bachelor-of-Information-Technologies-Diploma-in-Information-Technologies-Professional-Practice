Content-based recommendation systems are a popular and widely used approach to provide personalised recommendations to users. These systems are based on the idea that a user’s preferences can be predicted based on their previous interactions with items, such as their viewing and purchasing history. The goal of a content-based recommendation system is to recommend items to a user that are similar to items that they have previously interacted with.

In this article, we will delve into the technical aspects of building a content-based recommendation system. We will start by explaining the basic concepts and techniques used in these systems, including feature extraction, similarity measures, and recommendation algorithms. Then, we will explore the various approaches to building a content-based recommendation system.

We will also discuss some of the challenges and limitations of content-based recommendation systems, including the cold start problem, scalability issues, and the need for high-quality data. Finally, we will provide practical examples and code snippets to help illustrate the concepts and techniques discussed in the article.

Whether you are a data scientist, machine learning engineer, or simply interested in recommendation systems, this article will provide a comprehensive introduction to the technical aspects of building a content-based recommendation system.

We will be using [movie lens data](https://grouplens.org/datasets/movielens/) for building a movie recommendation system.

**Features Used**

We will start with building a basic recommendation system using just the genre column and different vectorizers like binary feature matrix, bags of words, and tf-idf, then we will add tags for these movies using the genome-tags and genome-score files from the movie lens data.

**Similarity Measure**

There are several similarity measures that can be used in a movie recommendation system, including:

1. Pearson Correlation Coefficient: It measures the linear correlation between two variables and is commonly used in recommendation systems.
2. Cosine Similarity: It measures the cosine of the angle between two vectors and is widely used in recommendation systems due to its ability to handle sparse data.
3. Jaccard Similarity: It measures the similarity between two sets and is often used in recommendation systems for binary data.
4. Euclidean Distance: It measures the straight-line distance between two points in a multi-dimensional space and is often used in recommendation systems.
5. Manhattan Distance: It measures the absolute differences between two points in a multi-dimensional space and is often used in recommendation systems.

The choice of similarity measure depends on the type of data being used and the specific requirements of the recommendation system. Cosine similarity is often considered the best measure for content-based recommendation systems as it is well suited for sparse data, which is common in recommendation systems. However, the best measure may vary depending on the data, the requirements of the system, and the goals of the recommendation. I am going to use cosine similarity for this article.

**Steps Involved:**

![](https://miro.medium.com/v2/resize:fit:1400/1*fs5gFR1vq7N0_h6GIcBIIQ.png)

You can check out the maths and detailed steps involved to build this recommendation system in the video below:

Now we are going to build a basic movie recommendation system by just using Genre column as feature but we will try it with 3 different vectorizers:  
1. Binary Feature Matrix  
2. Bags of Words  
3. Tf-IDF

**Using Binary Feature Matrix Vectorizer**

You can also checkout the [colab notebook here.](https://github.com/PrateekCoder/Recommendation-Systems/blob/main/Content_Based_Movie_Recommendation_System_Using_Binary_Feature_Matrix.ipynb)

**Using Bags Of Words**

You can also checkout the [colab notebook here.](https://github.com/PrateekCoder/Recommendation-Systems/blob/main/Content_Based_Movie_Recommendation_System_Using_Bags_Of_Words_Vectorizer.ipynb)

**Using Tf-IDF Vectorizer**

You can also checkout the [colab notebook here.](https://github.com/PrateekCoder/Recommendation-Systems/blob/main/Content_Based_Movie_Recommendation_System_Using_TF_IDF_Vectorizer.ipynb)

The steps for content based recommendation is going to be similar but you can play with different similarity measure and vectorizing methods. You can also increase the data to improve the recommendation.

**Awesome Movie Recommendation Model**

We will now add tags from genome-tags and genome-score file, use bags of words vectorizer and cosine similarity to build an amazing movie recommendation system. Here is what the code looks like:

You can checkout the [colab notebook here.](https://github.com/PrateekCoder/Recommendation-Systems/blob/main/Content_Based_Movie_Recommendation_System.ipynb)

I am using IMDB similar movies as a reference to check how my model is performing, the genome-tags only contains tags for 13816 movies, but we have a total of over 62000 movies in our data, still the new model with more data performs really well and the recommended movies are very similar to that of IMDB official website.

**How to make this better?**

Definitely we can use more data from places like IMDB website:  
[https://datasets.imdbws.com/](https://datasets.imdbws.com/)  
to improve our [[models]] recommendation or use [[collaborative filtering]] method or hybrid [[models]] that uses content based and [[collaborative filtering]] methods together.

## A Better Version? (Using LSA Model and More Data)

I fetched the data from the imdb URL that I shared above as a part of End To End Machine Learning Project article that I have written and built a content based recommendation system using LSA Machine Learning Model. Here is the [colab file](https://github.com/PrateekCoder/Recommendation-Systems/blob/main/Content_Based_Movie_Recommendation_System_Using_LSA_Dimensionality_Reduction.ipynb).

You can see the data fetching and pre-processing steps in this video:

## **Using Neural Networks (Word2Vec [Building your own NN from scratch])**

Word2Vec can be better than Bag-of-Words (BoW) or TF-IDF for certain tasks because it takes into account the semantic meaning of words. BoW and TF-IDF are based on word frequencies and do not capture the semantic relationships between words. In contrast, Word2Vec learns a vector representation for each word in a high-dimensional space, where semantically similar words have similar vector representations. This makes Word2Vec a better choice for tasks that require understanding the meaning and context of words, such as in a recommendation system. It also deals with the problem of sparse matrix which we see with BOW and TF-IDF.

Here is the summary of the code for word2vec trained from scratch:

1. Import necessary libraries, such as pandas, numpy, gensim, and scikit-learn.
2. Load the IMDb movie dataset into a DataFrame.
3. Combine relevant movie features (title, runtime, genres, directors, writers, ratings, number of votes, and actors) into a single string called ‘content’.
4. Tokenize the ‘content’ for each movie using the simple_preprocess function from the gensim library.
5. Initialize and train a Word2Vec model using the tokenized content.
6. Define two functions: a. average_word_vectors: Computes the average word vectors for a given text using the trained Word2Vec model. b. averaged_word_vectorizer: Applies the average_word_vectors function to a collection of texts, returning a feature array.
7. Compute the averaged word vectors for all movies in the dataset.
8. Accept user input for a movie title.
9. Find the index of the user’s movie in the dataset.
10. Compute cosine similarity scores between the user’s movie and all other movies in the dataset.
11. Sort and display the top 10 most similar movies.

import pandas as pd  
import numpy as np  
from gensim.[[models]] import Word2Vec  
from gensim.utils import simple_preprocess  
from sklearn.metrics.pairwise import cosine_similarity  
  
# Import the imdb movies dataset  
df = pd.read_csv('imdb_movie_data.csv')  
  
# Combine movie name and tags into a single string  
df['content'] = df['Movie'].astype(str) + ' ' + df['runtimeMinutes'].astype(str) + ' ' + df['genres'] + ' ' + df['directors'] + ' ' + df['writers'] + ' ' + df['averageRating'].astype(str) + ' ' + df['numVotes'].astype(str) + df['actors'].astype(str)  
df['content'] = df['content'].fillna('')  
  
# Tokenize content for Word2Vec  
df['tokenized_content'] = df['content'].apply(simple_preprocess)  
# Initialize the Word2Vec model (without training)  
model = Word2Vec(vector_size=100, window=5, min_count=1, workers=4)  
  
# Build the vocabulary  
model.build_vocab(df['tokenized_content'])  
  
# Train the model  
model.train(df['tokenized_content'], total_examples=model.corpus_count, epochs=10)  
  
# Function to average word vectors for a text  
def average_word_vectors(words, model, vocabulary, num_features):  
    feature_vector = np.zeros((num_features,), dtype="float64")  
    nwords = 0.  
      
    for word in words:  
        if word in vocabulary:   
            nwords = nwords + 1.  
            feature_vector = np.add(feature_vector, model.wv[word])  
      
    if nwords:  
        feature_vector = np.divide(feature_vector, nwords)  
          
    return feature_vector  
  
# Function to compute average word vectors for all movies  
def averaged_word_vectorizer(corpus, model, num_features):  
    vocabulary = set(model.wv.index_to_key)  
    features = [average_word_vectors(tokenized_sentence, model, vocabulary, num_features) for tokenized_sentence in corpus]  
    return np.array(features)  
  
# Compute average word vectors for all movies  
w2v_feature_array = averaged_word_vectorizer(corpus=df['tokenized_content'], model=model, num_features=100)  
  
# Get the user input  
user_movie = input("Enter a movie title: ")  
  
# Find the index of the user movie  
movie_index = df[df['Movie'] == user_movie].index[0]  
  
# Compute the cosine similarities between the user movie and all other movies  
user_movie_vector = w2v_feature_array[movie_index].reshape(1, -1)  
similarity_scores = cosine_similarity(user_movie_vector, w2v_feature_array)  
  
# Get the top 10 most similar movies  
similar_movies = list(enumerate(similarity_scores[0]))  
sorted_similar_movies = sorted(similar_movies, key=lambda x: x[1], reverse=True)[1:20]  
  
# Print the top 10 similar movies  
for i, score in sorted_similar_movies:  
    print("{}: {}".format(i, df.loc[i, 'Movie']))

Here is the output of the code:

![](https://miro.medium.com/v2/resize:fit:1400/1*ujeb3e1_DacgMN2ASbBcFQ.png)

I have used The Prestige (2006) movie as benchmark as we have been using this movie in all other previous [[models]] and compare the result with IMDB similar movie list. This output is not what we expected, there are few relevant movies but most of them are not that great. You can try to optimize the following model by trying these methods:

1. Increase the vector size: Using larger vectors (e.g., 200 or 300 dimensions) may capture more information about the words and result in better recommendations. However, this may also increase memory usage and computation time.
2. Tune hyperparameters: Experiment with different Word2Vec hyperparameters such as `window`, `min_count`, and `negative` to find the best combination for your specific dataset. Additionally, you could try different training algorithms (`sg=0` for CBOW, `sg=1` for skip-gram) and adjust the learning rate (`alpha`).
3. Use pre-trained embeddings: Instead of training your own Word2Vec model, you could use pre-trained word embeddings like GloVe or FastText. These [[models]] have been trained on massive text corpora and could provide better representations of words in the movie content.
4. Text preprocessing: Improve the text preprocessing steps by performing better tokenization, stemming or lemmatization, and filtering out less informative words or phrases. This can help the model better capture the essence of each movie’s content.
5. Combine features: Instead of using only Word2Vec embeddings, you could also try combining them with other features like TF-IDF, Bag of Words, or other custom features that capture the unique aspects of each movie.
6. Use Doc2Vec: Instead of averaging Word2Vec embeddings, you could use the Doc2Vec model, which is specifically designed for representing entire documents. Doc2Vec can better capture the semantics of the entire text and might provide better recommendations.

## Using Neural Networks (Word2Vec [Google News pre-trained Word2Vec model])

Its always best to utilize pre-trained [[models]] by big organizations for our work if possible, I will try using Google trained Word2Vec model (300-dimensional vector, 1.6GB) available through Gensim package and see how well that performs.

import pandas as pd  
import numpy as np  
from gensim.[[models]] import Word2Vec, KeyedVectors  
from gensim.utils import simple_preprocess  
from sklearn.metrics.pairwise import cosine_similarity  
import gensim.downloader as api  
  
# Import the imdb movies dataset  
df = pd.read_csv('imdb_movie_data.csv')  
  
# Combine movie name and tags into a single string  
df['content'] = df['Movie'].astype(str) + ' ' + df['runtimeMinutes'].astype(str) + ' ' + df['genres'] + ' ' + df['directors'] + ' ' + df['writers'] + ' ' + df['averageRating'].astype(str) + ' ' + df['numVotes'].astype(str) + df['actors'].astype(str)  
df['content'] = df['content'].fillna('')  
  
# Tokenize content for Word2Vec  
df['tokenized_content'] = df['content'].apply(simple_preprocess)  
  
# Load the pre-trained Word2Vec model (Google News)  
model = api.load('word2vec-google-news-300')  
  
# Function to average word vectors for a text  
def average_word_vectors(words, model, vocabulary, num_features):  
    feature_vector = np.zeros((num_features,), dtype="float64")  
    nwords = 0.  
      
    for word in words:  
        if word in vocabulary:   
            nwords = nwords + 1.  
            feature_vector = np.add(feature_vector, model[word])  
      
    if nwords:  
        feature_vector = np.divide(feature_vector, nwords)  
          
    return feature_vector  
  
# Function to compute average word vectors for all movies  
def averaged_word_vectorizer(corpus, model, num_features):  
    vocabulary = set(model.index_to_key)  
    features = [average_word_vectors(tokenized_sentence, model, vocabulary, num_features) for tokenized_sentence in corpus]  
    return np.array(features)  
  
# Compute average word vectors for all movies  
w2v_feature_array = averaged_word_vectorizer(corpus=df['tokenized_content'], model=model, num_features=300)  
  
# Get the user input  
user_movie = input("Enter a movie title: ")  
  
# Find the index of the user movie  
movie_index = df[df['Movie'] == user_movie].index[0]  
  
# Compute the cosine similarities between the user movie and all other movies  
user_movie_vector = w2v_feature_array[movie_index].reshape(1, -1)  
similarity_scores = cosine_similarity(user_movie_vector, w2v_feature_array)  
  
# Get the top 10 most similar movies  
similar_movies = list(enumerate(similarity_scores[0]))  
sorted_similar_movies = sorted(similar_movies, key=lambda x: x[1], reverse=True)[1:20]  
  
# Print the top 10 similar movies  
for i, score in sorted_similar_movies:  
    print("{}: {}".format(i, df.loc[i, 'Movie']))

Here is the output of the model:

![](https://miro.medium.com/v2/resize:fit:1400/1*SvNDzeCVd5JW3_jm59e6qA.png)

Now if we compare this result with IMDB similar movie, this is pretty close to what we would expect. Also, who know, maybe you are getting better recommendation than IMDB.

If I take IMDB as benchmark, the model that has performed the best and given the closest result was the model using LSA followed by pre-trained Word2Vec model.

## **Limitations of Content Based Recommendation System:**

Content-based recommendation systems have several limitations that make them less effective for some use cases. Here are some of the main limitations:

1. Limited Personalization: Content-based recommendation systems rely solely on the characteristics of the items being recommended. As a result, they don’t take into account the preferences, interests, and behavior of the users. This can result in a lack of personalization and a poor user experience.
2. Data Sparsity: Content-based recommendation systems require a lot of data to be effective. This can be a problem when there is limited information available about the items being recommended or the users being targeted.
3. Cold Start Problem: Content-based recommendation systems can struggle to make recommendations when there is little or no data available about the users or the items being recommended. This is known as the “cold start” problem.
4. Narrow Focus: Content-based recommendation systems focus on a narrow set of features or characteristics to make recommendations. This can result in recommendations that are not diverse and that miss important opportunities for cross-selling or up-selling.
5. High Computational Complexity: Content-based recommendation systems can be computationally intensive and require a lot of processing power. This can be a problem for large-scale recommendation systems or for systems that need to make real-time recommendations.
6. Bias in the Data: Content-based recommendation systems can be vulnerable to bias in the data used to train the system. For example, if the data is skewed towards certain items or genres, the recommendations generated by the system will be biased towards these items or genres.

I hope this is helpful!