const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-project-bg text-primary max-w-lg w-full mx-4 p-6 rounded-xl shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-sm leading-relaxed mb-4">
          <strong>Last updated:</strong> November 5, 2025
        </p>
        <p className="text-sm leading-relaxed mb-3">
          This website respects your privacy. When you submit the contact form, the following
          information may be collected: your first name, last name, company name (optional),
          email address, and message.
        </p>
        <p className="text-sm leading-relaxed mb-3">
          Your information is used only for the purpose of responding to your inquiry. It will
          not be shared, sold, or used for marketing purposes.
        </p>
        <p className="text-sm leading-relaxed mb-3">
          All messages are transmitted securely and stored only as long as necessary to
          provide a reply.
        </p>
        <p className="text-sm leading-relaxed mb-3">
          If you wish to have your information deleted or want to know more about how your data
          is handled, you may contact me directly at{' '}
          <a
            href="mailto:rvquiestas@gmail.com"
            className="text-secondary underline"
          >
            rvquiestas@gmail.com
          </a>
          .
        </p>
        <p className="text-sm leading-relaxed mb-6">
          By submitting the contact form, you agree to the terms outlined in this Privacy
          Policy.
        </p>
        <button
          onClick={onClose}
          className="bg-black text-white font-semibold px-4 py-2 rounded-md hover:bg-secondary transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
