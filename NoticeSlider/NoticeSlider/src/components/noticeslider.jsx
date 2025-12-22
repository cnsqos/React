import { useEffect, useState } from "react";
import "./NoticeSlider.css"; // CSS 불러오기

export default function NoticeSlider() {
  const [status, setStatus] = useState("idle");
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);

  // Mount: 공지 5개 로딩
  useEffect(() => {
    let ignore = false;

    async function load() {
      setStatus("loading");
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        if (!res.ok) throw new Error("HTTP_ERROR");
        const data = await res.json();
        if (!ignore) {
          setPosts(data);
          setStatus("success");
          setIndex(0);
        }
      } catch {
        if (!ignore) setStatus("error");
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  // Update: posts가 준비되면 3초마다 index 자동 증가
  useEffect(() => {
    if (posts.length === 0) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % posts.length);
    }, 3000);

    return () => clearInterval(id);
  }, [posts]);

  return (
    <div className="notice-wrapper">
      <div className="notice-box">
        <div className="notice-header">
          <h3>공지사항</h3>
          <span className="notice-badge">
            {posts.length ? `${index + 1} / ${posts.length}` : "0 / 0"}
          </span>
        </div>

        {status === "loading" && <p className="notice-message">공지 불러오는 중...</p>}
        {status === "error" && <p className="notice-message error">불러오기 실패</p>}

        {status === "success" && posts.length > 0 && (
          <div className="notice-content">
            <div className="notice-title">{posts[index].title}</div>
            <div className="notice-body">{posts[index].body}</div>

            <div className="notice-buttons">
              <button onClick={() => setIndex((prev) => (prev - 1 + posts.length) % posts.length)}>
                이전
              </button>
              <button onClick={() => setIndex((prev) => (prev + 1) % posts.length)}>
                다음
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}