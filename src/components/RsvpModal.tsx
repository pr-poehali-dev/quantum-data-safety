import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function RsvpModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/99064e86-a722-4d82-b2a2-3287b6586724", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, guests_count: guests, message }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    setStatus("idle");
    setName("");
    setGuests(1);
    setMessage("");
    onClose();
  }

  const inputStyle = {
    backgroundColor: "transparent",
    borderBottom: "1px solid #d4b8a8",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: 0,
    outline: "none",
    color: "#4a3728",
    fontSize: "1rem",
    fontWeight: 300,
    padding: "8px 0",
    width: "100%",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(60,35,20,0.6)", backdropFilter: "blur(4px)" }}
            onClick={handleClose}
          />
          <motion.div
            className="relative w-full max-w-md p-10 flex flex-col gap-8"
            style={{ backgroundColor: "#fdf8f4" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-6 text-xl font-light"
              style={{ color: "#b89a8a" }}
            >
              ✕
            </button>

            {status === "success" ? (
              <div className="text-center py-8 flex flex-col gap-4">
                <p className="text-4xl">💌</p>
                <h3
                  className="text-2xl font-light italic"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: "#4a3728" }}
                >
                  Спасибо!
                </h3>
                <p className="text-sm font-light" style={{ color: "#8a6a5a" }}>
                  Мы будем рады видеть вас на нашем празднике
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div className="text-center">
                  <p className="uppercase text-xs tracking-[0.3em] mb-1" style={{ color: "#b89a8a" }}>
                    Подтверждение присутствия
                  </p>
                  <h3
                    className="text-2xl font-light italic"
                    style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: "#4a3728" }}
                  >
                    Нина & Дмитрий
                  </h3>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs uppercase tracking-[0.2em]" style={{ color: "#b89a8a" }}>
                      Ваше имя *
                    </label>
                    <input
                      style={inputStyle}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Имя и фамилия"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs uppercase tracking-[0.2em]" style={{ color: "#b89a8a" }}>
                      Количество гостей
                    </label>
                    <div className="flex items-center gap-4 pt-2">
                      {[1, 2, 3, 4].map(n => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setGuests(n)}
                          className="w-9 h-9 text-sm font-light transition-all duration-200"
                          style={{
                            border: guests === n ? "1px solid #8a6a5a" : "1px solid #d4b8a8",
                            color: guests === n ? "#4a3728" : "#b89a8a",
                            backgroundColor: guests === n ? "#f0e4da" : "transparent",
                          }}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs uppercase tracking-[0.2em]" style={{ color: "#b89a8a" }}>
                      Пожелания молодожёнам
                    </label>
                    <textarea
                      style={{ ...inputStyle, resize: "none", minHeight: "70px" }}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Необязательно"
                      rows={3}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-xs text-center" style={{ color: "#c0776a" }}>
                    Что-то пошло не так. Попробуйте ещё раз.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="py-3 text-sm uppercase tracking-[0.25em] font-light transition-all duration-300"
                  style={{
                    backgroundColor: "#4a3728",
                    color: "#fdf8f4",
                    opacity: status === "loading" ? 0.7 : 1,
                  }}
                >
                  {status === "loading" ? "Отправляем..." : "Подтвердить присутствие"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
