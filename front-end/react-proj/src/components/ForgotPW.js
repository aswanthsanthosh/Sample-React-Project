import React, { useState } from "react";
import banner from "../assets/text.svg";

const ForgotPW = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading status
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  // Handle blur event to reset the border color
  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
  };
  return (
    <div className="forgot-pw">
      <div className="login-top">
        <img src={banner} alt="Logo" className="login-image" />
      </div>
      <div className="login-container">
        <h2 className="login-header">パスワード再設定</h2>
        <p className="pw-description">
          現在使っているメールアドレスを入力してください
        </p>
        <p className="pw-description">
          パスワード再設定用のURLをメールで送信いたします。
        </p>
        <form onSubmit={handleSubmit}>
          <label>メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            className={
              error
                ? "input-error"
                : focusedField === "email"
                ? "input-focused"
                : "input-normal"
            }
            //   style={{
            //     borderColor: error ? 'red' : '', // Conditionally apply red border
            //     borderWidth: error ? '' : '',
            //   }}
            required
          />
          <button type="submit">パスワード再設定用URLを送信する</button>
          <a className="forgot-pw-link" href="login">
            ログイン画面にもどる
          </a>
        </form>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
      </div>
    </div>
  );
};

export default ForgotPW;