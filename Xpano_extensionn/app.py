from flask import Flask, request

from flask_cors import CORS


from flask import Flask, jsonify

from xpano import xpano


app = Flask(__name__)

CORS(app)

@app.route("/", methods=["GET"])
def index():
    data = {
        'success': True,
        'result': "result"
    }

    return jsonify(data)

@app.route("/verify", methods=["POST"])
def verify():
    try:
        request_data = request.get_json(force=True)
        text = request_data["text"]
        result = xpano(text)
        print(result)
        return jsonify({"success": True, "result": result})
    except:
        return jsonify({"success": False, "result": 0})

