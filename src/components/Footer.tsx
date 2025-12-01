const Footer: React.FC = () => {
  return (
    <div id="contact">
      <footer className="text-white py-5 relative" style={{ overflow: "hidden" }}>
        <hr
          className="mx-auto my-2 w-[71%] h-[0.650px] bg-[#343643] border-0"
        />
        <div className="text-center font-semibold text-xl mb-2 my-4 text-white/70">Let&apos;s get in touch</div>

        <div className="text-center text-sm text-[#BABABA] w-[75%] mx-auto mb-4">
          Feel free to send me a message using the form
          <p></p>or email me at{" "}
          <span className="text-[#346444] font-medium">shoryavardhan13@gmail.com</span>
        </div>

        <form className="w-full max-w-xl mx-auto space-y-4 px-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs text-[#F2F2F2] mb-1">
                Name <span className="text-[#4E5896]">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="w-full bg-[#111015] text-white text-sm px-3 py-2 rounded-md border border-[#1C1C1C]"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-[#F2F2F2] mb-1">
                Email <span className="text-[#4E5896]">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-[#111015] text-white text-sm px-3 py-2 rounded-md border border-[#1C1C1C]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#F2F2F2] mb-1">
              Message <span className="text-[#4E5896]">*</span>
            </label>
            <textarea
              name="message"
              className="w-full bg-[#111015] text-white text-sm px-3 py-2 rounded-md border border-[#1C1C1C]"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center justify-center bg-[#111015] border border-[#1C1C1C] rounded-md w-25 h-9 text-sm"
            >
              Send
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7.133 18.1076C6.86234 18.2163 6.60567 18.1943 6.363 18.0416C6.12034 17.889 5.99934 17.667 6 17.3756V13.4336L11.846 12.0876L6 10.7416V6.79963C6 6.50763 6.12134 6.28563 6.364 6.13363C6.60667 5.98163 6.86334 5.9593 7.134 6.06663L19.646 11.3356C19.9727 11.4856 20.136 11.7376 20.136 12.0916C20.136 12.445 19.9727 12.6943 19.646 12.8396L7.133 18.1076Z"
                  fill="#888888"
                />
              </svg>
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
