from flask import Flask, request, jsonify
import pickle
import cv2
import mediapipe as mp
import numpy as np
from flask_cors import CORS
import base64

app = Flask(__name__)
CORS(app)

model_dict = pickle.load(open('./model.p', 'rb'))
model = model_dict['model']

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

labels_dict = {0: 'A', 1: 'B', 
                2: 'C', 3: 'D',
                4: 'E', 5: 'F',
                6: 'G', 7: 'H',
                8: 'I', 9: 'J',
                10: 'K', 11: 'L',
                12: 'M', 13: 'N',
                14: 'O', 15: 'P',
                16: 'Q', 17: 'R',
                18: 'S', 19: 'T',
                20: 'U', 21: 'V',
                22: 'W', 23: 'X',
                24: 'Y', 25: 'Z', 
                26: 'Unknown'}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    image_data = base64.b64decode(data['image'])
    nparr = np.frombuffer(image_data, np.uint8)
    frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    data_aux = []
    x_ = []
    y_ = []

    H, W, _ = frame.shape

    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(frame_rgb)
    
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y

                x_.append(x)
                y_.append(y)

            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y
                data_aux.append(x - min(x_))
                data_aux.append(y - min(y_))

        if len(data_aux) == 42:
            prediction = model.predict([np.asarray(data_aux)])
            predicted_character = labels_dict[int(prediction[0])]
        else:
            predicted_character = "No valid hand detected"
    else:
        predicted_character = "No hand detected"

    return jsonify({'prediction': predicted_character})

if __name__ == '__main__':
    app.run(port=5000)
