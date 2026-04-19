"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "prayer_app_data";

type BookingStatus = "booked" | "praying" | "completed";

type User = {
  id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  createdAt: string;
};

type Booking = {
  id: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  note: string;
  status: BookingStatus;
  createdAt: string;
  clockInTime: string | null;
  clockOutTime: string | null;
};

type AppData = {
  users: User[];
  bookings: Booking[];
};

type Toast = {
  msg: string;
  type: "success" | "error";
};

type ActiveSession = {
  bookingId: string;
  startTime: number;
};

type Page = "login" | "register" | "dashboard" | "profile" | "booking" | "calendar";

const initialData: AppData = { users: [], bookings: [] };

const generateId = () =>
  Math.random()
    .toString(36)
    .slice(2, 11);
const hashPassword = (pw: string) => btoa(`${pw}_prayer_salt_2024`);

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatTime = (time: string) => {
  const [h, m] = time.split(":");
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const h12 = hour % 12 || 12;
  return `${h12}:${m} ${ampm}`;
};

const getTodayStr = () => {
  const d = new Date();
  return d.toISOString().split("T")[0];
};

const Icons = {
  pray: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C12 2 9 6 9 9c0 1.5.5 2.5 1.5 3.5L8 17l-3 4h14l-3-4-2.5-4.5C14.5 11.5 15 10.5 15 9c0-3-3-7-3-7z" />
      <circle cx="12" cy="9" r="1.5" />
    </svg>
  ),
  calendar: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  user: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  logout: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  plus: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  check: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  back: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  delete: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  play: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  stop: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  ),
};

const statusLabels: Record<BookingStatus, string> = {
  booked: "Booked",
  praying: "Praying",
  completed: "Completed",
};

const statusClasses: Record<BookingStatus, string> = {
  booked: "status status-booked",
  praying: "status status-praying",
  completed: "status status-completed",
};

