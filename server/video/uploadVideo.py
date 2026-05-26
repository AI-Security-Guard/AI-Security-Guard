<<<<<<< HEAD
import os
from flask import Blueprint, request, jsonify
from models import db, User
from flask_jwt_extended import jwt_required, get_jwt_identity

=======
# server/video/uploadVideo.py
import os
from flask import Blueprint, request, jsonify
from models import db, User
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f

upload_video_bp = Blueprint("uploadVideo", __name__)
UPLOAD_FOLDER = "uploaded_videos"


@upload_video_bp.route("/uploadVideo", methods=["POST"])
<<<<<<< HEAD
@jwt_required()
def upload_video():
    username = get_jwt_identity()
=======
def upload_video():
    username = request.form.get("username")
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
    file = request.files.get("video")

    if not username or not file:
        return jsonify({"error": "Missing fields"}), 400

    user = User.query.filter_by(username=username).first()
<<<<<<< HEAD

=======
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
    if not user:
        return jsonify({"error": "User not found"}), 404

    # 이미 video가 존재하면 업로드 거부
    if user.video:
        return jsonify({"error": "User already has a video"}), 400

    # 폴더 생성 후 저장
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    filename = f"{username}_{file.filename}"
    save_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(save_path)

    # DB에 경로 저장
    user.video = save_path
<<<<<<< HEAD
    if not user.original_video:
        user.original_video = save_path
    db.session.commit()

=======
    db.session.commit()

    # return (
    #     jsonify({"message": "Video uploaded successfully", "user": user.to_dict()}),
    #     200,
    # )
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
    return (
        jsonify(
            {
                "message": "Video uploaded successfully",
                "user": {
                    **user.to_dict(),
<<<<<<< HEAD
                    "full_path": os.path.abspath(save_path),
=======
                    "full_path": os.path.abspath(save_path),  # 🔥 절대 경로 추가
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                },
            }
        ),
        200,
    )
