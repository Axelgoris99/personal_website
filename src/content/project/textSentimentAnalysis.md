---
title: Text Sentiment Analysis
begin: 2022-08
end: 2022-10
img: /assets/project/sentimentAnalysis.webp
img_alt: A picture with three emojis and the attached emotions - neutral, positive, negative
description: |
 Research Paper "Trade-off Between Accuracy and Performance For Text Classification Using Ensemble Models in Machine Learning."
tags:
  - Python
  - Machine Learning
  - kNN
  - Naive Bayes
  - XGBoost
  - Stacking
  - Max Voting
---
We wrote a research paper with a comrade about ensemble model for text classification.

Here is the abstract:

"Machine learning algorithms have their limitations and producing a model with high accuracy is challenging. In many cases, one model is not enough for producing a reliable prediction because of the high variance of the input training data which might result in low accuracy as the model relies heavily on too few features when making a prediction. Such a situation arises in the case of text classification. Instead, if we build and combine multiple models, we have a chance to boost the overall accuracy. The combination of models will reduce the overall ensemble model’s error and maintain the generalization of the model by aggregating the output from each model. In an ensemble learning architecture, the weak learners receive inputs as well as predictions from all other weak learners. A final ensemble model can be built using the combined predictions. The final ensemble models and the single models will be evaluated on text sentiment analysis which is one area where the input data variance is high. We used k-Nearest Neighbors (kNN), Naive Bayes and XGBoost for the models and compared the results with both Stacking and Max-Voting. The final ensemble model using Stacking improves the accuracy by 4% but the time costs increases by more than 50% and the accuracy result was not significantly different between kNN and stacking. Overall this result contributes to the comparison of different machine learning models."

The final report can be found here: [Google Drive](https://drive.google.com/file/d/1BHc3mbdPHzHHs2fZvrLNssjyNj3vCSB_/view?usp=sharing)
