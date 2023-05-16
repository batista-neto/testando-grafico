from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route('/')
def index():
    # Seu código para obter o array `data` no Python
    data = [
    { azimute: 2009 },
    { azimute: 2010 },
    { azimute: 2011 },
    { azimute: 2012 },
    { azimute: 2013 },
    { azimute: 2014 },
    { azimute: 2015 },
    { azimute: 2017 },
    ]

    
    return jsonify(data)

if __name__ == '__main__':
    app.run()