export default function PrayerPage() {
  const [appData, setAppData] = useState<AppData>(initialData);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [page, setPage] = useState<Page>("login");
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<Toast | null>(null);
  const [activeSession, setActiveSession] = useState<ActiveSession | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AppData;
        setAppData(parsed);
      }
    } catch (error) {
      console.error("Load error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveData = useCallback((newData: AppData) => {
    setAppData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (error) {
      console.error("Save error:", error);
    }
  }, []);

  useEffect(() => {
    if (!activeSession) return;

    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - activeSession.startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [activeSession]);

  const showToast = (msg: string, type: Toast["type"] = "success") => {
    setToast({ msg, type });
    window.setTimeout(() => setToast(null), 3000);
  };

  const handleRegister = (name: string, phone: string, email: string, password: string) => {
    if (appData.users.find((u) => u.email === email)) {
      showToast("Email is already in use!", "error");
      return;
    }

    const user: User = {
      id: generateId(),
      name,
      phone,
      email,
      password: hashPassword(password),
      createdAt: new Date().toISOString(),
    };

    const newData = {
      ...appData,
      users: [...appData.users, user],
    };

    saveData(newData);
    setCurrentUser(user);
    setPage("dashboard");
    showToast(`Welcome, ${name}!`);
  };

  const handleLogin = (email: string, password: string) => {
    const user = appData.users.find((u) => u.email === email && u.password === hashPassword(password));
    if (!user) {
      showToast("Invalid email or password!", "error");
      return;
    }

    setCurrentUser(user);
    setPage("dashboard");
    showToast(`Hello, ${user.name}!`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveSession(null);
    setElapsed(0);
    setPage("login");
  };

  const handleUpdateProfile = (name: string, phone: string, email: string) => {
    if (!currentUser) return;

    const emailTaken = appData.users.some((u) => u.email === email && u.id !== currentUser.id);
    if (emailTaken) {
      showToast("Email is already in use by another account!", "error");
      return;
    }

    const updatedUser = { ...currentUser, name, phone, email };
    const newData = {
      ...appData,
      users: appData.users.map((u) => (u.id === currentUser.id ? updatedUser : u)),
    };

    saveData(newData);
    setCurrentUser(updatedUser);
    setPage("dashboard");
    showToast("Profile updated successfully!");
  };

  const handleAddBooking = (date: string, startTime: string, endTime: string, note: string) => {
    if (!currentUser) return;

    const booking: Booking = {
      id: generateId(),
      userId: currentUser.id,
      date,
      startTime,
      endTime,
      note,
      status: "booked",
      createdAt: new Date().toISOString(),
      clockInTime: null,
      clockOutTime: null,
    };

    const newData = {
      ...appData,
      bookings: [...appData.bookings, booking],
    };

    saveData(newData);
    setPage("calendar");
    showToast("Prayer session booked!");
  };

  const handleDeleteBooking = (bookingId: string) => {
    const newData = {
      ...appData,
      bookings: appData.bookings.filter((b) => b.id !== bookingId),
    };

    saveData(newData);
    showToast("Booking deleted!");
  };

  const handleClockIn = (bookingId: string) => {
    const now = Date.now();
    const newData = {
      ...appData,
      bookings: appData.bookings.map((b) =>
        b.id === bookingId ? { ...b, status: "praying" as BookingStatus, clockInTime: new Date(now).toISOString() } : b
      ),
    };

    saveData(newData);
    setActiveSession({ bookingId, startTime: now });
    setElapsed(0);
    showToast("Prayer session started 🙏");
  };

  const handleClockOut = () => {
    if (!activeSession) return;

    const now = new Date().toISOString();
    const newData = {
      ...appData,
      bookings: appData.bookings.map((b) =>
        b.id === activeSession.bookingId ? { ...b, status: "completed" as BookingStatus, clockOutTime: now } : b
      ),
    };

    saveData(newData);
    setActiveSession(null);
    setElapsed(0);
    showToast("Prayer completed! 🕊️");
  };

  const userBookings = useMemo(() => {
    if (!currentUser) return [];
    return appData.bookings.filter((b) => b.userId === currentUser.id);
  }, [appData.bookings, currentUser]);

  if (loading) {
    return (
      <main className="shell">
        <div className="loading-screen">
          <div className="loading-icon">{Icons.pray}</div>
          <p className="loading-text">Loading...</p>
        </div>
        <Styles />
      </main>
    );
  }

  return (
    <main className="shell">
      {toast && <div className={`toast ${toast.type === "error" ? "toast-error" : ""}`}>{toast.msg}</div>}

      {activeSession && (
        <div className="session-overlay">
          <div className="session-card">
            <div className="session-pulse" />
            <div className="session-icon">{Icons.pray}</div>
            <h2 className="session-title">Praying</h2>
            <div className="timer-display">
              {String(Math.floor(elapsed / 3600)).padStart(2, "0")}:
              {String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0")}:{String(elapsed % 60).padStart(2, "0")}
            </div>
            <button className="stop-btn" onClick={handleClockOut}>
              {Icons.stop}
              <span>Finish</span>
            </button>
          </div>
        </div>
      )}

      {page === "login" && <LoginPage onLogin={handleLogin} onGoRegister={() => setPage("register")} />}
      {page === "register" && <RegisterPage onRegister={handleRegister} onGoLogin={() => setPage("login")} />}
      {page === "dashboard" && currentUser && (
        <DashboardPage
          user={currentUser}
          bookings={userBookings}
          onNavigate={setPage}
          onLogout={handleLogout}
          onClockIn={handleClockIn}
          activeSession={activeSession}
        />
      )}
      {page === "profile" && currentUser && (
        <ProfilePage user={currentUser} onSave={handleUpdateProfile} onBack={() => setPage("dashboard")} />
      )}
      {page === "booking" && <BookingPage onBook={handleAddBooking} onBack={() => setPage("dashboard")} />}
      {page === "calendar" && (
        <CalendarPage
          bookings={userBookings}
          onBack={() => setPage("dashboard")}
          onDelete={handleDeleteBooking}
          onClockIn={handleClockIn}
          activeSession={activeSession}
        />
      )}

      <Styles />
    </main>
  );
}

function LoginPage({
  onLogin,
  onGoRegister,
}: {
  onLogin: (email: string, password: string) => void;
  onGoRegister: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
      <div className="auth-decor" />
      <div className="auth-card">
        <div className="auth-logo">{Icons.pray}</div>
        <h1 className="auth-title">Prayer Booking</h1>
        <p className="auth-subtitle">Sign in to continue</p>

        <div className="input-group">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
        </div>

        <div className="input-group">
          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            onKeyDown={(e) => e.key === "Enter" && onLogin(email, password)}
          />
        </div>

        <button className="primary-btn" onClick={() => onLogin(email, password)}>
          Sign In
        </button>

        <p className="auth-switch">
          Don&apos;t have an account?{" "}
          <span className="auth-link" onClick={onGoRegister}>
            Sign up now
          </span>
        </p>
      </div>
    </div>
  );
}

function RegisterPage({
  onRegister,
  onGoLogin,
}: {
  onRegister: (name: string, phone: string, email: string, password: string) => void;
  onGoLogin: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const valid = name && phone && email && password.length >= 4;

  return (
    <div className="auth-container">
      <div className="auth-decor" />
      <div className="auth-card">
        <div className="auth-logo">{Icons.pray}</div>
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join the prayer community</p>

        <div className="input-group">
          <label className="label">Full Name</label>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
        </div>

        <div className="input-group">
          <label className="label">Phone Number</label>
          <input
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="input-group">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
        </div>

        <div className="input-group">
          <label className="label">Password (min. 4 characters)</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <button
          className="primary-btn"
          style={{ opacity: valid ? 1 : 0.5 }}
          onClick={() => valid && onRegister(name, phone, email, password)}
          disabled={!valid}
        >
          Sign Up
        </button>

        <p className="auth-switch">
          Already have an account?{" "}
          <span className="auth-link" onClick={onGoLogin}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

function DashboardPage({
  user,
  bookings,
  onNavigate,
  onLogout,
  onClockIn,
  activeSession,
}: {
  user: User;
  bookings: Booking[];
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  onClockIn: (bookingId: string) => void;
  activeSession: ActiveSession | null;
}) {
  const today = getTodayStr();
  const todayBookings = bookings.filter((b) => b.date === today).sort((a, b) => a.startTime.localeCompare(b.startTime));

  const upcomingBookings = bookings
    .filter((b) => b.date > today && b.status === "booked")
    .sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime))
    .slice(0, 3);

  const completedCount = bookings.filter((b) => b.status === "completed").length;

  return (
    <div className="page">
      <div className="dash-header">
        <div>
          <p className="dash-greeting">Hello,</p>
          <h1 className="dash-name">{user.name}</h1>
        </div>

        <div className="dash-actions">
          <button className="icon-btn" onClick={() => onNavigate("profile")} title="Profile">
            {Icons.user}
          </button>
          <button className="icon-btn" onClick={onLogout} title="Sign Out">
            {Icons.logout}
          </button>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-num">{bookings.length}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-card stat-card-accent">
          <span className="stat-num stat-num-light">{completedCount}</span>
          <span className="stat-label stat-label-light">Completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">{todayBookings.length}</span>
          <span className="stat-label">Today</span>
        </div>
      </div>

      <div className="quick-actions">
        <button className="action-card" onClick={() => onNavigate("booking")}>
          <div className="action-icon">{Icons.plus}</div>
          <span className="action-label">New Booking</span>
        </button>
        <button className="action-card" onClick={() => onNavigate("calendar")}>
          <div className="action-icon">{Icons.calendar}</div>
          <span className="action-label">My Calendar</span>
        </button>
      </div>

      <div className="section">
        <h2 className="section-title">Today — {formatDate(today)}</h2>
        {todayBookings.length === 0 ? (
          <div className="empty-state">
            <p className="empty-text">No prayer sessions scheduled for today</p>
            <button className="link-btn" onClick={() => onNavigate("booking")}>
              + Book a new session
            </button>
          </div>
        ) : (
          todayBookings.map((b) => (
            <div key={b.id} className="booking-item">
              <div className="booking-time">
                <span className="time-text">{formatTime(b.startTime)}</span>
                <span className="time-sep">→</span>
                <span className="time-text">{formatTime(b.endTime)}</span>
              </div>
              <div className="booking-meta">
                {b.note && <p className="booking-note">{b.note}</p>}
                <span className={statusClasses[b.status]}>{statusLabels[b.status]}</span>
              </div>
              {b.status === "booked" && !activeSession && (
                <button className="clock-in-btn" onClick={() => onClockIn(b.id)}>
                  {Icons.play}
                </button>
              )}
            </div>
          ))
        )}
      </div>

      {upcomingBookings.length > 0 && (
        <div className="section">
          <h2 className="section-title">Upcoming</h2>
          {upcomingBookings.map((b) => (
            <div key={b.id} className="booking-item-compact">
              <div>
                <p className="compact-date">{formatDate(b.date)}</p>
                <p className="compact-time">
                  {formatTime(b.startTime)} → {formatTime(b.endTime)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProfilePage({
  user,
  onSave,
  onBack,
}: {
  user: User;
  onSave: (name: string, phone: string, email: string) => void;
  onBack: () => void;
}) {
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          {Icons.back}
        </button>
        <h1 className="page-title">Profile</h1>
        <div style={{ width: 40 }} />
      </div>

      <div className="profile-avatar">
        <span className="avatar-text">{user.name.charAt(0).toUpperCase()}</span>
      </div>

      <div className="form-card">
        <div className="input-group">
          <label className="label">Full Name</label>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label className="label">Phone Number</label>
          <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="input-group">
          <label className="label">Email</label>
          <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="primary-btn" onClick={() => onSave(name, phone, email)}>
          {Icons.check}
          <span style={{ marginLeft: 8 }}>Save Changes</span>
        </button>
      </div>
    </div>
  );
}

function BookingPage({
  onBook,
  onBack,
}: {
  onBook: (date: string, startTime: string, endTime: string, note: string) => void;
  onBack: () => void;
}) {
  const [date, setDate] = useState(getTodayStr());
  const [startTime, setStartTime] = useState("06:00");
  const [endTime, setEndTime] = useState("07:00");
  const [note, setNote] = useState("");

  const valid = date && startTime && endTime && startTime < endTime;

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          {Icons.back}
        </button>
        <h1 className="page-title">Book a Prayer Session</h1>
        <div style={{ width: 40 }} />
      </div>

      <div className="form-card">
        <div className="input-group">
          <label className="label">Date</label>
          <input
            className="input"
            type="date"
            value={date}
            min={getTodayStr()}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="time-row">
          <div className="input-group" style={{ flex: 1 }}>
            <label className="label">Start Time</label>
            <input className="input" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </div>
          <div className="input-group" style={{ flex: 1 }}>
            <label className="label">End Time</label>
            <input className="input" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </div>
        </div>

        <div className="input-group">
          <label className="label">Note (optional)</label>
          <textarea
            className="input textarea"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Prayer intention..."
            rows={3}
          />
        </div>

        {date && startTime && endTime && (
          <div className="preview-card">
            <p className="preview-title">Preview</p>
            <p className="preview-date">{formatDate(date)}</p>
            <p className="preview-time">
              {formatTime(startTime)} → {formatTime(endTime)}
            </p>
            {note && <p className="preview-note">&quot;{note}&quot;</p>}
          </div>
        )}

        <button
          className="primary-btn"
          style={{ opacity: valid ? 1 : 0.5 }}
          onClick={() => valid && onBook(date, startTime, endTime, note)}
          disabled={!valid}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

function CalendarPage({
  bookings,
  onBack,
  onDelete,
  onClockIn,
  activeSession,
}: {
  bookings: Booking[];
  onBack: () => void;
  onDelete: (bookingId: string) => void;
  onClockIn: (bookingId: string) => void;
  activeSession: ActiveSession | null;
}) {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  });

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [year, month] = selectedMonth.split("-").map(Number);
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  const today = getTodayStr();

  const monthBookings = bookings.filter((b) => b.date.startsWith(selectedMonth));
  const bookingsByDate: Record<string, Booking[]> = {};

  monthBookings.forEach((b) => {
    if (!bookingsByDate[b.date]) bookingsByDate[b.date] = [];
    bookingsByDate[b.date].push(b);
  });

  const prevMonth = () => {
    const d = new Date(year, month - 2, 1);
    setSelectedMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
    setSelectedDate(null);
  };

  const nextMonth = () => {
    const d = new Date(year, month, 1);
    setSelectedMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
    setSelectedDate(null);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarCells: Array<number | null> = [];
  for (let i = 0; i < firstDay; i += 1) calendarCells.push(null);
  for (let d = 1; d <= daysInMonth; d += 1) calendarCells.push(d);

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          {Icons.back}
        </button>
        <h1 className="page-title">My Calendar</h1>
        <div style={{ width: 40 }} />
      </div>

      <div className="month-nav">
        <button className="month-btn" onClick={prevMonth}>
          ‹
        </button>
        <span className="month-label">
          {monthNames[month - 1]} {year}
        </span>
        <button className="month-btn" onClick={nextMonth}>
          ›
        </button>
      </div>

      <div className="cal-grid">
        {dayNames.map((d) => (
          <div key={d} className="cal-day-name">
            {d}
          </div>
        ))}

        {calendarCells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const dateStr = `${selectedMonth}-${String(day).padStart(2, "0")}`;
          const hasBooking = bookingsByDate[dateStr];
          const isToday = dateStr === today;
          const isSelected = dateStr === selectedDate;

          return (
            <button
              key={dateStr}
              className={`cal-day ${isToday ? "cal-day-today" : ""} ${isSelected ? "cal-day-selected" : ""}`.trim()}
              onClick={() => setSelectedDate(dateStr === selectedDate ? null : dateStr)}
            >
              {day}
              {hasBooking && <div className="cal-dot" />}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="section">
          <h3 className="section-title">{formatDate(selectedDate)}</h3>
          {!bookingsByDate[selectedDate] ? (
            <p className="empty-text">No bookings</p>
          ) : (
            bookingsByDate[selectedDate]
              .sort((a, b) => a.startTime.localeCompare(b.startTime))
              .map((b) => (
                <div key={b.id} className="booking-item">
                  <div className="booking-time">
                    <span className="time-text">{formatTime(b.startTime)}</span>
                    <span className="time-sep">→</span>
                    <span className="time-text">{formatTime(b.endTime)}</span>
                  </div>
                  <div className="booking-meta">
                    {b.note && <p className="booking-note">{b.note}</p>}
                    <span className={statusClasses[b.status]}>{statusLabels[b.status]}</span>
                  </div>
                  <div className="booking-actions">
                    {b.status === "booked" && selectedDate === today && !activeSession && (
                      <button className="clock-in-btn" onClick={() => onClockIn(b.id)} title="Clock In">
                        {Icons.play}
                      </button>
                    )}
                    {b.status === "booked" && (
                      <button className="delete-btn" onClick={() => onDelete(b.id)} title="Delete">
                        {Icons.delete}
                      </button>
                    )}
                  </div>
                </div>
              ))
          )}
        </div>
      )}

      {!selectedDate && monthBookings.length > 0 && (
        <div className="section">
          <h3 className="section-title">All bookings this month</h3>
          {monthBookings
            .sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime))
            .map((b) => (
              <div key={b.id} className="booking-item-compact">
                <div>
                  <p className="compact-date">{formatDate(b.date)}</p>
                  <p className="compact-time">
                    {formatTime(b.startTime)} → {formatTime(b.endTime)}
                    {b.note ? ` · ${b.note}` : ""}
                  </p>
                </div>
                <span className={statusClasses[b.status]}>{statusLabels[b.status]}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

function Styles() {
  return (
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap");

      :root {
        --bg: #f0f4fa;
        --card: #ffffff;
        --accent: #1a5fc9;
        --accent-light: #5b9bf0;
        --accent-gradient: linear-gradient(135deg, #1a5fc9 0%, #5b9bf0 100%);
        --text: #1a2332;
        --text-sec: #6b7a8d;
        --border: #d6e0ed;
        --input-bg: #eaf0f8;
        --danger: #c0392b;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        padding: 0;
        background: var(--bg);
        color: var(--text);
        font-family: "DM Sans", sans-serif;
      }

      button,
      input,
      textarea {
        font: inherit;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes pulse {
        0%,
        100% {
          transform: scale(1);
          opacity: 0.4;
        }
        50% {
          transform: scale(1.8);
          opacity: 0;
        }
      }

      @keyframes toastIn {
        from {
          transform: translateX(-50%) translateY(-20px);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }

      .shell {
        min-height: 100vh;
        max-width: 480px;
        margin: 0 auto;
        background: var(--bg);
        position: relative;
        padding-top: 5rem;
      }

      .loading-screen {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--accent);
      }

      .loading-icon {
        animation: pulse 2s ease-in-out infinite;
        margin-bottom: 16px;
        transform: scale(2);
      }

      .loading-text,
      .auth-title,
      .dash-name,
      .section-title,
      .page-title,
      .month-label,
      .session-title,
      .timer-display,
      .avatar-text,
      .stat-num {
        font-family: "Playfair Display", serif;
      }

      .toast {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent);
        color: white;
        padding: 12px 28px;
        border-radius: 999px;
        font-size: 14px;
        font-weight: 500;
        z-index: 9999;
        animation: toastIn 0.3s ease;
        box-shadow: 0 8px 32px rgba(26, 95, 201, 0.2);
        white-space: nowrap;
      }

      .toast-error {
        background: var(--danger);
      }

      .auth-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        position: relative;
        overflow: hidden;
      }

      .auth-decor {
        position: absolute;
        top: -100px;
        right: -100px;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(26, 95, 201, 0.08) 0%, transparent 70%);
      }

      .auth-card {
        width: 100%;
        max-width: 380px;
        position: relative;
        z-index: 1;
        animation: fadeIn 0.5s ease;
      }

      .auth-logo,
      .profile-avatar,
      .action-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .auth-logo {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        background: var(--accent-gradient);
        color: white;
        margin: 0 auto 20px;
        box-shadow: 0 4px 20px rgba(26, 95, 201, 0.3);
      }

      .auth-title {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        margin: 0 0 6px;
      }

      .auth-subtitle {
        text-align: center;
        color: var(--text-sec);
        font-size: 15px;
        margin: 0 0 32px;
        font-weight: 300;
      }

      .auth-switch {
        text-align: center;
        margin-top: 24px;
        color: var(--text-sec);
        font-size: 14px;
      }

      .auth-link {
        color: var(--accent);
        font-weight: 600;
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 3px;
      }

      .input-group {
        margin-bottom: 18px;
      }

      .label {
        display: block;
        font-size: 12px;
        font-weight: 600;
        color: var(--text-sec);
        margin-bottom: 6px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
      }

      .input {
        width: 100%;
        padding: 14px 16px;
        border: 1.5px solid var(--border);
        border-radius: 12px;
        font-size: 15px;
        background: var(--input-bg);
        color: var(--text);
        outline: none;
      }

      .textarea {
        resize: vertical;
        min-height: 80px;
        line-height: 1.5;
      }

      .primary-btn,
      .icon-btn,
      .back-btn,
      .link-btn,
      .clock-in-btn,
      .delete-btn,
      .stop-btn,
      .action-card,
      .month-btn,
      .cal-day {
        cursor: pointer;
      }

      .primary-btn {
        width: 100%;
        padding: 16px;
        border: none;
        border-radius: 14px;
        background: var(--accent-gradient);
        color: white;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8px;
        box-shadow: 0 4px 16px rgba(26, 95, 201, 0.25);
      }

      .icon-btn {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        border: 1.5px solid var(--border);
        background: var(--card);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-sec);
      }

      .back-btn {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text);
      }

      .link-btn {
        background: none;
        border: none;
        color: var(--accent);
        font-weight: 600;
        font-size: 14px;
      }

      .clock-in-btn {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        border: none;
        background: #e8f5e9;
        color: #2e7d32;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .delete-btn {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        border: none;
        background: #ffebee;
        color: var(--danger);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .stop-btn {
        padding: 14px 36px;
        border: none;
        border-radius: 999px;
        background: var(--danger);
        color: white;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 4px 24px rgba(192, 57, 43, 0.35);
        margin-top: 24px;
      }

      .page {
        min-height: 100vh;
        padding-bottom: 40px;
      }

      .dash-header {
        padding: 40px 24px 20px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .dash-greeting {
        font-size: 14px;
        color: var(--text-sec);
        font-weight: 300;
        margin: 0;
      }

      .dash-name {
        font-size: 28px;
        font-weight: 600;
        margin: 2px 0 0;
      }

      .dash-actions {
        display: flex;
        gap: 8px;
        margin-top: 4px;
      }

      .stats-row {
        display: flex;
        gap: 12px;
        padding: 0 24px 8px;
        animation: fadeIn 0.4s ease;
      }

      .stat-card {
        flex: 1;
        background: var(--card);
        border-radius: 16px;
        padding: 18px 14px;
        text-align: center;
        border: 1px solid var(--border);
      }

      .stat-card-accent {
        background: var(--accent-gradient);
        border: none;
        box-shadow: 0 4px 20px rgba(26, 95, 201, 0.2);
      }

      .stat-num {
        display: block;
        font-size: 28px;
        font-weight: 700;
        line-height: 1;
        color: var(--accent);
      }

      .stat-num-light {
        color: white;
      }

      .stat-label {
        display: block;
        font-size: 11px;
        font-weight: 500;
        color: var(--text-sec);
        margin-top: 6px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .stat-label-light {
        color: rgba(255, 255, 255, 0.8);
      }

      .quick-actions {
        display: flex;
        gap: 12px;
        padding: 16px 24px;
        animation: fadeIn 0.5s ease;
      }

      .action-card {
        flex: 1;
        background: var(--card);
        border: 1.5px solid var(--border);
        border-radius: 16px;
        padding: 20px 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .action-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: var(--input-bg);
        color: var(--accent);
      }

      .action-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--text);
      }

      .section {
        padding: 12px 24px 24px;
        animation: fadeIn 0.5s ease 0.1s both;
      }

      .section-title {
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 14px;
      }

      .booking-item {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 16px;
        background: var(--card);
        border-radius: 14px;
        margin-bottom: 10px;
        border: 1px solid var(--border);
      }

      .booking-time {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        min-width: 70px;
      }

      .time-text {
        font-size: 14px;
        font-weight: 600;
        color: var(--accent);
        font-variant-numeric: tabular-nums;
      }

      .time-sep {
        font-size: 11px;
        color: var(--text-sec);
        margin: 2px 0;
      }

      .booking-meta {
        flex: 1;
        min-width: 0;
      }

      .booking-note {
        font-size: 14px;
        color: var(--text);
        margin: 0 0 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .status {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
      }

      .status-booked {
        background: #e3f2fd;
        color: #1565c0;
      }

      .status-praying {
        background: #e8f5e9;
        color: #2e7d32;
      }

      .status-completed {
        background: #f3e5f5;
        color: #7b1fa2;
      }

      .booking-actions {
        display: flex;
        gap: 6px;
        flex-shrink: 0;
      }

      .booking-item-compact {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 16px;
        background: var(--card);
        border-radius: 12px;
        margin-bottom: 8px;
        border: 1px solid var(--border);
        gap: 12px;
      }

      .compact-date {
        font-size: 14px;
        font-weight: 600;
        color: var(--text);
        margin: 0;
      }

      .compact-time {
        font-size: 13px;
        color: var(--text-sec);
        margin: 2px 0 0;
      }

      .empty-state {
        text-align: center;
        padding: 24px 0;
      }

      .empty-text {
        color: var(--text-sec);
        font-size: 14px;
        margin: 0 0 8px;
      }

      .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 16px 8px;
      }

      .page-title {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
        margin: 0;
      }

      .profile-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: var(--accent-gradient);
        margin: 8px auto 24px;
        box-shadow: 0 4px 20px rgba(26, 95, 201, 0.2);
      }

      .avatar-text {
        font-size: 36px;
        font-weight: 700;
        color: white;
      }

      .form-card {
        background: var(--card);
        border-radius: 20px;
        padding: 24px;
        margin: 0 20px;
        border: 1px solid var(--border);
        animation: fadeIn 0.4s ease;
      }

      .time-row {
        display: flex;
        gap: 12px;
      }

      .preview-card {
        background: var(--input-bg);
        border-radius: 14px;
        padding: 18px;
        margin-bottom: 18px;
        border-left: 3px solid var(--accent);
      }

      .preview-title {
        font-size: 11px;
        font-weight: 600;
        color: var(--text-sec);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0 0 8px;
      }

      .preview-date {
        font-size: 15px;
        font-weight: 600;
        color: var(--text);
        margin: 0;
      }

      .preview-time {
        font-size: 14px;
        color: var(--accent);
        font-weight: 500;
        margin: 4px 0 0;
      }

      .preview-note {
        font-size: 13px;
        color: var(--text-sec);
        font-style: italic;
        margin: 6px 0 0;
      }

      .month-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 8px 24px 16px;
      }

      .month-btn {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        border: 1px solid var(--border);
        background: var(--card);
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text);
      }

      .month-label {
        font-size: 20px;
        font-weight: 600;
      }

      .cal-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
        padding: 0 20px 16px;
      }

      .cal-day-name {
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        color: var(--text-sec);
        padding: 8px 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .cal-day {
        aspect-ratio: 1;
        border: none;
        border-radius: 10px;
        background: transparent;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text);
        position: relative;
      }

      .cal-day-today {
        background: var(--input-bg);
        font-weight: 700;
      }

      .cal-day-selected {
        background: var(--accent);
        color: white;
        font-weight: 700;
      }

      .cal-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--accent);
        position: absolute;
        bottom: 4px;
      }

      .session-overlay {
        position: fixed;
        inset: 0;
        background: rgba(10, 20, 45, 0.88);
        backdrop-filter: blur(8px);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
      }

      .session-card {
        text-align: center;
        color: white;
        position: relative;
        padding: 40px;
      }

      .session-pulse {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: rgba(91, 155, 240, 0.15);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%);
        animation: pulse 3s ease-in-out infinite;
      }

      .session-icon {
        transform: scale(2.5);
        margin-bottom: 24px;
        display: inline-block;
        color: var(--accent-light);
      }

      .session-title {
        font-size: 28px;
        font-weight: 600;
        margin: 0 0 16px;
        color: var(--accent-light);
      }

      .timer-display {
        font-size: 64px;
        font-weight: 700;
        letter-spacing: 4px;
        margin-bottom: 8px;
        font-variant-numeric: tabular-nums;
      }

      @media (max-width: 520px) {
        .shell {
          max-width: 100%;
        }
      }
    `}</style>
  );
}
