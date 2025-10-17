# ATS - Application Tracking System
A smart job application tracking system that combines manual oversight with intelligent automation.

Three perspectives, one platform:

-Job Seekers - Apply to jobs and watch your application progress in real-time

-HR Admins - Post jobs and manually guide non-technical candidates through the hiring process

-Smart Bot - Automatically processes technical applications, simulating realistic recruitment workflows

# Screenshots

Applicant Dashboard:
<img width="1917" height="891" alt="image" src="https://github.com/user-attachments/assets/35027a36-233f-4dbf-a3ff-0d9bad3aa60f" />
<img width="1454" height="887" alt="image" src="https://github.com/user-attachments/assets/f9d3a326-84a1-4e32-b3b1-431e78ea6c9f" />

Admin Dashboard:
<img width="1467" height="809" alt="image" src="https://github.com/user-attachments/assets/efbf83fd-9d94-46db-97f5-58cc7cd9135d" />
<img width="1484" height="629" alt="image" src="https://github.com/user-attachments/assets/7fa1674c-419a-440a-8f55-3741565a84dc" />

Bot Dashboard:
<img width="1484" height="873" alt="image" src="https://github.com/user-attachments/assets/008a3fb2-0b84-4576-989d-2f3c6ddf7ccf" />


# Key Features:
For Job Seekers (Applicants):

- Browse and apply to open positions
- Real-time application status tracking
- Complete history of every status change with comments

For HR Admins

- Create and manage job postings
- Tag jobs as technical or non-technical
- Manually review and update non-technical applications
- Add comments and notes to applications
- Can only touch non-technical roles (bot handles tech)
- Logs every action with timestamps

For the Bot (Automation mimic)

- Mimic automation to processes technical applications
- Moves candidates through stages: Applied → Reviewed → Interview → Offer
- Logs every action with timestamps
- Doesn't have access to non-technical roles


# Tech Stack
Frontend :

React.js for the UI
Axios for API calls
CSS 
SessionStorage for auth 

Backend:

Node.js + Express.js
MongoDB Atlas (cloud database)
JWT for secure authentication
Bcrypt for password security

The Bot:

Custom workflow 
Simulates automation-like processing through triggers
Fully traceable audit logs

# Environment Variables

In backend/.env, include:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

# Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/srinidhi-m-s/ats_app.git
cd ATS

2️⃣ Install Dependencies
cd frontend
npm install
cd ../backend
npm install

3️⃣ Run Locally

In two separate terminals:

Frontend:
cd frontend
npm start

Backend:
cd backend
node server.js

Server will run on http://localhost:5000

Frontend will run on http://localhost:3000

# Sample Users:
Admin:
- Email: admin@test.com
- Password: admin123
- Role: admin

Bot:
- Email: bot@test.com
- Password: bot123
- Role: bot

Applicant:
- Email: user@test.com
- Password: user123
- Role: applicant



