import React, { useRef, useState, useEffect } from "react";
import * as S from "./RenderPage.style";
import Header from "../../component/Header/Header";
import Sidebar from "../../component/Sidebar/Sidebar";
import ShortButton from "../../component/ShortButton/ShortButton";
import CustomModal from "../../component/CustomModal/CustomModal.js";
import { useNavigate } from "react-router-dom";
import * as D from "../../component/CustomModal/CustomModal.style";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import axios from "axios";

<<<<<<< HEAD
function ProgressCircle({
    value,
    size = 120,
    strokeWidth = 12,
    trackColor = "#E5E7EB",
    progressColor = "#3B82F6",
    textColor = "#111827",
}) {
    const pct = Math.max(0, Math.min(100, value ?? 0));
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - pct / 100);

    return (
        <div style={{ position: "relative", width: size, height: size }}>
            <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    style={{ transition: "stroke-dashoffset 0.3s ease" }}
                />
            </svg>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                    color: textColor,
                }}
            >
                {Math.round(pct)}%
            </div>
        </div>
    );
}

=======
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
function RenderPage() {
    const fileInputRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalState, setModalState] = useState("idle");
    const [modalType, setModalType] = useState("none");
    const [videoPath, setVideoPath] = useState(null);
<<<<<<< HEAD
    const [progress, setProgress] = useState(0);
    const [jobId, setJobId] = useState(null);
    const intervalRef = useRef(null);
    const videoRef = useRef(null);
    const stopPolling = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
=======
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const username = user?.username;

        const fetchSavedVideo = async () => {
            try {
<<<<<<< HEAD
                const user = JSON.parse(localStorage.getItem("user"));
                const username = user?.username;
                if (!username) return;

                // 1) 사용자 최신 job_id 조회 (분석 서버 5001)
                const latest = await axios.get("http://127.0.0.1:5001/jobs/latest", {
                    params: { username },
                });
                const jobId = latest?.data?.job_id;
                if (!jobId) return;

                // 2) job 상세 조회 → annotated_video_url 확인
                const jobRes = await axios.get(`http://127.0.0.1:5001/jobs/${jobId}`, {
                    params: { t: Date.now() },
                });
                const annotatedUrl = jobRes.data?.annotated_video_url;
                if (annotatedUrl) {
                    // 분석 서버의 정적 라우트(serve_analyzed_video)는 상대경로를 주므로 prefix 붙여줌
                    const fullUrl = `http://127.0.0.1:5001${annotatedUrl}`;
                    setVideoSrc(fullUrl);
                    setTimeout(() => {
                        if (videoRef.current) videoRef.current.load();
                    }, 0);
                }
            } catch (err) {
                console.error("새로고침 시 영상 불러오기 실패:", err?.response?.data || err?.message);
            }
        };
=======
                const response = await axios.get("http://127.0.0.1:5000/bringVideo", {
                    params: { username },
                    responseType: "blob",
                });

                const contentType = response.headers["content-type"];
                if (contentType && contentType.includes("application/json")) {
                    const text = await response.data.text();
                    const json = JSON.parse(text);
                    if (json.hasVideo === false) {
                        return;
                    }
                } else {
                    const blob = new Blob([response.data], { type: "video/mp4" });
                    const videoURL = URL.createObjectURL(blob);
                    setVideoSrc(videoURL);
                }
            } catch (err) {
                console.error(err);
            }
        };

>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
        fetchSavedVideo();
    }, []);

    const handleIconClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            setVideoSrc(videoURL);

<<<<<<< HEAD
            const formData = new FormData();
            formData.append("video", file);
            const token = localStorage.getItem("access_token");
            try {
                const response = await axios.post("http://127.0.0.1:5000/uploadVideo", formData, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log("업로드 성공:", response.data);
                setVideoPath(response.data.user.full_path);
=======
            const user = JSON.parse(localStorage.getItem("user"));
            const username = user?.username;
            const formData = new FormData();
            formData.append("username", username);
            formData.append("video", file);

            try {
                const response = await axios.post("http://127.0.0.1:5000/uploadVideo", formData);
                console.log("업로드 성공:", response.data);
                setVideoPath(response.data.user.full_path); // ✅ 서버 저장 경로 추출
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
            } catch (err) {
                console.error("업로드 실패:", err.response?.data || err.message);
            }
        }
    };

