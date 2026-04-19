import React, { useEffect, useMemo, useState } from "react";

import HeadLine from "components/common/HeadLine";
import styled from "styled-components";

type UserRecord = {
  phone: string;
  name: string;
  email: string;
  createdAt: string;
};

type BookingStatus = "active" | "completed";
type BookingSource = "clock-in" | "book-now";
type ViewName = "home" | "register" | "dashboard" | "info" | "bookings" | "book-now";

type BookingRecord = {
  id: string;
  bookId: string;
  userPhone: string;
  userName: string;
  checkIn: string;
  checkOut: string;
  source: BookingSource;
  status: BookingStatus;
  autoClosed: boolean;
  createdAt: string;
  updatedAt: string;
};

type NewUserForm = {
  name: string;
  email: string;
};

type BookingForm = {
  checkIn: string;
  checkOut: string;
};

const STORAGE_USERS_KEY = "booking_users_sc_v1";
const STORAGE_BOOKINGS_KEY = "booking_records_sc_v1";

const emptyNewUserForm: NewUserForm = {
  name: "",
  email: "",
};

const emptyBookingForm: BookingForm = {
  checkIn: "",
  checkOut: "",
};

export function formatDateTime(value: string): string {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(value: string): boolean {
  return /^[0-9+()\-\s]{6,24}$/.test(value.trim());
}

export function getEndOfDayValue(dateInput: string): string | null {
  const date = new Date(dateInput);
  if (Number.isNaN(date.getTime())) return null;

  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 0, 0).toISOString();
}

export function normalizeBookingsForMidnight(
  bookings: BookingRecord[]
): {
  normalized: BookingRecord[];
  changed: boolean;
} {
  const now = new Date();
  let changed = false;

  const normalized = bookings.map((booking) => {
    if (booking.status !== "active" || !booking.checkIn || booking.checkOut) {
      return booking;
    }

    const endOfBookingDay = getEndOfDayValue(booking.checkIn);
    if (!endOfBookingDay) return booking;

    if (now.getTime() > new Date(endOfBookingDay).getTime()) {
      changed = true;
      return {
        ...booking,
        checkOut: endOfBookingDay,
        status: "completed" as BookingStatus,
        autoClosed: true,
        updatedAt: new Date().toISOString(),
      };
    }

    return booking;
  });

  return { normalized, changed };
}

function safeParseArray<T>(raw: string | null): T[] {
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function createBookId(): string {
  return `BK-${Date.now()}`;
}

function createId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function Glyph({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 1,
        fontSize: 16,
      }}
    >
      {children}
    </span>
  );
}

const CalendarIcon = () => <Glyph>📅</Glyph>;
const InfoIcon = () => <Glyph>ℹ️</Glyph>;
const ClockIcon = () => <Glyph>🕒</Glyph>;
const HashIcon = () => <Glyph>#</Glyph>;
const ListIcon = () => <Glyph>📋</Glyph>;
const LoginIcon = () => <Glyph>▶️</Glyph>;
const LogoutIcon = () => <Glyph>⏹️</Glyph>;
const MailIcon = () => <Glyph>✉️</Glyph>;
const PhoneIcon = () => <Glyph>📞</Glyph>;
const PlusIcon = () => <Glyph>➕</Glyph>;
const UserIcon = () => <Glyph>👤</Glyph>;

const Page = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  color: #0f172a;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 16px;

  @media (min-width: 640px) {
    padding: 32px 24px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const Badge = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin: 0 0 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  font-size: 14px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  margin: 8px 0 0;
  color: #475569;
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  min-width: 360px;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
`;

const StatCardBox = styled(Card)`
  padding: 16px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #64748b;
`;

const StatValue = styled.div`
  margin-top: 4px;
  font-size: 28px;
  font-weight: 600;
`;

const CenterCard = styled(Card)`
  max-width: 640px;
  margin: 0 auto;
  padding: 24px;
`;

const SectionCard = styled(Card)`
  padding: 24px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const SectionDescription = styled.p`
  margin: 6px 0 0;
  font-size: 14px;
  color: #64748b;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGrid = styled.form`
  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Field = styled.label`
  display: block;
`;

const FieldLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #334155;
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  background: #ffffff;
`;

const IconWrap = styled.div`
  color: #94a3b8;
  display: inline-flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #0f172a;

  &::placeholder {
    color: #94a3b8;
  }
`;

const Message = styled.div<{ tone: "error" | "success" | "warning" }>`
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 14px;
  border: 1px solid ${({ tone }) => (tone === "error" ? "#fecaca" : tone === "success" ? "#bbf7d0" : "#fde68a")};
  background: ${({ tone }) => (tone === "error" ? "#fef2f2" : tone === "success" ? "#f0fdf4" : "#fffbeb")};
  color: ${({ tone }) => (tone === "error" ? "#b91c1c" : tone === "success" ? "#15803d" : "#92400e")};
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const BaseButton = styled.button`
  border-radius: 16px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.15s ease;
`;

const PrimaryButton = styled(BaseButton)`
  border: 1px solid #0f172a;
  background: #0f172a;
  color: #ffffff;

  &:hover {
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled(BaseButton)`
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #334155;

  &:hover {
    background: #f8fafc;
  }
`;

const StretchPrimaryButton = styled(PrimaryButton)`
  width: 100%;
`;

const PortalStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ActionsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const DashboardGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const ActionCard = styled.button`
  text-align: left;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  cursor: pointer;
  transition: 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  }
