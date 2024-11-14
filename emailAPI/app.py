

from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/api/contact', methods=["POST"])
def contact():
    data = request.get_json()
    return jsonify({"message": "Message received!", "data": data}), 200



if __name__ == '__main__':
    app.run()
