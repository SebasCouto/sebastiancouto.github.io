import { useState } from "react";
import { FileText, Download, X } from "lucide-react";

export function FloatingCVButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {open && (
          <div className="mb-3 w-56 rounded-2xl border border-rose-400/25 bg-[#101826]/90 p-3 shadow-[0_0_24px_rgba(244,63,94,0.22)] backdrop-blur-xl">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.24em] text-rose-300">
                Download CV
              </p>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 text-slate-300 transition hover:bg-white/5 hover:text-white"
                aria-label="Close CV menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="/Sebastian_Couto_CV_ES.pdf"
                download="Sebastian-Couto-CV-ES.pdf"
                className="inline-flex items-center justify-between rounded-xl border border-rose-300/20 bg-rose-400/10 px-4 py-3 text-sm font-medium text-rose-100 transition hover:bg-rose-400/15"
              >
                CV - ES
                <Download className="h-4 w-4" />
              </a>

              #<a
              #  href="/Sebastian_Couto_CV_EN.pdf"
              #  download="Sebastian-Couto-CV-EN.pdf"
              #  className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              #>
              #  CV - EN
              #  <Download className="h-4 w-4" />
              #</a>
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="group inline-flex items-center gap-3 rounded-full border border-rose-400/30 bg-[#101826]/85 px-4 py-3 text-sm font-medium text-rose-100 shadow-[0_0_18px_rgba(244,63,94,0.18)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-rose-400/10"
          aria-label="Open CV download options"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-rose-300/25 bg-rose-400/15 text-rose-200">
            <FileText className="h-4 w-4" />
          </div>
          <span>CV</span>
        </button>
      </div>
    </div>
  );
}