<<<<<<< HEAD
=======
    // const handleDeleteVideo = () => {
    //     setVideoSrc(null);
    //     if (fileInputRef.current) {
    //         fileInputRef.current.value = null;
    //     }
    // };

    // const handleDeleteVideoClick = () => {
    //     setModalType("deleteConfirm");
    //     setModalOpen(true);
    // };

    // const handleGoAnalysis = () => {
    //     setModalOpen(true);
    //     setModalState("loading");

    //     setTimeout(() => {
    //         setModalState("done");
    //     }, 3000); // 예시로 3초 후 완료로 변경
    // };
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
    const handleDeleteVideo = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const username = user?.username;

        if (!username) {
            console.error("❌ username 없음");
            return;
        }
<<<<<<< HEAD
        const token = localStorage.getItem("access_token");
        try {
            await axios.delete("http://127.0.0.1:5000/deleteVideo", {
                data: { username },
                headers: { Authorization: `Bearer ${token}` },
=======

        try {
            await axios.delete("http://127.0.0.1:5000/deleteVideo", {
                data: { username },
                headers: {
                    "Content-Type": "application/json",
                },
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
            });
            console.log("✅ 영상 삭제 성공");
        } catch (err) {
            console.error("❌ 영상 삭제 실패:", err.response?.data || err.message);
        }

        // 프론트 상태 초기화
        setVideoSrc(null);
        setVideoPath(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const handleGoAnalysis = async () => {
<<<<<<< HEAD
        if (!videoPath) {
            console.error("❌ 서버 저장 경로(videoPath)가 없습니다.");
            return;
        }
        const user = JSON.parse(localStorage.getItem("user"));
        const username = user?.username || null;
        setModalOpen(true);
        setModalType("none");
        setModalState("loading");
        setProgress(0);
        stopPolling();

        try {
            console.log("[POST] /analyze 요청 보냄");
            const res = await axios.post(
                "http://127.0.0.1:5001/analyze",
                { video_path: videoPath, username: username },
                {
                    timeout: 15000,
                    headers: { "Content-Type": "application/json" },

                    withCredentials: false,
                }
            );
            console.log("[POST] 응답 원본:", res);
            console.log("[POST] 응답 data:", res?.data);

            const newJobId = res?.data?.job_id;
            if (!newJobId) {
                setModalOpen(false);
                setModalState("idle");
                return;
            }

            setJobId(newJobId);
            // localStorage.setItem("jobId", newJobId);
            console.log(jobId);
            // 폴링 시작
            intervalRef.current = setInterval(async () => {
                try {
                    const jobRes = await axios.get(`http://127.0.0.1:5001/jobs/${newJobId}`, {
                        params: { t: Date.now() },
                    });
                    const raw = jobRes.data?.progress ?? 0;
                    const pct = Math.max(0, Math.min(100, raw > 1 ? raw : raw * 100));
                    setProgress(pct);
                    console.log("[POLL] progress:", raw, "=>", pct, "%");
                    console.log(raw);
                    if (pct >= 100) {
                        console.log("[DONE] 최종 응답:", jobRes.data);
                        stopPolling();
                        setModalState("done");

                        const annotatedUrl = jobRes.data?.annotated_video_url;
                        if (annotatedUrl) {
                            const fullUrl = `http://127.0.0.1:5001${annotatedUrl}`;
                            console.log("🎥 분석 완료 영상 URL:", fullUrl);
                            setVideoSrc(fullUrl);
                            setTimeout(() => {
                                if (videoRef.current) videoRef.current.load();
                            }, 0);
                        }
                    }
                } catch (pollErr) {
                    console.error("❌ 진행률 조회 실패:", pollErr?.response?.data || pollErr?.message);
                    stopPolling();
                    setModalOpen(false);
                    setModalState("idle");
                }
            }, 1500);
        } catch (err) {
            console.error("❌ 분석 요청 실패:", err?.response?.data || err?.message);
            setModalOpen(false);
            setModalState("idle");
=======
        setModalOpen(true);
        setModalState("loading");
        console.log(videoPath);
        try {
            const response = await axios.post("http://127.0.0.1:5001/analyze", {
                video_path: videoPath, // 🔥 서버 내부 경로 전달
            });

            console.log("분석 시작됨:", response.data);
            setModalState("done");
        } catch (error) {
            console.error("분석 요청 실패:", error.response?.data || error.message);
            setModalState("idle");
            setModalOpen(false);
            setModalType("none");
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
        }
    };

    return (
        <>
            <S.MainLayout>
                <Header />
<<<<<<< HEAD
                <Sidebar jobId={jobId} />
=======
                <Sidebar />
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                <S.ContentArea>
                    {!videoSrc && <S.PlusIcon src="/image/addToVideo.png" alt="영상 추가" onClick={handleIconClick} />}
                    {videoSrc && (
                        <>
<<<<<<< HEAD
                            <S.VideoPlayer controls ref={videoRef} key={videoSrc}>
                                <source src={videoSrc} type="video/mp4" />
=======
                            <S.VideoPlayer controls>
                                <source src={videoSrc} type="video/mp4" />
                                브라우저가 video 태그를 지원하지 않습니다.
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                            </S.VideoPlayer>
                            <S.ButtonWrapper>
                                <ShortButton txt="분석하기" onClick={handleGoAnalysis} />
                            </S.ButtonWrapper>
                            <S.DeleteWrapper>
                                <S.DeleteVideo
                                    src="/image/deleteVideo.png"
                                    alt="영상 삭제"
                                    onClick={handleDeleteVideo}
                                />
                            </S.DeleteWrapper>
                        </>
                    )}
                    <input
                        type="file"
                        accept="video/*"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                </S.ContentArea>
            </S.MainLayout>
            <CustomModal
                open={modalOpen}
                onClose={() => {
<<<<<<< HEAD
                    stopPolling();
=======
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                    setModalOpen(false);
                    setModalState("idle");
                    setModalType("none");
                }}
                title={
                    modalType === "deleteConfirm"
                        ? "삭제 하시겠습니까?"
                        : modalState === "loading"
                        ? "분석 중입니다"
                        : "분석 완료"
                }
                message={
                    modalType === "deleteConfirm"
                        ? "삭제하려면 확인 버튼을 클릭 해주세요."
                        : modalState === "loading"
                        ? "잠시만 기다려 주세요..."
                        : "분석이 완료되었습니다."
                }
                icon={
                    modalType === "deleteConfirm" ? (
                        <WarningAmberRoundedIcon style={{ fontSize: 60, color: "#6E6E6E" }} />
<<<<<<< HEAD
                    ) : modalState === "loading" ? (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                            <ProgressCircle value={progress} size={120} strokeWidth={12} />
                            <div style={{ fontSize: 14, color: "#6B7280" }}>처리 중... {progress}%</div>
                        </div>
                    ) : (
                        <D.SpinnerWrapper>
                            <D.CheckIcon visible={true} />
=======
                    ) : (
                        <D.SpinnerWrapper>
                            <D.Spinner visible={modalState === "loading"} />
                            <D.CheckIcon visible={modalState === "done"} />
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                        </D.SpinnerWrapper>
                    )
                }
                buttons={
                    modalType === "deleteConfirm"
                        ? [
                              {
                                  label: "취소",
                                  onClick: () => {
<<<<<<< HEAD
                                      stopPolling();
                                      setModalOpen(false);
                                      setModalState("idle");
=======
                                      setModalOpen(false);
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                                      setModalType("none");
                                  },
                              },
                              {
                                  label: "확인",
                                  onClick: () => {
                                      handleDeleteVideo();
                                      setModalOpen(false);
                                      setModalType("none");
                                  },
                              },
                          ]
                        : modalState === "loading"
                        ? [
                              {
                                  label: "취소",
                                  onClick: () => {
<<<<<<< HEAD
                                      stopPolling();
=======
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                                      setModalOpen(false);
                                      setModalState("idle");
                                  },
                              },
                          ]
                        : [
                              {
                                  label: "기록 보기",
                                  onClick: () => {
                                      setModalOpen(false);
                                      setModalState("idle");
<<<<<<< HEAD
                                      navigate(`/List/${jobId}`);
=======
                                      navigate("/List");
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                                  },
                              },
                              {
                                  label: "닫기",
                                  onClick: () => {
                                      setModalOpen(false);
                                      setModalState("idle");
                                  },
                              },
                          ]
                }
            />
        </>
    );
}

export default RenderPage;
