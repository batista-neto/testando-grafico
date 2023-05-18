# A API vai disponibilizar os dados de elevaçao e azimute
# A API vai disponibilizar apenas consulta desses valores
# URL base - localhost
# End points - 
    # - localhost/azimute (GET)
    # - localhost/elevacao (GET)

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin


app = Flask(__name__)

CORS(app)

dados = {"data": [
    { "azimute": 2009 },
    { "azimute": 2010 },
    { "azimute": 2011 },
    { "azimute": 2012 },
    { "azimute": 2013 },
    { "azimute": 2014 },
    { "azimute": 2015 },
    { "azimute": 2017 },
    ]}


@app.route('/azimute',methods=['GET'])
def azimute():
    return dados

@app.route('/azimute/atualizar', methods=['POST'])
def atualizar_azimute():
    novos_dados = request.json  # Obtém os novos dados enviados na requisição

    # Adiciona os novos dados ao array existente
    dados['data'].extend(novos_dados)

    return jsonify({'message': 'Dados atualizados com sucesso.'})

app.run(port=4000,host='localhost',debug=True)

