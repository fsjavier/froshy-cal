# Family Calendar App

A mobile-first family or group calendar app built with Django for the backend, Next.js for the frontend, PostgreSQL for the database, and Docker for containerization. The app includes user authentication, appointment scheduling, reminders, to-do lists, and more.

## Features

### 1. **User Authentication**

- **Sign-up, Log-in, Log-out**: Users can create accounts, log in, and manage their sessions.
- **Family/Group Access**: Once a user signs up, they can create or join a family/group. All members within a group will have access to the same calendar and to-do lists.
- **Roles & Permissions**: Different roles for users, such as admin (manages members) and member (access shared calendar and tasks).

### 2. **Shared Calendar**

- **Appointment Creation**: Users can create appointments for the entire family or group, including a title, description, date, and time.
- **Recurring Events**: Ability to create recurring events (e.g., weekly family meetings, monthly reminders) with flexible scheduling options.
- **Reminders**: Users can add reminders to appointments and receive notifications via email or push notifications (if enabled in future features).
- **Mobile-First Design**: The calendar is optimized for mobile use with a responsive layout.

### 3. **To-Do Lists**

- **Shared Tasks**: Users can create and assign tasks to other family members. All tasks are visible to the group.
- **Task Assignment**: Assign tasks to specific members, with the ability to mark tasks as completed.
- **Task Reminders**: Add reminders to tasks to notify group members of upcoming deadlines.

### 4. **Notifications (Future Feature)**

- Users will receive notifications for upcoming events, to-do list deadlines, and changes in group appointments. Notifications can be sent via email or push notifications (integration with services like Firebase could be added).

### 5. **Mobile-First Design**

- The application is designed with mobile-first principles in mind, ensuring smooth usability on phones and tablets. It supports touch gestures, optimized loading times, and mobile-friendly interactions.

### 6. **File and Image Storage**

- **Cloudinary Integration**: Users can upload images and files as part of event descriptions, reminders, or to-do lists. All media will be securely stored using Cloudinary’s cloud storage.

### 7. **Color-Coded Events (Future Feature)**

- Users will be able to categorize events (work, family, personal) with color codes for easier identification on the calendar.

### 8. **Dark Mode (Future Feature)**

- Users can switch between light and dark themes to enhance visual comfort.

### 9. **Localization (Future Feature)**

- Support for multiple languages and time zones, making the app adaptable to users from different regions.

---

## User Stories

### **Authentication and Group Management**

- **As a user**, I can sign up and create a family or group, so I can share a calendar and to-do list with my family members.
- **As a user**, I can log in to access my group’s shared calendar and tasks.
- **As a user**, I can invite other members to join my group or family.
- **As an admin**, I can manage family/group members by inviting or removing them.

### **Calendar Features**

- **As a user**, I can add an appointment to the calendar, specifying the title, description, date, and time.
- **As a user**, I can view all upcoming events for my family or group on a shared calendar.
- **As a user**, I can add a recurring appointment (e.g., weekly family meetings or doctor appointments).
- **As a user**, I can set a reminder for my appointments to receive a notification before the event.
- **As a user**, I can edit or delete appointments I created, and the changes will be visible to all members of the group.

### **To-Do List Features**

- **As a user**, I can create a shared to-do list, allowing all family members to see tasks.
- **As a user**, I can assign tasks to specific family members, and they will be notified.
- **As a user**, I can mark a task as completed, and the entire group will see the updated status.
- **As a user**, I can add reminders for tasks with specific due dates.

### **File and Image Uploads**

- **As a user**, I can upload images or files to calendar events or tasks, making it easy to share documents (e.g., medical documents, invitations) within the group.

### **Color Coding and Search (Future Features)**

- **As a user**, I can categorize my events using different color codes (e.g., work, family, personal) to keep my calendar organized.
- **As a user**, I can search for specific events or filter events by date, category, or group member, making it easier to find appointments or tasks.

### **User Preferences**

- **As a user**, I can switch between light mode and dark mode for better visual comfort.
- **As a user**, I can set my preferred language and time zone to ensure that calendar events and reminders are displayed in the correct format.

---

## Future Enhancements

- **Notifications**: Email or push notifications for reminders, appointments, and task updates.
- **Role-based Access Control**: More detailed permissions for managing what group members can do.
- **Offline Support**: Enable basic functionalities like viewing appointments and tasks when offline.
- **Recurring Tasks**: Ability to create recurring to-do list tasks (e.g., weekly chores or monthly bill reminders).

---

## Tech Stack

- **Backend:** Django, Django Rest Framework
- **Frontend:** Next.js (App Router)
- **Database:** PostgreSQL (hosted on Render)
- **Storage:** Cloudinary (for images/files)
- **Deployment:** Docker, Render (Backend + PostgreSQL), Vercel (Frontend)
