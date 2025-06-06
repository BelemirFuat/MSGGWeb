# ✅ Project To-Do List: Video Calling App (C# + Python + WebRTC + Firebase)

## 🖥️ Desktop Client (C#)

### 🔐 Authentication
- [ ] Register new account (Firebase REST API)
- [ ] Login with existing account
- [ ] Store session/token securely

### 📇 Contacts
- [ ] Load contact list from Firebase
- [ ] Show user presence (optional)

### 💬 Messaging (End-to-End Encrypted)
- [ ] Show conversation view
- [ ] Send new message (encrypt & push to Firebase)
- [ ] Receive new messages (listen in Firebase)
- [ ] Decrypt messages on client
- [ ] Generate/store E2EE key pair
- [ ] Fetch public key of contact

### 🎥 Video Calling (WebRTC + Firebase Signaling)
- [ ] Create and send offer
- [ ] Send ICE candidates
- [ ] Receive offer and send answer
- [ ] Handle incoming ICE candidates
- [ ] Accept/reject incoming call
- [ ] Display local and remote video streams

---

## 🌐 Web Client (HTML + JS + Firebase)

### 🔐 Authentication
- [ ] Register user (via Firebase SDK or backend)
- [ ] Login
- [ ] Session/token handling

### 📇 Contacts
- [ ] Display contact list
- [ ] Show online/offline status (optional)

### 💬 Messaging (End-to-End Encrypted)
- [ ] Show chat interface
- [ ] Encrypt and send messages
- [ ] Listen for new messages
- [ ] Decrypt received messages
- [ ] Generate/store keypair
- [ ] Upload public key to Firebase
- [ ] Get public key of other user

### 🎥 Video Calling (WebRTC + Firebase)
- [ ] Capture local media
- [ ] Create/Send offer via Firebase
- [ ] Exchange ICE candidates
- [ ] Receive offer and respond
- [ ] Display local and remote video

---

## 🧠 Shared Backend Logic (Python + Firebase)

### 🔑 Key Management
- [ ] Save user's public encryption key
- [ ] Retrieve public key by user ID

### 🛠️ Signaling (Firebase DB/Firestore)
- [ ] Design signaling data structure:
  - [ ] SDP Offer/Answer
  - [ ] ICE candidates

### 🛡️ Security (Firebase Rules / Backend)
- [ ] Restrict access to user-owned messages/keys
- [ ] Validate message format
- [ ] Protect routes (auth middleware)
- [ ] Rate-limit login/register endpoints (optional)

---

## 📈 Suggested Development Milestones

### 🔰 Phase 1: Core Setup
- [ ] Firebase setup (project, auth, db)
- [ ] Python backend: login/register/key APIs
- [ ] Login/Register for C# and Web clients

### 💬 Phase 2: Messaging
- [ ] Key generation + exchange
- [ ] Encrypt + send messages
- [ ] Decrypt + show received messages

### 🎥 Phase 3: Video Calling
- [ ] Media capture and rendering
- [ ] Signaling via Firebase
- [ ] WebRTC connection and streaming

