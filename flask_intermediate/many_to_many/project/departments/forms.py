from flask_wtf import FlaskForm
from wtforms import TextField
from wtforms.validators import DataRequired
from project.models import Department

class NewDepartmentForm(FlaskForm):
    name = TextField("Name", validators=[DataRequired()])
