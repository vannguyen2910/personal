export default function EnrollSuccessModal({ open, onClose }) {
  return (
    <div id="enrollSuccessModal" className={`modal-overlay${open ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
        <div className="modal enroll-success-modal">
          <button className="modal-close" onClick={onClose}>✕</button>
          <div className="enroll-success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--lime-dim)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <h3 className="enroll-success-title"><span className="lang-en">You're enrolled! 🎉</span><span className="lang-vi">Bạn đã đăng ký thành công! 🎉</span></h3>
          <p className="enroll-success-body"><span className="lang-en">Thanks for signing up. I'll personally reach out by email within 1–2 business days to get you started.</span><span className="lang-vi">Cảm ơn bạn đã đăng ký. Mình sẽ đích thân email lại trong 1–2 ngày làm việc để cùng bạn bắt đầu.</span></p>
          <div className="enroll-success-steps">
            <div className="enroll-success-step">
              <span className="enroll-success-step-icon"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span>
              <span><span className="lang-en">Check your inbox for my email</span><span className="lang-vi">Kiểm tra email của bạn</span></span>
            </div>
            <div className="enroll-success-step">
              <span className="enroll-success-step-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2.5" y="3" width="11" height="10.5" rx="1.5"/><path d="M2.5 6h11M5.5 1.5v3M10.5 1.5v3"/></svg></span>
              <span><span className="lang-en">Find a time to kick off the conversation</span><span className="lang-vi">Tìm thời gian cho buổi trò chuyện đầu tiên</span></span>
            </div>
          </div>
          <button type="button" className="btn btn-dark enroll-success-close" onClick={onClose}><span className="lang-en">Got it</span><span className="lang-vi">Đã hiểu</span></button>
        </div>
      </div>
  )
}
