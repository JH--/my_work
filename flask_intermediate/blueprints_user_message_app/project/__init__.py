from flask import Flask, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect
import os


app = Flask(__name__)
modus = Modus(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgres:///user_message_app"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
db = SQLAlchemy(app)
migrate = Migrate(app, db)
csrf = CSRFProtect(app)

from project.users.views import users_blueprint

app.register_blueprint(users_blueprint, url_prefix="/users")


@app.route("/")
def root():
    return redirect(url_for("users.index"))  # "Hello Blueprints!"


# @app.errorhandler(404)
# def page_not_found(e):
#    return render_template("404.html")

