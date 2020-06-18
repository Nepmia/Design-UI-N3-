import os
from flask import Flask, render_template


app = Flask(__name__,
            static_url_path='', 
            static_folder='N3/static',
            template_folder='N3/template')
            
@app.route('/')
@app.route('/N3/')
def dsuimain(name=None):
    all = os.listdir(os.path.join(app.static_folder, "all"))
    demilsez = os.listdir(os.path.join(app.static_folder, "demilsez"))
    demildiset = os.listdir(os.path.join(app.static_folder, "demildiset"))
    demildihouit = os.listdir(os.path.join(app.static_folder, "demildihouit"))
    demildineuf = os.listdir(os.path.join(app.static_folder, "demildineuf"))
    demilvin = os.listdir(os.path.join(app.static_folder, "demilvin"))
    return render_template('base.html', demilsez=demilsez, demildiset=demildiset, demildihouit=demildihouit, demildineuf=demildineuf, demilvin=demilvin, all=all)
@app.route('/2016')
def demilsez(name=None):
    all = os.listdir(os.path.join(app.static_folder, "all"))
    demilsez = os.listdir(os.path.join(app.static_folder, "demilsez"))
    demildiset = os.listdir(os.path.join(app.static_folder, "demildiset"))
    demildihouit = os.listdir(os.path.join(app.static_folder, "demildihouit"))
    demildineuf = os.listdir(os.path.join(app.static_folder, "demildineuf"))
    demilvin = os.listdir(os.path.join(app.static_folder, "demilvin"))
    return render_template('demilsez.html', demilsez=demilsez, demildiset=demildiset, demildihouit=demildihouit, demildineuf=demildineuf, demilvin=demilvin, all=all)