`;

const ActionIcon = styled.div`
  display: inline-flex;
  padding: 12px;
  border-radius: 16px;
  background: #f1f5f9;
  color: #334155;
  margin-bottom: 12px;
`;

const ActionTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const ActionDescription = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const BookingGrid = styled.div`
  display: grid;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const InfoBox = styled.div`
  border-radius: 16px;
  background: #f8fafc;
  padding: 16px;
`;

const InfoLabel = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #64748b;
`;

const InfoValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  word-break: break-word;
`;

const EmptyState = styled.div`
  border: 1px dashed #cbd5e1;
  border-radius: 24px;
  padding: 48px 24px;
  text-align: center;
`;

const EmptyTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #334155;
`;

const EmptyDescription = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  color: #64748b;
`;

const ListStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BookingCard = styled(Card)`
  padding: 20px;
`;

const FormActions = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 8px;
  grid-column: 1 / -1;
  flex-wrap: wrap;
`;

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <StatCardBox>
      <StatLabel>{label}</StatLabel>
      <StatValue>{value}</StatValue>
    </StatCardBox>
  );
}

function InputField({
  label,
  icon,
  type = "text",
  ...props
}: {
  label: string;
  icon: React.ReactNode;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <InputWrap>
        <IconWrap>{icon}</IconWrap>
        <Input type={type} {...props} />
      </InputWrap>
    </Field>
  );
}

function InfoItem({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <InfoBox>
      <InfoLabel>
        <IconWrap>{icon}</IconWrap>
        {label}
      </InfoLabel>
      <InfoValue>{value || "—"}</InfoValue>
    </InfoBox>
  );
}

function ActionButton({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <ActionCard type="button" onClick={onClick}>
      <ActionIcon>{icon}</ActionIcon>
      <ActionTitle>{title}</ActionTitle>
      <ActionDescription>{description}</ActionDescription>
    </ActionCard>
  );
}

export default function BookingPortalPage() {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [phoneInput, setPhoneInput] = useState("");
  const [currentUser, setCurrentUser] = useState<UserRecord | null>(null);
  const [currentView, setCurrentView] = useState<ViewName>("home");
  const [newUserForm, setNewUserForm] = useState<NewUserForm>(emptyNewUserForm);
  const [bookingForm, setBookingForm] = useState<BookingForm>(emptyBookingForm);
  const [authError, setAuthError] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const savedUsers = safeParseArray<UserRecord>(localStorage.getItem(STORAGE_USERS_KEY));
    const savedBookings = safeParseArray<BookingRecord>(localStorage.getItem(STORAGE_BOOKINGS_KEY));
    const { normalized } = normalizeBookingsForMidnight(savedBookings);

    setUsers(savedUsers);
    setBookings(normalized);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const { normalized, changed } = normalizeBookingsForMidnight(bookings);

    if (changed) {
      setBookings(normalized);
      return;
    }

    localStorage.setItem(STORAGE_BOOKINGS_KEY, JSON.stringify(bookings));
  }, [bookings]);

  const currentUserBookings = useMemo(() => {
    if (!currentUser) return [];

    return bookings
      .filter((booking) => booking.userPhone === currentUser.phone)
      .sort((a, b) => new Date(b.checkIn).getTime() - new Date(a.checkIn).getTime());
  }, [bookings, currentUser]);

  const activeBooking = useMemo(() => {
    return currentUserBookings.find((booking) => booking.status === "active") ?? null;
  }, [currentUserBookings]);

  const stats = useMemo(() => {
    return {
      users: users.length,
      bookings: bookings.length,
      active: bookings.filter((booking) => booking.status === "active").length,
    };
  }, [users, bookings]);

  function clearMessages() {
    setAuthError("");
    setFormError("");
    setSuccessMessage("");
  }

  function resetPortal(user: UserRecord) {
    setCurrentUser(user);
    setCurrentView("dashboard");
    setBookingForm(emptyBookingForm);
    clearMessages();
  }

  function handleLookup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    clearMessages();

    if (!isValidPhone(phoneInput)) {
      setAuthError("Phone number format is invalid.");
      return;
    }

    const normalizedPhone = phoneInput.trim();
    const foundUser = users.find((user) => user.phone === normalizedPhone);

    if (foundUser) {
      resetPortal(foundUser);
      return;
    }

    setCurrentUser({
      phone: normalizedPhone,
      name: "",
      email: "",
      createdAt: new Date().toISOString(),
    });
    setCurrentView("register");
  }

  function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    clearMessages();

    if (!currentUser?.phone) {
      setFormError("Current phone number was not found.");
      return;
    }

    if (!newUserForm.name.trim() || !newUserForm.email.trim()) {
      setFormError("Please enter both name and email.");
      return;
    }

    if (!isValidEmail(newUserForm.email)) {
      setFormError("Email format is invalid.");
      return;
    }

    const createdUser: UserRecord = {
      phone: currentUser.phone,
      name: newUserForm.name.trim(),
      email: newUserForm.email.trim(),
      createdAt: new Date().toISOString(),
    };

    setUsers((current) => [createdUser, ...current]);
    setNewUserForm(emptyNewUserForm);
    setCurrentUser(createdUser);
    setCurrentView("dashboard");
    setSuccessMessage("User information has been saved.");
  }

  function createBooking(params: { checkIn: string; checkOut: string; source: BookingSource; status: BookingStatus }) {
    if (!currentUser) return;

    const timestamp = new Date().toISOString();
    const newBooking: BookingRecord = {
      id: createId(),
      bookId: createBookId(),
      userPhone: currentUser.phone,
      userName: currentUser.name,
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      source: params.source,
      status: params.status,
      autoClosed: false,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    setBookings((current) => [newBooking, ...current]);
    setSuccessMessage(`Booking ${newBooking.bookId} has been created.`);
    setCurrentView("bookings");
  }

  function handleClockIn() {
    clearMessages();

    if (!currentUser) return;
    if (activeBooking) {
      setFormError("This user already has an active booking. Please clock out first.");
      return;
    }

    createBooking({
      checkIn: new Date().toISOString(),
      checkOut: "",
      source: "clock-in",
      status: "active",
    });
  }

  function handleClockOut() {
    clearMessages();

    if (!activeBooking) {
      setFormError("No active booking was found for this user.");
      return;
    }

    const now = new Date().toISOString();

    setBookings((current) =>
      current.map((booking) =>
        booking.id === activeBooking.id
          ? {
              ...booking,
              checkOut: now,
              status: "completed",
              updatedAt: now,
            }
          : booking
      )
    );

    setSuccessMessage(`Booking ${activeBooking.bookId} has been clocked out.`);
    setCurrentView("bookings");
  }

  function handleBookNow(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    clearMessages();

    if (activeBooking) {
      setFormError("Please clock out the active booking before creating a new one.");
      return;
    }

    if (!bookingForm.checkIn || !bookingForm.checkOut) {
      setFormError("Please enter both clock in and clock out.");
      return;
    }

    if (new Date(bookingForm.checkIn) >= new Date(bookingForm.checkOut)) {
      setFormError("Clock out must be later than clock in.");
      return;
    }

    createBooking({
      checkIn: bookingForm.checkIn,
      checkOut: bookingForm.checkOut,
      source: "book-now",
      status: "completed",
    });

    setBookingForm(emptyBookingForm);
  }

  function logout() {
    setCurrentUser(null);
    setCurrentView("home");
    setPhoneInput("");
    setNewUserForm(emptyNewUserForm);
    setBookingForm(emptyBookingForm);
    clearMessages();
  }

  return (
    <Page>
      <HeadLine
        imgUrl="/img/sermons-img.jpg"
        title="Prayer Booking"
        mbHeight="20rem"
        // blur='blur(0.9375rem)'
      />
      <Container>
        <Header>
          <div>
            <Badge>
              <CalendarIcon />
              Booking Portal
            </Badge>
            <Title>Welcome to prayer booking!</Title>
            <Subtitle></Subtitle>
          </div>

          <StatsGrid>
            <StatCard label="Total users" value={stats.users} />
            <StatCard label="Total bookings" value={stats.bookings} />
            <StatCard label="Active bookings" value={stats.active} />
          </StatsGrid>
        </Header>

        {!currentUser && (
          <CenterCard>
            <div style={{ marginBottom: 20 }}>
              <SectionTitle>Please enter your phone number</SectionTitle>
              <SectionDescription></SectionDescription>
            </div>

            <Form onSubmit={handleLookup}>
              <InputField
                label="Phone number"
                icon={<PhoneIcon />}
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder="4161234567"
              />

              {authError ? <Message tone="error">{authError}</Message> : null}

              <StretchPrimaryButton type="submit">Continue</StretchPrimaryButton>
            </Form>
          </CenterCard>
        )}

        {currentUser && currentView === "register" && (
          <CenterCard>
            <div style={{ marginBottom: 20 }}>
              <SectionTitle>New user</SectionTitle>
              <SectionDescription>Please enter your name and email to create your profile.</SectionDescription>
            </div>

            <Form onSubmit={handleCreateUser}>
              <InputField
                label="Name"
                icon={<UserIcon />}
                value={newUserForm.name}
                onChange={(e) => setNewUserForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="John Doe"
              />

              <InputField
                label="Email"
                type="email"
                icon={<MailIcon />}
                value={newUserForm.email}
                onChange={(e) => setNewUserForm((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="user@email.com"
              />

              {formError ? <Message tone="error">{formError}</Message> : null}

              <ButtonRow>
                <PrimaryButton type="submit">Save user</PrimaryButton>
                <SecondaryButton type="button" onClick={logout}>
                  Back
                </SecondaryButton>
              </ButtonRow>
            </Form>
          </CenterCard>
        )}

        {currentUser && currentView !== "register" && (
          <PortalStack>
            <SectionCard>
              <TopBar>
                <div>
                  <SectionTitle>Welcome, {currentUser.name}</SectionTitle>
                  <SectionDescription>Portal access for phone number {currentUser.phone}</SectionDescription>
                </div>

                <ActionsWrap>
                  <SecondaryButton type="button" onClick={() => setCurrentView("info")}>
                    My Info
                  </SecondaryButton>
                  {activeBooking ? (
                    <SecondaryButton type="button" onClick={handleClockOut}>
                      Clock Out
                    </SecondaryButton>
                  ) : (
                    <SecondaryButton type="button" onClick={handleClockIn}>
                      Clock In
                    </SecondaryButton>
                  )}
                  <SecondaryButton type="button" onClick={() => setCurrentView("book-now")}>
                    Book Now
                  </SecondaryButton>
                  <SecondaryButton type="button" onClick={() => setCurrentView("bookings")}>
                    My Bookings
                  </SecondaryButton>
                  <SecondaryButton type="button" onClick={logout}>
                    Logout
                  </SecondaryButton>
                </ActionsWrap>
              </TopBar>

              {activeBooking ? (
                <Message tone="warning">
                  Active booking in progress: {activeBooking.bookId}. If it is not clocked out before midnight, it will
                  be auto-closed at 11:59 PM on the same day.
                </Message>
              ) : null}

              {successMessage ? <Message tone="success">{successMessage}</Message> : null}
              {formError ? <Message tone="error">{formError}</Message> : null}
            </SectionCard>

            {currentView === "dashboard" && (
              <DashboardGrid>
                <ActionButton
                  icon={<InfoIcon />}
                  title="My Info"
                  description="View the user profile with name, phone number, and email."
                  onClick={() => setCurrentView("info")}
                />
                {activeBooking ? (
                  <ActionButton
                    icon={<LogoutIcon />}
                    title="Clock Out"
                    description="Close the active booking using the current date and time."
                    onClick={handleClockOut}
                  />
                ) : (
                  <ActionButton
                    icon={<LoginIcon />}
                    title="Clock In"
                    description="Create a new active booking using the current date and time as the start time."
                    onClick={handleClockIn}
                  />
                )}{" "}
                <ActionButton
                  icon={<PlusIcon />}
                  title="Book Now"
                  description="Create a booking by selecting the preferred clock in and clock out time."
                  onClick={() => setCurrentView("book-now")}
                />
                <ActionButton
                  icon={<ListIcon />}
                  title="My Bookings"
                  description="View all bookings created by this user, including each book ID."
                  onClick={() => setCurrentView("bookings")}
                />
                <ActionButton
                  icon={<LogoutIcon />}
                  title="Logout"
                  description="Sign out from the current user and return to the phone lookup screen."
                  onClick={logout}
                />
              </DashboardGrid>
            )}

            {currentView === "info" && (
              <SectionCard>
                <SectionTitle style={{ marginBottom: 16 }}>My Info</SectionTitle>
                <InfoGrid>
                  <InfoItem label="Name" value={currentUser.name} icon={<UserIcon />} />
                  <InfoItem label="Phone" value={currentUser.phone} icon={<PhoneIcon />} />
                  <InfoItem label="Email" value={currentUser.email} icon={<MailIcon />} />
                </InfoGrid>
              </SectionCard>
            )}

            {currentView === "bookings" && (
              <SectionCard>
                <SectionTitle style={{ marginBottom: 16 }}>My Bookings</SectionTitle>
                {currentUserBookings.length === 0 ? (
                  <EmptyState>
                    <EmptyTitle>No bookings found for this user</EmptyTitle>
                    <EmptyDescription>Use Clock In or Book Now to create a new booking.</EmptyDescription>
                  </EmptyState>
                ) : (
                  <ListStack>
                    {currentUserBookings.map((booking) => (
                      <BookingCard key={booking.id}>
                        <BookingGrid>
                          <InfoItem label="Book ID" value={booking.bookId} icon={<HashIcon />} />
                          <InfoItem label="Clock In" value={formatDateTime(booking.checkIn)} icon={<ClockIcon />} />
                          <InfoItem label="Clock Out" value={formatDateTime(booking.checkOut)} icon={<ClockIcon />} />
                          <InfoItem label="Source" value={booking.source} icon={<CalendarIcon />} />
                          <InfoItem
                            label="Status"
                            value={booking.autoClosed ? "Completed (Auto-closed at 11:59 PM)" : booking.status}
                            icon={<InfoIcon />}
                          />
                        </BookingGrid>
                      </BookingCard>
                    ))}
                  </ListStack>
                )}
              </SectionCard>
            )}

            {currentView === "book-now" && (
              <SectionCard>
                <SectionTitle style={{ marginBottom: 16 }}>Book Now</SectionTitle>
                <FormGrid onSubmit={handleBookNow}>
                  <InputField
                    label="Clock In"
                    type="datetime-local"
                    icon={<ClockIcon />}
                    value={bookingForm.checkIn}
                    onChange={(e) => setBookingForm((prev) => ({ ...prev, checkIn: e.target.value }))}
                  />

                  <InputField
                    label="Clock Out"
                    type="datetime-local"
                    icon={<ClockIcon />}
                    value={bookingForm.checkOut}
                    onChange={(e) => setBookingForm((prev) => ({ ...prev, checkOut: e.target.value }))}
                  />

                  <FormActions>
                    <PrimaryButton type="submit">Create booking</PrimaryButton>
                    <SecondaryButton type="button" onClick={() => setCurrentView("dashboard")}>
                      Back to dashboard
                    </SecondaryButton>
                  </FormActions>
                </FormGrid>
              </SectionCard>
            )}
          </PortalStack>
        )}
      </Container>
    </Page>
  );
}

export const bookingPortalSmokeTests = {
  validPhone: isValidPhone("4161234567") === true,
  invalidPhone: isValidPhone("abc") === false,
  validEmail: isValidEmail("demo@example.com") === true,
  invalidEmail: isValidEmail("demo@") === false,
  endOfDayFormat: getEndOfDayValue("2026-04-13T10:15:00.000Z")?.includes("T23:59:00.000Z") ?? false,
  normalizeLeavesCompletedBookingUntouched:
    normalizeBookingsForMidnight([
      {
        id: "1",
        bookId: "BK-1",
        userPhone: "0901",
        userName: "Test",
        checkIn: "2026-04-13T10:00:00.000Z",
        checkOut: "2026-04-13T12:00:00.000Z",
        source: "book-now",
        status: "completed",
        autoClosed: false,
        createdAt: "2026-04-13T10:00:00.000Z",
        updatedAt: "2026-04-13T12:00:00.000Z",
      },
    ]).changed === false,
  normalizeAutoClosesPastActiveBooking:
    normalizeBookingsForMidnight([
      {
        id: "2",
        bookId: "BK-2",
        userPhone: "0902",
        userName: "Test",
        checkIn: "2026-01-01T10:00:00.000Z",
        checkOut: "",
        source: "clock-in",
        status: "active",
        autoClosed: false,
        createdAt: "2026-01-01T10:00:00.000Z",
        updatedAt: "2026-01-01T10:00:00.000Z",
      },
    ]).normalized[0]?.status === "completed",
};
