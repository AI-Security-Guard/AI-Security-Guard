<<<<<<< HEAD
from datetime import timedelta
from flask import Flask, jsonify
=======
# server/app.py
from flask import Flask
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
from flask_sqlalchemy import SQLAlchemy
from models import db
from auth import register_auth_blueprints
from video import register_video_blueprints
from flask_cors import CORS
from video.deleteVideo import delete_video_bp
<<<<<<< HEAD
from flask_jwt_extended import JWTManager
=======
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f


app = Flask(__name__)
CORS(app)

# SQLite DB 설정
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

<<<<<<< HEAD
# ✅ JWT 설정 추가
app.config["JWT_SECRET_KEY"] = "CHANGE_THIS_TO_ENV_SECRET"  # 👉 환경변수로 빼는 게 안전
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=30)

jwt = JWTManager(app)


# 토큰이 아예 없을 때
@jwt.unauthorized_loader
def unauthorized_callback(callback):
    return jsonify({"error": "Access token required"}), 401


# 토큰이 잘못됐을 때
@jwt.invalid_token_loader
def invalid_token_callback(reason):
    return jsonify({"error": f"Invalid token: {reason}"}), 401


# 토큰이 만료됐을 때
@jwt.expired_token_loader
def expired_token_callback(jwt_header, jwt_payload):
    return jsonify({"error": "Token has expired"}), 401


=======
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
# DB 초기화
db.init_app(app)

# 블루프린트 등록
register_auth_blueprints(app)
register_video_blueprints(app)
app.register_blueprint(delete_video_bp)

# DB 테이블 생성
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
