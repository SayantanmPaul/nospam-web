from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from flask_cors import CORS

application = Flask(__name__)
CORS(application)

@application.route('/webview/predict', methods=['POST'])
def predict():
    data_frame = pd.read_csv("../datasets/comments.csv").dropna(subset=['Comment'])
    df_data = data_frame[["Comment", "CLASS"]]
    df_x = df_data['Comment']
    df_y = df_data.CLASS
    corpus = df_x
    cv = CountVectorizer()
    X = cv.fit_transform(corpus)
    X_train, X_test, y_train, y_test = train_test_split(X, df_y, test_size=0.33, random_state=42)
    clf = MultinomialNB()
    clf.fit(X_train, y_train)

    if request.method == 'POST':
        data = request.get_json()  
        comment = data['comment'] 
        vect = cv.transform([comment]).toarray()
        my_prediction = clf.predict(vect)

        # Return the prediction as JSON

        return jsonify({'prediction': int(my_prediction[0])})  

if __name__ == '__main__':
    application.run(debug=True)
