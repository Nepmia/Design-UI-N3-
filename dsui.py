from flask import Flask, render_template

app = Flask(__name__,
            static_url_path='', 
            static_folder='N3/static',
            template_folder='N3/template')
            
@app.route('/')
@app.route('/N3/')
def dsuimain(name=None):
    return render_template('base.html', title= 'Home')