import { useEffect, useState } from "react";
import "./GitHubUserCard.css";

function GitHubUserCard() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!username) return;

    setStatus("loading");

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("error");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [username]);

  const handleSearch = () => {
    if (!input.trim()) return;
    setUsername(input);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="GitHub 아이디 입력"
      />
      <button onClick={handleSearch}>조회</button>

      {status === "loading" && <p>로딩중...</p>}
      {status === "error" && <p>사용자를 찾을 수 없습니다</p>}

        {status === "success" && user && (
        <div className="card">
            <img
                src={user.avatar_url}
                alt="profile"
                className="avatar"
            />
            <h3>{user.name ?? user.login}</h3>
            <p>팔로워: {user.followers}</p>
        </div>
    )}
    </div>
  );
}

export default GitHubUserCard;