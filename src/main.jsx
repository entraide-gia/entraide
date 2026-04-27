import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main className="site">
      <header className="hero">
        <img src="/logo.png" alt="entraide ロゴ" className="logo" />
        <h1>想いに寄り添い、専門性で支え、地域とともに未来へつなぐ</h1>
        <p>私たちは、利用者様とご家族に寄り添いながら、最適な支援を共に考える相談支援事業所です。</p>
      </header>

      <section>
        <h2>相談支援事業所アントレプラス</h2>
        <p>一般社団法人アントレード</p>
        <p>名古屋市天白区元八事三丁目241番地 ウイング元八事305号</p>
        <p>電話：080-3452-6762</p>
        <p>FAX：052-308-4583</p>
        <p>メール：info@entraide-gia.com</p>
      </section>

      <section>
        <h2>求人情報</h2>
        <p>採用情報は今後公開予定です。</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
