# Interactive UI Components  
React JS Assignment used to build multiple UI components like form, rich text editor and a counter.

## 🚀 Overview  
This project is a **React-based interactive UI** that includes multiple components such as a **counter, user data form, and a rich text editor**. The application utilizes state management, animations, and data persistence to create a dynamic user experience.

## 🎯 Features  

### 🟢 Counter Component  
- Provides **Increment, Decrement, and Reset** buttons.  
- The **background color level** changes dynamically as the counter increases, following a **Bezier curve effect**.  
- The **reset button** restores the counter and background effect to zero.

### 🟢 User Data Form  
- Collects **name, address, email, and phone number** from the user.  
- **Auto-generates a unique User ID** upon form entry.  
- **Stores data in LocalStorage/Zustand/RTK** for persistence.  
- Displays an **unsaved changes alert** if the user tries to close the browser with unsubmitted data.

### 🟢 Rich Text Editor  
- Displays **user-entered data** in a **rich text format**.  
- Supports **bold, italic, underline, lists**, and other formatting options.  
- Ensures **data persistence** between sessions.

---

## 🛠️ Tech Stack  
- **React.js** – Core framework  
- **Material UI / Chakra UI / Next UI** – UI components  
- **React Router** – Routing management  
- **Zustand** – State management  
- **React Spring** – Animations  
- **React Charts** – Data visualization  

---

## 📂 Project Structure  

📦 upliance
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┣ 📜 Counter.jsx
┃ ┃ ┣ 📜 UserForm.jsx
┃ ┃ ┣ 📜 RichTextEditor.jsx
┃ ┃ ┗ 📜 Dashboard.jsx
┃ ┣ 📂 pages
┃ ┃ ┗ 📜 Home.jsx
┃ ┣ 📂 store
┃ ┃ ┣ 📜 useCounterStore.js
┃ ┃ ┗ 📜 useUserStore.js
┃ ┣ 📜 App.js
┃ ┗ 📜 index.js
┣ 📜 package.json
┣ 📜 README.md
┗ 📜 .gitignore



## Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Clone the Repository
```sh
git clone https://github.com/chakriswamireddy/Interactive-Counter-And-Form.git
cd calc-builder
```

### Install Dependencies
```sh
npm install
```

### Run the Development Server
```sh
npm run dev
```

### Build for Production
```sh
npm run build
```

### Preview the Production Build
```sh
npm run preview
```

## License
This project is licensed under the [MIT License](LICENSE).